/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     appDir: true,
     compiler: {
          styledComponents: true,
     },
     images: {
          domains: ["*"],
     },
};

module.exports = nextConfig;
