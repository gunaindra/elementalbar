import axiosClient from "@/services/axiosClient";

export default {
  bookCheckByMonth({ date }) {
    return axiosClient.get(`booking/date/list?date=${date}`);
  },

  bookCheckByDate({ date }) {
    return axiosClient.get(`booking/time/list?date=${date}`);
  },

  bookCheckSeatById({ bookinglisttime_id }) {
    return axiosClient.get(
      `booking/seat/list?bookinglisttime_id=${bookinglisttime_id}`
    );
  },

  bookCheckByToken({ token }) {
    return axiosClient.get(`booking/check/${token}`);
  },

  confirmBooking({ id, token, email, seat_id }) {
    return axiosClient.post("booking/confirm", {
      id,
      token,
      email,
      seat_id,
    });
  },

  booking({ seat_id, name, email, message, phone }) {
    return axiosClient.post("booking/booked", {
      seat_id,
      name,
      email,
      message,
      phone,
    });
  },
};
