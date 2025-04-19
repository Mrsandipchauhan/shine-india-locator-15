import { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  /**
   * loading="lazy" defers loading of images that are outside the viewport
   * loading="eager" loads the image immediately regardless of position
   */
  loading?: 'lazy' | 'eager';
  /**
   * Use 'high' for above-the-fold critical images
   */
  fetchpriority?: 'high' | 'low' | 'auto';
}

/**
 * LazyImage component for optimized image loading
 * - Supports lazy loading for images below the fold
 * - Shows placeholder during loading
 * - Handles loading state transitions smoothly
 */
const LazyImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMWUxZTEiLz48L3N2Zz4=',
  loading = 'lazy',
  fetchpriority = 'auto'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder);
  
  useEffect(() => {
    // Reset loading state when src changes
    setIsLoaded(false);
    setImgSrc(placeholder);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Error loading image: ${src}`);
      // Keep placeholder on error
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholder]);
  
  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchpriority}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-40'}`}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default LazyImage;
