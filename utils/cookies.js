import Cookies from "js-cookie";

export const setCookies = (cookies) => {
  Object.keys(cookies).forEach((key) => {
    Cookies.set(key, cookies[key], {
      secure: true,
    });
  });
};

export const getCookies = (key) => Cookies.get(key);

export const getAllCookies = () => Cookies.get();

export const removeAllCookies = () => {
  Object.keys(Cookies.get()).forEach((key) => {
    Cookies.remove(key);
  });
};
