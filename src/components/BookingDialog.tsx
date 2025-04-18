
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import { useLocation, useParams } from "react-router-dom";

interface BookingDialogProps {
  selectedService?: string;
}

const BOOKING_DIALOG_DISMISSED = "shine_detailers_booking_dialog_dismissed";

const BookingDialog = ({ selectedService }: BookingDialogProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const params = useParams();
  
  // Automatically detect service from URL if on a service page
  const [detectedService, setDetectedService] = useState(selectedService || "");
  
  // Check if current page is a service location page
  const isServiceLocationPage = 
    location.pathname.startsWith('/locations/') ||
    location.pathname.startsWith('/city/') ||
    location.pathname.startsWith('/area/') ||
    location.pathname.startsWith('/services/');
  
  useEffect(() => {
    // Detect service from URL if on a service page
    if (params.serviceId) {
      const serviceId = params.serviceId;
      // Convert service-id to proper name (e.g., "exterior-detailing" to "Exterior Detailing")
      const formattedService = serviceId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      setDetectedService(formattedService);
    }
  }, [params]);
  
  useEffect(() => {
    // Check if user has dismissed the dialog
    const dialogDismissed = localStorage.getItem(BOOKING_DIALOG_DISMISSED) === "true";
    
    // Only show dialog if we're on a service location page and dialog wasn't dismissed
    if (isServiceLocationPage && !dialogDismissed) {
      // Show dialog after 15 seconds (increased from 12 to avoid overlapping with location prompt)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, [isServiceLocationPage]);
  
  const handleDismissForever = () => {
    localStorage.setItem(BOOKING_DIALOG_DISMISSED, "true");
    setIsOpen(false);
  };
  
  // If not on a service location page, don't render the dialog
  if (!isServiceLocationPage) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Car Detailing Service</DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule your appointment or browse our services.
          </DialogDescription>
        </DialogHeader>
        <BookingForm selectedService={detectedService || selectedService} />
        <div className="mt-4 text-center">
          <button 
            onClick={handleDismissForever}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Don't show this popup again
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
