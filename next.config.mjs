/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  productionBrowserSourceMaps: false,
  
  // Security headers (adds important security headers to responses)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Consider adding Content-Security-Policy (CSP) after testing
        ],
      },
    ];
  },
  
  // Disable directory listing
  images: {
    dangerouslyAllowSVG: false, // set to true only if you need SVG handling
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable React Strict Mode for additional checks
  reactStrictMode: true,
  
  // Optional: If you're using static export
  // output: 'export',
  
  // Optional: Enable SWC minification (better than Terser)
  swcMinify: true,
};

export default nextConfig;