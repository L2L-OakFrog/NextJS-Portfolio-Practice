import { ScriptProps } from 'next/script';

export const JsonLd = ({ type = 'WebSite' }: { type?: string }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Dialers Hub",
    "url": "https://dialershub.com",
    "description": "Professional telemarketing company specializing in lead conversion",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dialershub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/dialershub",
      "https://www.linkedin.com/company/dialershub"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};