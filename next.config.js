/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
<<<<<<< Updated upstream
=======

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:4000/:path*",
      },
    ];
  },
>>>>>>> Stashed changes
};

module.exports = nextConfig;
