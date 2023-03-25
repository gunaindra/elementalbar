import moment from "moment";

export function dateToNow(date) {
  if (typeof date == "string") {
    let d = moment(date, "YYYY-MM-DD'T'HH:mm:ss.SSS'Z'")
      .startOf("minute")
      .fromNow();
    return d;
  }
}

export function differenceBetweenTwoDate(date1, date2, unitType = "day") {
  if (!typeof date1 === "string" || !typeof date2 === "string") {
    return;
  }

  let a = moment(date1);
  let b = moment(date2);

  return a.diff(b, unitType);
}

export function formatDateMoments(value, format = "D MMMM YYYY") {
  if (value && typeof value === "string") {
    return moment(value).format(format);
  }
}
