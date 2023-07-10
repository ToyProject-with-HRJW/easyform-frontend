import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getCookie = (name: string) => {
  return cookies.get(name);
};

const removeCookie = (name: string) => {
  return cookies.remove(name);
};

export const useCookie = { getCookie, removeCookie };
