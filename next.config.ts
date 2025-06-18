import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['th', 'en', 'zh', 'ko', 'ja', 'ar', 'hi'],
    defaultLocale: 'th',
  },
};

export default nextConfig;
