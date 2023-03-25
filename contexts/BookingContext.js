import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingWrapperContext({ children }) {
  const [isShowCalendar, setIsShowCalendar] = useState(true);
  const [savedDate, setSavedDate] = useState({});

  const toggleShowCalendar = () => {
    setIsShowCalendar((prevState) => !prevState);
  };

  let state = {
    isShowCalendar,
    savedDate,
    setSavedDate,
    toggleShowCalendar,
  };

  return (
    <BookingContext.Provider value={state}>{children}</BookingContext.Provider>
  );
}

export function useBookingContext() {
  return useContext(BookingContext);
}
