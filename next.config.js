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
     async redirects() {
          return [
               {
                    source: "/",
                    destination: "/home",
                    permanent: true,
               },
          ];
     },
};

module.exports = nextConfig;
