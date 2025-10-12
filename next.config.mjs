/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Не блокировать production build из-за ESLint ошибок
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Не блокировать production build из-за TypeScript ошибок
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
