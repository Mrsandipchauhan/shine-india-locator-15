
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import { useLocation } from "react-router-dom";

interface BookingDialogProps {
  selectedService?: string;
}

const BookingDialog = ({ selectedService }: BookingDialogProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Check if current page is a service location page
  const isServiceLocationPage = 
    location.pathname.startsWith('/locations/') ||
    location.pathname.startsWith('/city/') ||
    location.pathname.startsWith('/services/');
  
  useEffect(() => {
    // Only show dialog if we're on a service location page
    if (isServiceLocationPage) {
      // Show dialog after 12 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 12000);
      
      return () => clearTimeout(timer);
    }
  }, [isServiceLocationPage]);
  
  // If not on a service location page, don't render the dialog
  if (!isServiceLocationPage) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Car Detailing Service</DialogTitle>
        </DialogHeader>
        <BookingForm selectedService={selectedService} />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
