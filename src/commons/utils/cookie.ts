import { Cookies } from "react-cookie";

const cookies = new Cookies();

const getCookie = (name: string) => {
  return cookies.get(name);
};

export const useCookie = { getCookie };
