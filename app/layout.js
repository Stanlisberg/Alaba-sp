import { Inter } from "next/font/google";
import Providers from "./redux/provider";
import ToastProvider from "./utils/toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alaba SP",
  description: "An intuitive inventory app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
