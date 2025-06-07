/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qijhdgjvkhctrxyfmyif.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
