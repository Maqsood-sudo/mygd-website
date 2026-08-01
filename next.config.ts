import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mizan",
        destination: "https://www.zeffy.com/en-US/ticketing/mizan-bbq",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
