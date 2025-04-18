
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import ServiceLocations from "./pages/ServiceLocations";
import CityLocation from "./pages/CityLocation";
import AreaLocation from "./pages/AreaLocation";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import PageUtilities from "./components/PageUtilities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:cityId" element={<ServiceLocations />} />
          <Route path="/city/:cityId" element={<CityLocation />} />
          <Route path="/area/:areaId" element={<AreaLocation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PageUtilities />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
