import React, { useState, useEffect, useCallback } from "react";

import { useRouter } from "next/router";

import LoadingOverlay from "react-loading-overlay-ts";

import { PuffLoader } from "react-spinners";

import BookingServices from "@/services/lib/customer/booking";

import { useAppContext } from "@/contexts/AppContext";

import { formatDateMoments } from "@/utils/momentDateFormat";

function VerifySection() {
  const router = useRouter();
  const { showToast } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const [detailBooking, setDetailBooking] = useState(null);

  const checkBookByToken = useCallback(async ({ token }) => {
    try {
      setIsLoading(true);
      const response = await BookingServices.bookCheckByToken({
        token: token,
      });

      if (response) {
        setIsLoading(false);
        setDetailBooking(response?.data);
      }
    } catch (error) {
      setIsLoading(false);
      showToast(error?.response?.data?.message || error?.message);
    }
  }, []);

  const onSubmitConfirm = async () => {
    try {
      setIsLoadingSubmit(true);
      const seat_id = [];

      if (Array.isArray(detailBooking?.bookseat)) {
        detailBooking?.bookseat.map((item) => seat_id.push(item?.seat_id));
      }

      const response = await BookingServices.confirmBooking({
        id: detailBooking?.id,
        seat_id: seat_id,
        email: detailBooking?.email,
        token: detailBooking?.token,
      });

      if (response) {
        setIsLoadingSubmit(false);
        showToast(
          `Verify Success, Please check email ${detailBooking?.email} for information`
        );
        router.push("/booking");
      }
    } catch (error) {
      setIsLoadingSubmit(false);
      showToast(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    if (router.isReady && router.query?.token) {
      checkBookByToken({ token: router.query?.token });
    }
  }, [router]);

  return (
    <LoadingOverlay
      active={isLoading || isLoadingSubmit}
      spinner={<PuffLoader />}
      text={"Gathering Data..."}
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
      {isLoading ? "Gathering Data..." : null}

      {!isLoading && detailBooking ? (
        <>
          <div>
            <h2 className="mb-1 text-xl leading-relaxed">
              Hello <strong>{detailBooking?.name}</strong>,
            </h2>

            <h5 className="leading-relaxed text-base mb-5">
              Thanks for Booking Seat at Elemental Bar,
              <br /> Alrighty then, we've got your booking info saved! Here is
              it :
            </h5>

            <div className="mb-5">
              <p className="mb-1 leading-relaxed">
                Name : {detailBooking?.name}
              </p>
              <p className="mb-1 leading-relaxed">
                Email : {detailBooking?.email}
              </p>
              <p className="mb-1 leading-relaxed">
                Phone : {detailBooking?.phone}
              </p>
              <p className="mb-1 leading-relaxed">
                Note : {detailBooking?.note || "-"}
              </p>
              <p className="mb-1 leading-relaxed">
                Booking Date : {formatDateMoments(detailBooking?.created_at)}
              </p>
              <div className="my-1">
                Seat Booked :{" "}
                <div className="flex flex-wrap">
                  {Array.isArray(detailBooking?.bookseat)
                    ? detailBooking?.bookseat.map(
                        (item, index) =>
                          `Seat ${index + 1} ${
                            index + 1 != detailBooking?.bookseat.length
                              ? " - "
                              : ""
                          } `
                      )
                    : "-"}
                </div>
              </div>
            </div>

            <p className="leading-relaxed">
              To continue the next process, please click the button below to
              verify your booking :
            </p>

            <div className="mt-4 text-center">
              <button
                onClick={onSubmitConfirm}
                disabled={isLoadingSubmit}
                className="border rounded-lg border-gray-600 text-center p-1 w-150px"
              >
                {isLoadingSubmit ? "Loading..." : "Verify"}
              </button>
            </div>
          </div>
        </>
      ) : null}

      {!isLoading && !detailBooking ? "Oops.. Something has wrong" : null}
    </LoadingOverlay>
  );
}

export default VerifySection;
