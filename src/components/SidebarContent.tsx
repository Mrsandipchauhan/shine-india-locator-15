
import React from "react";
import BookingForm from "./BookingForm";
import ServiceBenefits from "./ServiceBenefits";

interface SidebarContentProps {
  cityName: string;
}

const SidebarContent = ({ cityName }: SidebarContentProps) => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-24">
        <BookingForm selectedCity={cityName} />
        <ServiceBenefits cityName={cityName} />
      </div>
    </div>
  );
};

export default SidebarContent;
