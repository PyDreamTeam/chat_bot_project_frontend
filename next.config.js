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
        unoptimized: true,
        loader: "default",
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
    experimental: {
        scrollRestoration: true,
    },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
