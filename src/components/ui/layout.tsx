
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
};
