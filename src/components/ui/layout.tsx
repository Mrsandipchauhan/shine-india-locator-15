
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full px-4 mx-auto max-w-7xl overflow-x-hidden ${className}`}>
      {children}
    </div>
  );
};
