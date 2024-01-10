/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { // Dev
                protocol: 'http',
                hostname: 'localhost:3000',
            },
            { // Prod
                protocol: 'https',
                hostname: 'watchtower-sigma.vercel.app',
            }
        ],
        loader: "default",
        path: "/_next/image",
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
}

module.exports = nextConfig
