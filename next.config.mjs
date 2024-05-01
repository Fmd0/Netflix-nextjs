/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uhdtv.io",
                port: '',
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
