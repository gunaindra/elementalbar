import React from "react";

import siteData from "@/data/site";
import { NextSeo } from "next-seo";

import { BookingWrapperContext } from "@/contexts/BookingContext";
import BookingContainer from "@/components/Booking/BookingContainer";

export default function Booking() {
  return (
    <div className="min-h-screen relative sm:px-0 md:px-250px">
      <NextSeo
        title={siteData.siteName}
        description={siteData.description}
        openGraph={{
          type: "website",
          title: siteData.siteName,
          description: siteData.description,
          url: process.env.BASE_URL,
          site_name: siteData.siteName,
        }}
      />

      <div className="md:container md:mx-auto py-5">
        <div className="mb-5">
          <h1 className="text-heading text-center">
            Booking Your Elemental Bar Experience
          </h1>
          <p className="text-center">
            Unleash your taste buds with the ultimate dining experience. Book
            your table with us and savor every moment.
            <br />
            From ambiance to cuisine, we'll make it an unforgettable experience.
          </p>
        </div>

        <div className="booking-lines-border flex flex-col justify-center items-center">
          <BookingWrapperContext>
            <BookingContainer />
          </BookingWrapperContext>
        </div>
      </div>
    </div>
  );
}

Booking.title = "Booking";
Booking.layout = "LandingLayout";
