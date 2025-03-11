import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// @ts-expect-error: next-pwa paketinin TypeScript tipləri yoxdur
import withPWA from "next-pwa";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});

export default withNextIntl(nextConfig);
