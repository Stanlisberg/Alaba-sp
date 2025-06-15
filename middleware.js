import { NextResponse } from "next/server";

export function middleware(request) {
  // Get token from cookies or headers

  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // Define public routes that don't require authentication
  const publicRoutes = ["/login", "/"];

  // Define restricted routes for logged-in users
  const restrictedRoutes = ["/login", "/"];

  if (token && restrictedRoutes.includes(pathname)) {
    console.log("User is logged in, redirecting to /sales-report");
    return NextResponse.redirect(new URL("/sales-report", request.url));
  }

  // Check if the current path is a public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // If no token and trying to access protected route
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Optional: Validate token here
  // You could make an API call to verify the token

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
