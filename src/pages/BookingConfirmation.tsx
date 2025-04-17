
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  useEffect(() => {
    // If no booking data is present, redirect to book service page
    if (!bookingData) {
      console.log("No booking data found, redirecting to booking page");
    }
  }, [bookingData]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for choosing our service. We'll contact you shortly to confirm your appointment details.
          </p>
          
          {bookingData && (
            <div className="bg-card p-6 rounded-lg border border-border mb-8 text-left">
              <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {bookingData.customerName}</p>
                <p><span className="font-medium">Vehicle:</span> {bookingData.carBrand} {bookingData.carModel}</p>
                <p><span className="font-medium">Location:</span> {bookingData.city}</p>
                <p><span className="font-medium">Date:</span> {new Date(bookingData.preferredDate).toLocaleDateString()}</p>
                <p><span className="font-medium">Services:</span> {bookingData.selectedServices.join(", ")}</p>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <Button onClick={() => navigate("/")} className="w-full">
              Return to Home
            </Button>
            <Button variant="outline" onClick={() => navigate("/book-service")} className="w-full">
              Book Another Service
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
