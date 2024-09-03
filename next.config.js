/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: '',
    BACKEND_URL: '',
  },
  webpack: function (config) {
    Object.assign(config.module, {
      noParse: [/alasql/]
    });
    return config;
  },
}