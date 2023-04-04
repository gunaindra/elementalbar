import React from "react";

import VerifySection from "@/components/Verify/VerifySection";

export default function Verify() {
  return (
    <div className="min-h-screen relative sm:px-0 md:px-250px">
      <div className="md:container md:mx-auto py-5">
        <div className="mb-5">
          <h1 className="text-heading text-center">Verify Booking</h1>
          <p className="text-center">
            Your booking is just a click away! Verify and confirm now.
          </p>
        </div>

        <div className="booking-lines-border flex flex-col justify-center items-center h-screen">
          <VerifySection />
        </div>
      </div>
    </div>
  );
}

Verify.title = "Verify";
Verify.layout = "LandingLayout";
