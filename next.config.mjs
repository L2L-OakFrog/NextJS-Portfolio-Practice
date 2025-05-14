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
    domains: ['images.unsplash.com'],
  },
  
  // Enable React Strict Mode for additional checks
  reactStrictMode: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_BUILD_VERSION: `v${new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/[\/,:\s]/g, '-')}`
  },
  
  // Optional: If you're using static export
  // output: 'export',
  
  // Optional: Enable SWC minification (better than Terser)
  swcMinify: true,
};

export default nextConfig;