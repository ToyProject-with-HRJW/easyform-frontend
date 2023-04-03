import axios from "axios";

export const instance = axios.create();

instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) return res.data.data;
  },

  (err) => {
    console.log(err);
  }
);
