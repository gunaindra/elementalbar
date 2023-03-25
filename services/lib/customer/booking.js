import axiosClient from "@/services/axiosClient";

export default {
  bookCheckByMonth({ date }) {
    return axiosClient.get(`booking/list-date?date=${date}`);
  },

  bookCheckByDate({ date }) {
    return axiosClient.get(`booking/check-by-date?date=${date}`);
  },

  bookCheckById({ id }) {
    return axiosClient.get(`booking/check/${id}`);
  },

  confirmBooking({ id, token, email }) {
    return axiosClient.post("booking/confirm", {
      id,
      token,
      email,
    });
  },

  booking({ bookinglisttime_id, name, email, message }) {
    return axiosClient.post("booking/booked", {
      bookinglisttime_id,
      name,
      email,
      message,
    });
  },
};
