import React, { useEffect } from 'react';
import { SITE_URL, generateRobotsTxt } from '../utils/seo-urls';

/**
 * Dynamic Robots.txt Generator Component
 * This page returns a robots.txt file when accessed directly
 */
export default function Robots() {
  useEffect(() => {
    // Generate the robots.txt content
    const robotsTxt = generateRobotsTxt(SITE_URL);
    
    // Create a Blob from the content
    const blob = new Blob([robotsTxt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Trigger download or display
    window.location.href = url;
    
    // Clean up the URL object later
    return () => URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Robots.txt</h1>
        <p>Generating robots.txt file...</p>
      </div>
    </div>
  );
}
