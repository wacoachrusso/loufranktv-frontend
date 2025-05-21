import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { LazyImage } from "./LazyImage";

export interface SetupGuideProps {
  isRecommended?: boolean;
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: string[];
  downloadUrl?: string;
  downloadLabel?: string;
  imageUrl?: string;
  delay?: number;
  category?: string;
}

export function SetupGuideCard({
  title,
  description,
  icon,
  steps,
  downloadUrl,
  downloadLabel = "Download Guide",
  imageUrl,
  isRecommended = false,
  delay = 0
}: SetupGuideProps) {
  return (
    <motion.div
      className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            Recommended
          </span>
        </div>
      )}
      
      {/* Card Header with Icon and Title */}
      <div className="p-4 sm:p-5 md:p-6 border-b border-border flex items-start gap-2 sm:gap-3 md:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Optional Image Preview */}
      {imageUrl && (
        <div className="relative aspect-video bg-black/50">
          {/* Use direct img tag with error handling and detailed styling */}
          <img 
            src={imageUrl} 
            alt={`${title} setup preview`} 
            className="w-full h-full object-contain p-2"
            loading="lazy"
            onError={(e) => {
              // Fallback for failed image loads
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIiMxMTFcIi8+PHRleHQgeD1cIjUwJVwiIHk9XCI1MCVcIiBkb21pbmFudC1iYXNlbGluZT1cIm1pZGRsZVwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZm9udC1mYW1pbHk9XCJtb25vc3BhY2VcIiBmb250LXNpemU9XCIyMFwiIGZpbGw9XCIjNkI2MUZGXCI+JHt0aXRsZS5jaGFyQXQoMCkgKyB0aXRsZS5jaGFyQXQoMSl9PC90ZXh0Pjwvc3ZnPg==`;
              console.error(`Failed to load image for ${title}`);
            }}
            style={{ maxHeight: "200px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
      
      {/* Setup Steps */}
      <div className="p-4 sm:p-5 md:p-6 flex-grow">
        <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Setup Steps:</h4>
        <ol className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] sm:text-xs">{index + 1}</span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
        
        {/* Download Button */}
        {downloadUrl && (
          <Button
            variant="outline"
            size="sm"
            className="w-full border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open(downloadUrl, "_blank")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
            </svg>
            {downloadLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );
}
