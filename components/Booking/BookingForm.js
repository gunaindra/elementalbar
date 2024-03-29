import React, { useState, useCallback, useEffect } from "react";

import LoadingOverlay from "react-loading-overlay-ts";
import { PuffLoader } from "react-spinners";

import BookingServices from "@/services/lib/customer/booking";

import { useBookingContext } from "@/contexts/BookingContext";

import { useForm } from "react-hook-form";

import { useAppContext } from "@/contexts/AppContext";

function BookingCalendar() {
  const { savedDate, toggleShowCalendar } = useBookingContext();

  const { showToast } = useAppContext();

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    toggleShowCalendar();
  };

  const onSubmit = async (data) => {
    try {
      setIsLoadingSubmit(true);
      const response = await BookingServices.booking({
        seat_id: savedDate?.seat_id,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        message: data?.message,
      });

      if (response) {
        setIsLoadingSubmit(false);
        toggleShowCalendar();
        showToast(`Booking Success, Please check email ${data?.email}`);
      }
    } catch (error) {
      setIsLoadingSubmit(false);
      showToast(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <LoadingOverlay
      active={isLoadingSubmit}
      spinner={<PuffLoader />}
      text={"Sending Data..."}
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
      <form className="sm:w-auto lg:w-500px" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="name" className="block">
            <span className="text-base">Name</span>
          </label>
          <input
            autoComplete={"off"}
            id="name"
            type="text"
            className="mt-1 block w-full rounded form-input bg-inherit focus:ring focus:ring-metal/50 focus:border-metal"
            placeholder="Enter Name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter name",
              },
            })}
          />

          {errors?.name ? (
            <div className="pt-2 text-red-600">{errors.name.message}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block">
            <span className="text-base">Email</span>
          </label>
          <input
            autoComplete={"off"}
            id="email"
            type="email"
            className="mt-1 block w-full rounded form-input bg-inherit focus:ring focus:ring-metal/50 focus:border-metal"
            placeholder="Enter Email"
            {...register("email", {
              required: {
                value: true,
                message: "Please enter email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "The email you entered is invalid",
              },
            })}
          />

          {errors?.email ? (
            <div className="pt-2 text-red-600">{errors.email.message}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="block">
            <span className="text-base">Phone</span>
          </label>
          <input
            autoComplete={"off"}
            id="phone"
            type="tel"
            className="mt-1 block w-full rounded form-input bg-inherit focus:ring focus:ring-metal/50 focus:border-metal"
            placeholder="Enter Phone"
            {...register("phone", {
              required: {
                value: true,
                message: "Please enter phone",
              },
            })}
          />

          {errors?.phone ? (
            <div className="pt-2 text-red-600">{errors.phone.message}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="note" className="block">
            <span className="text-base">Note</span>
          </label>
          <textarea
            autoComplete={"off"}
            id="note"
            rows={3}
            className="mt-1 block w-full rounded form-input bg-inherit focus:ring focus:ring-metal/50 focus:border-metal"
            placeholder="Enter Note (if Any)"
          />
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="mr-1">
            <button
              onClick={handleBack}
              type="button"
              className="border rounded-lg border-gray-600 text-center p-1 w-100px"
            >
              Back
            </button>
          </div>
          <div className="ml-1">
            <button
              disabled={isLoadingSubmit}
              type="submit"
              className="border rounded-lg border-gray-600 text-center p-1 w-100px"
            >
              {isLoadingSubmit ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </LoadingOverlay>
  );
}

export default BookingCalendar;
