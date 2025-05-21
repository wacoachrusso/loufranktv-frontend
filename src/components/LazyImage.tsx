import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  placeholder?: string;
  animation?: boolean;
  threshold?: number;
  delay?: number;
}

/**
 * LazyImage component for optimized image loading with fade-in effects
 */
export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIiMxMTFcIi8+PC9zdmc+',
  animation = true,
  threshold = 0.1,
  delay = 0,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  // Initialize intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    // Get current ref value
    const currentImgRef = imgRef.current;
    if (currentImgRef) {
      observer.observe(currentImgRef);
    }
    
    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [threshold]);
  
  // Create ref for image element
  const imgRef = React.useRef<HTMLImageElement>(null);
  
  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };
  
  // Generate responsive sizes if needed
  const getSrcSet = () => {
    if (!src || src.includes('data:image')) return undefined;
    
    // Handle Unsplash images
    if (src.includes('unsplash.com')) {
      return `${src.replace(/w=\d+/, 'w=400')} 400w, ${src.replace(/w=\d+/, 'w=800')} 800w, ${src} 1200w`;
    }
    
    return undefined;
  };
  
  // Base styles for wrapper and image
  const baseImageClasses = `transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`;
  
  // Don't start loading until in viewport
  const actualSrc = isInView ? src : placeholder;
  
  return animation ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden"
      style={{ width, height }}
    >
      <img
        ref={imgRef}
        src={actualSrc}
        alt={alt}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        loading="lazy"
        onLoad={handleImageLoaded}
        className={baseImageClasses}
        srcSet={getSrcSet()}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  ) : (
    <img
      ref={imgRef}
      src={actualSrc}
      alt={alt}
      width={typeof width === 'number' ? width : undefined}
      height={typeof height === 'number' ? height : undefined}
      loading="lazy"
      onLoad={handleImageLoaded}
      className={baseImageClasses}
      srcSet={getSrcSet()}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
