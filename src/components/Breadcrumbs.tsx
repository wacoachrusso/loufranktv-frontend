import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../utils/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs navigation component
 * Provides structured navigation paths that improve SEO and user experience
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include home as the first item if not already included
  const breadcrumbItems = items[0]?.url === '/' ? items : [
    { name: 'Home', url: '/' },
    ...items
  ];

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
        {breadcrumbItems.map((item, index) => {
          // Check if this is the last item
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={item.url} className="flex items-center">
              {/* Add separator except for first item */}
              {index > 0 && (
                <span className="mx-1 md:mx-2 text-muted-foreground">/</span>
              )}
              
              {isLast ? (
                // Current page is not a link and has aria-current
                <span className="text-primary font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                // Other pages are links
                <Link 
                  to={item.url} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      
      {/* Structured data for SEO (hidden, handled by SEO component) */}
    </nav>
  );
}
