
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";

const BookingDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Show dialog after 7 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Car Detailing Service</DialogTitle>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
