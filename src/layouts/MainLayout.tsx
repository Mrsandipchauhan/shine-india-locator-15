
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageUtilities from "@/components/PageUtilities";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <div className="absolute top-[-400px] right-[-400px] w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      <PageUtilities />
    </div>
  );
};

export default MainLayout;
