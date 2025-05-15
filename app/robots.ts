export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://dialershub.com/sitemap.xml',
    host: 'https://dialershub.com',
  };
}