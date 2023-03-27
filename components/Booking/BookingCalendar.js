import React, { useState, useCallback, useEffect } from "react";
import Calendar from "react-calendar";

import LoadingOverlay from "react-loading-overlay-ts";
import { PuffLoader } from "react-spinners";

import BookingServices from "@/services/lib/customer/booking";
import { formatDateMoments } from "@/utils/momentDateFormat";

import { useBookingContext } from "@/contexts/BookingContext";

function BookingCalendar() {
  const { setSavedDate, toggleShowCalendar } = useBookingContext();

  /* ------------------------------ Selected Date ------------------------------ */
  const [selectedDate, setSelectedDate] = useState(null);

  /* ------------------------------ Selected Time ------------------------------ */
  const [selectedTime, setSelectedTime] = useState(null);

  /* ------------------------------ Booking Date ------------------------------ */
  const [isLoadingBookingDate, setIsLoadingBookingDate] = useState(false);
  const [listBookingDate, setListBookingDate] = useState([]);

  /* ------------------------------ Booking Time ------------------------------ */
  const [isLoadingBookingTime, setIsLoadingBookingTime] = useState(false);
  const [listBookingTime, setListBookingTime] = useState([]);

  const getBookingByMonth = useCallback(async ({ date }) => {
    try {
      setIsLoadingBookingDate(true);
      const response = await BookingServices.bookCheckByMonth({ date });

      if (response) {
        setIsLoadingBookingDate(false);
        const data = response?.data;
        setListBookingDate(data);
      }
    } catch (error) {
      setIsLoadingBookingDate(false);
    }
  }, []);

  const getBookingByDate = useCallback(async ({ date }) => {
    try {
      setSelectedTime(null);
      setIsLoadingBookingTime(true);
      const response = await BookingServices.bookCheckByDate({ date });

      if (response) {
        setIsLoadingBookingTime(false);
        const data = response?.data?.listtime;
        setListBookingTime(data);
      }
    } catch (error) {
      setIsLoadingBookingTime(false);
    }
  }, []);

  const handleSelectedDate = (value, event) => {
    setSelectedTime(null);
    setSelectedDate(value);

    getBookingByDate({
      date: formatDateMoments(
        new Date(value).toLocaleDateString(),
        "YYYY-MM-DD"
      ),
    });
  };

  const handleSelectedTime = (value) => {
    setSelectedTime(value);
  };

  const handleNext = () => {
    const savedDate = {
      bookinglisttime_id: selectedTime?.id,
      date: selectedDate,
      time: selectedTime?.time,
    };

    setSavedDate(savedDate);
    toggleShowCalendar();
  };

  useEffect(() => {
    getBookingByMonth({
      date: formatDateMoments(new Date().toLocaleDateString(), "YYYY-MM"),
    });
  }, []);

  return (
    <LoadingOverlay
      active={isLoadingBookingDate || isLoadingBookingTime}
      spinner={<PuffLoader />}
      text={"Loading..."}
      styles={{
        wrapper: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Calendar
        minDate={new Date()}
        defaultValue={null}
        onClickDay={handleSelectedDate}
        onClickMonth={(value) => {
          getBookingByMonth({
            date: formatDateMoments(
              new Date(value).toLocaleDateString(),
              "YYYY-MM"
            ),
          });
        }}
        onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
          setSelectedDate(null)
          setListBookingTime(null)
          getBookingByMonth({
            date: formatDateMoments(
              new Date(activeStartDate).toLocaleDateString(),
              "YYYY-MM"
            ),
          });
        }}
        value={selectedDate}
        prevLabel={"‹"}
        nextLabel={"›"}
        next2Label={"»"}
        prev2Label={"«"}
        tileContent={({ _, date, view }) => {
          if (Array.isArray(listBookingDate) && listBookingDate.length) {
            // Check is Time Passed
            const isPassed =
              Date.parse(
                formatDateMoments(listBookingDate[date.getDate() - 1]?.fulldate)
              ) -
                Date.parse(new Date(Date.now() - 86400000)) <=
              0;

            // If Current view is By Every 1 Month (Day) && Time Not Passed
            if (view == "month" && !isPassed) {
              if (
                listBookingDate[date.getDate() - 1].year ==
                  date.getFullYear() &&
                listBookingDate[date.getDate() - 1].month ===
                  date.getMonth() + 1
              ) {
                if (listBookingDate[date.getDate() - 1].can_book === 1) {
                  return <div className="mt-1 status-round bg-green-600"></div>;
                } else if (listBookingDate[date.getDate() - 1].can_book !== 1) {
                  return <div className="mt-1 status-round bg-red-600"></div>;
                }
              }
            }
          }
        }}
        tileDisabled={({ _, date, view }) => {
          if (Array.isArray(listBookingDate) && listBookingDate.length) {
            if (view == "month") {
              if (
                listBookingDate[date.getDate() - 1].year ==
                  date.getFullYear() &&
                listBookingDate[date.getDate() - 1].month ===
                  date.getMonth() + 1 &&
                listBookingDate[date.getDate() - 1].can_book !== 1
              ) {
                return true;
              }
            }
          }
        }}
      />

      {/* Loading Text */}
      {isLoadingBookingTime ? (
        <p className="mt-8 text-center">Loading...</p>
      ) : null}

      {!isLoadingBookingTime &&
      Array.isArray(listBookingTime) &&
      listBookingTime.length ? (
        <>
          <div className="flex flex-wrap justify-around time-wrapper mt-8">
            {listBookingTime.map((time) => {
              return (
                <div key={time?.id} className="flex-1 px-1 my-2">
                  <button
                    onClick={() => handleSelectedTime(time)}
                    type="button"
                    className={`rounded-lg text-center p-1 w-80px ${
                      time?.id == selectedTime?.id
                        ? "bg-metal text-white border border-metabg-metal"
                        : "border border-gray-600"
                    }`}
                  >
                    {time?.available_at}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {!isLoadingBookingTime &&
      selectedDate &&
      Array.isArray(listBookingTime) &&
      listBookingTime.length < 1 ? (
        <p className="mt-8">No availabilities.</p>
      ) : null}

      {selectedTime ? (
        <div className="flex justify-center mt-5">
          <button
            onClick={handleNext}
            type="button"
            className="border rounded-lg border-gray-600 text-center p-1 w-100px"
          >
            Next
          </button>
        </div>
      ) : null}
    </LoadingOverlay>
  );
}

export default BookingCalendar;
