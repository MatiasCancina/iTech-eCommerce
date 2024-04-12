/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resource.logitech.com",
      },
      {
        protocol: "https",
        hostname: "assets2.razerzone.com",
      },
      {
        protocol: "https",
        hostname: "www.germanos.gr",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
      },
      {
        protocol: "https",
        hostname: "maconline.de",
      },
      {
        protocol: "https",
        hostname: "dist.contentdriver.com.au",
      },
      {
        protocol: "https",
        hostname: "assets.corsair.com",
      },
      {
        protocol: "https",
        hostname: "www.duckychannel.com.tw",
      },
      {
        protocol: "https",
        hostname: "media.steelseriescdn.com",
      },
    ],
  },
};

export default nextConfig;
