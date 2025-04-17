
import React from "react";
import BookingForm from "./BookingForm";
import ServiceBenefits from "./ServiceBenefits";

interface SidebarContentProps {
  cityName: string;
}

const SidebarContent = ({ cityName }: SidebarContentProps) => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-24 space-y-6">
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="bg-primary/10 p-4 border-b border-border">
            <h2 className="text-xl font-bold">Book Car Detailing in {cityName}</h2>
            <p className="text-sm text-muted-foreground mt-1">Complete the form below to schedule your appointment</p>
          </div>
          <div className="p-4">
            <BookingForm selectedCity={cityName} />
          </div>
        </div>
        <ServiceBenefits cityName={cityName} />
      </div>
    </div>
  );
};

export default SidebarContent;
