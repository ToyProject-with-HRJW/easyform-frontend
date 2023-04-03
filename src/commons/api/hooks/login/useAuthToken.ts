import { useMutation } from "react-query";
import { instance } from "../../instance";

interface ITokenWithType {
  type: string;
  token: string;
}

const postAuthToken = async (tokenWithType: ITokenWithType) => {
  await instance.post(`/auth/token`, tokenWithType);
};

export const useAuthToken = () => {
  return useMutation(postAuthToken, {
    onError: (err) => {
      console.log(err);
    },
  });
};
