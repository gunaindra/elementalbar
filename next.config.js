/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "next-swc-loader",
        {
          loader: "@svgr/webpack",
          options: { babel: false },
        },
      ],
    });
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  },
};

module.exports = nextConfig;
