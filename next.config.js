/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            { // Prod
                protocol: 'https',
                hostname: 'watchtower-sigma.vercel.app',
            }
        ],
        loader: "default",
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
