
import React from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-4 left-4 z-50 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
