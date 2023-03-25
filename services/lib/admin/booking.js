import axiosClient from "@/services/axiosClient";

export default {
  createBooking({ available }) {
    return axiosClient.post("bookinglist/create", {
      available,
    });
  },

  createBookingByMonth({ month, time }) {
    return axiosClient.post("bookinglist/create-by-month", {
      month,
      time,
    });
  },

  updateBooking({ available }) {
    return axiosClient.put(`bookinglist/update/${id}`, {
      available,
    });
  },

  removeBooking({ id }) {
    return axiosClient.delete(`bookinglist/remove/${id}`);
  },

  getBookingById({ id }) {
    return axiosClient.get(`bookinglist/row/${id}`);
  },

  getListBooking({ status = "booked" }) {
    return axiosClient.get(`bookinglist/list?status=${status}`);
  },

  getListBookingByDate({ date, status = available }) {
    return axiosClient.get(
      ` bookinglist/by-date/list?date=${date}&status=${status}`
    );
  },
};
