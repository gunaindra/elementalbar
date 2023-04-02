import React, { useState, useCallback, useEffect } from "react";
import Calendar from "react-calendar";

import LoadingOverlay from "react-loading-overlay-ts";
import { PuffLoader } from "react-spinners";

import BookingServices from "@/services/lib/customer/booking";
import { formatDateMoments } from "@/utils/momentDateFormat";

import { useBookingContext } from "@/contexts/BookingContext";
import { Armchair, ArmchairOff } from "tabler-icons-react";

function BookingCalendar() {
  const { setSavedDate, toggleShowCalendar } = useBookingContext();

  /* ------------------------------ Selected Date ------------------------------ */
  const [selectedDate, setSelectedDate] = useState(null);

  /* ------------------------------ Selected Time ------------------------------ */
  const [selectedTime, setSelectedTime] = useState(null);

  /* ------------------------------ Selected Time ------------------------------ */
  const [selectedSeat, setSelectedSeat] = useState([]);

  /* ------------------------------ Booking Date ------------------------------ */
  const [isLoadingBookingDate, setIsLoadingBookingDate] = useState(false);
  const [listBookingDate, setListBookingDate] = useState([]);

  /* ------------------------------ Booking Time ------------------------------ */
  const [isLoadingBookingTime, setIsLoadingBookingTime] = useState(false);
  const [listBookingTime, setListBookingTime] = useState([]);

  /* ------------------------------ Booking Time ------------------------------ */
  const [isLoadingSeat, setIsLoadingSeat] = useState(false);
  const [listSeat, setListSeat] = useState([]);

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

  const getListSeat = useCallback(async ({ bookinglisttime_id }) => {
    try {
      setIsLoadingSeat(true);
      const response = await BookingServices.bookCheckSeatById({
        bookinglisttime_id,
      });

      if (response) {
        setIsLoadingSeat(false);
        const data = response?.data;
        setListSeat(data);
      }
    } catch (error) {
      setIsLoadingSeat(false);
    }
  });

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
    getListSeat({ bookinglisttime_id: value?.id });
  };

  const handleSelectedSeat = (value) => {
    const isIncluded =
      selectedSeat.findIndex((seatId) => seatId == value) != -1 ? true : false;

    if (isIncluded) {
      setSelectedSeat((prevSeat) =>
        prevSeat.filter((seatId) => seatId != value)
      );
    } else {
      setSelectedSeat((prevSeat) => [...prevSeat, value]);
    }
  };

  const handleNext = () => {
    const savedDate = {
      seat_id: selectedSeat,
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
      active={isLoadingBookingDate || isLoadingBookingTime || isLoadingSeat}
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
          setSelectedDate(null);
          setListBookingTime(null);
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
                listBookingDate[date.getDate() - 1]?.year ==
                  date.getFullYear() &&
                listBookingDate[date.getDate() - 1]?.month ===
                  date.getMonth() + 1
              ) {
                if (listBookingDate[date.getDate() - 1]?.status === "empty") {
                  return <div className="mt-1 status-round bg-green-600"></div>;
                } else if (listBookingDate[date.getDate() - 1]?.status !== 1) {
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
                listBookingDate[date.getDate() - 1]?.year ==
                  date.getFullYear() &&
                listBookingDate[date.getDate() - 1]?.month ===
                  date.getMonth() + 1 &&
                listBookingDate[date.getDate() - 1]?.status !== "empty"
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
        <div className="mt-8">
          <p className="text-center mb-1">Choose Time</p>
          <div className="flex flex-wrap justify-around time-wrapper ">
            {listBookingTime.map((time) => {
              return (
                <div key={time?.id} className="flex-1 px-1 my-2">
                  <button
                    disabled={time?.status == "full"}
                    onClick={() => handleSelectedTime(time)}
                    type="button"
                    className={`rounded-lg text-center p-1 w-80px ${
                      time?.id == selectedTime?.id
                        ? "bg-metal text-white border border-metabg-metal"
                        : "border border-gray-600"
                    } ${time?.status == "full" ? "opacity-40" : ""}`}
                  >
                    {time?.status == "full" ? "Booked" : time?.available_at}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {!isLoadingBookingTime &&
      selectedDate &&
      Array.isArray(listBookingTime) &&
      listBookingTime.length < 1 ? (
        <p className="mt-8">No availabilities.</p>
      ) : null}

      {/* Loading Text for Seat */}
      {isLoadingSeat && selectedTime ? (
        <p className="mt-8 text-center">Loading...</p>
      ) : null}

      {!isLoadingSeat &&
      selectedTime &&
      Array.isArray(listSeat) &&
      listSeat.length ? (
        <div className="mt-8">
          <p className="text-center mb-1 pb-2">Choose Seat</p>
          <div className="grid grid-cols-4 gap-2 time-wrapper ">
            {listSeat.map((seat, indexSeat) => {
              return (
                <div key={seat?.id} className="col-auto mb-2">
                  <button
                    disabled={seat?.status == "booked"}
                    onClick={() => handleSelectedSeat(seat?.id)}
                    type="button"
                    className={`d-flex flex-col justify-center items-center rounded-lg text-center p-1 w-80px ${
                      selectedSeat.includes(seat?.id)
                        ? "bg-metal text-white border border-metabg-metal"
                        : "border border-gray-600"
                    } ${seat?.status == "booked" ? "opacity-40" : ""}`}
                  >
                    <div className="flex justify-center items-center">
                      {seat?.status == "booked" ? (
                        <ArmchairOff className="text-metal" />
                      ) : (
                        <Armchair
                          className={
                            selectedSeat.includes(seat?.id)
                              ? "text-white"
                              : "text-metal"
                          }
                        />
                      )}
                    </div>
                    <span className="text-center">
                      {seat?.status == "booked" ? "Booked" : indexSeat + 1}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {selectedTime && selectedSeat.length ? (
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
