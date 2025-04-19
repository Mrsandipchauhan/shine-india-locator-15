
import { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto',
  sizes = '100vw'
}: ImageOptimizerProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    // Reset when src changes
    setImageSrc(src);
    setIsLoaded(false);
  }, [src]);
  
  // Generate srcset for responsive images
  const generateSrcSet = () => {
    // If it's already a WebP or optimized image, or an external URL just return the original
    if (src.includes('webp') || src.startsWith('http') || src.startsWith('data:')) {
      return undefined;
    }
    
    // Basic responsive image sizes
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    const extension = src.split('.').pop()?.toLowerCase();
    
    // If it's an image that can be resized
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) {
      const basePath = src.substring(0, src.lastIndexOf('.'));
      return sizes.map(size => `${basePath}-${size}.webp ${size}w`).join(', ');
    }
    
    return undefined;
  };
  
  const handleError = () => {
    // Fallback to original image if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchpriority}
      onLoad={() => setIsLoaded(true)}
      onError={handleError}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      srcSet={generateSrcSet()}
      sizes={sizes}
    />
  );
};

export default ImageOptimizer;
