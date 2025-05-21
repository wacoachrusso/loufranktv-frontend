import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  children?: React.ReactNode;
}

/**
 * SEO component for consistent metadata across pages
 */
export function SEO({
  title = 'LouFrank TV - Premium IPTV Service with 16,000+ HD Channels',
  description = 'Access over 16,000 HD & FHD channels from 50+ countries with ultra-fast zapping and no freezing. Watch on any device with LouFrank TV - The best entertainment for less.',
  keywords = 'IPTV service, HD channels, international TV, movie streaming, television, Firestick TV, premium entertainment, ultra-fast streaming',
  image = '/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png',
  url = 'https://loufrank.tv',
  type = 'website',
  children,
}: SEOProps) {
  // Format title with brand name
  const formattedTitle = `${title} | LouFrank TV`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#0f172a" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
      <link rel="apple-touch-icon" href="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content="LouFrank TV" />
      <meta name="msapplication-TileImage" content="/public/901661ac-f28e-4815-8069-61ae5363a100/logo-color.png" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LouFrank TV" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="LouFrank TV" />
      
      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'LouFrank TV',
          'url': 'https://loufrank.tv',
          'logo': image,
          'description': description,
          'sameAs': [
            'https://facebook.com/loufrankTV',
            'https://twitter.com/loufrankTV',
            'https://instagram.com/loufrankTV'
          ],
          'offers': {
            '@type': 'Offer',
            'price': '15.00',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock'
          }
        })}
      </script>
      
      {/* Any additional head elements */}
      {children}
    </Helmet>
  );
}
