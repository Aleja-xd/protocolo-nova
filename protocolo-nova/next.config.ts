import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        //port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        //port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
