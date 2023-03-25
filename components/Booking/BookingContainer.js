import React from "react";

import { useBookingContext } from "@/contexts/BookingContext";

import BookingCalendar from "@/components/Booking/BookingCalendar";
import BookingForm from "@/components/Booking/BookingForm";

function BookingComponents() {
  const { isShowCalendar } = useBookingContext();
  return isShowCalendar ? <BookingCalendar /> : <BookingForm />;
}

export default BookingComponents;
