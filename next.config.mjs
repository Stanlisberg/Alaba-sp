/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
