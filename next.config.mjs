/** @type {import('next').NextConfig} */

// Helper function to generate version string
const generateVersionString = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
  .replace(/[\/,: ]/g, '-')
  .replace('--', '-');
  
  return `v${formattedDate}`;
};

const nextConfig = {
  // Disable directory listing
  images: {
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['images.unsplash.com'],
  },

  // Enable React Strict Mode for additional checks
  reactStrictMode: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_BUILD_VERSION: generateVersionString(),
    NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().toISOString(),
  },

  // Generate build ID from version
  generateBuildId: async () => {
    return generateVersionString();
  },

  // Enable SWC minification (better than Terser)
  swcMinify: true,

  // Optional: If you're using static export
  // output: 'export',
};

export default nextConfig;