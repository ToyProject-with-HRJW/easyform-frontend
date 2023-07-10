import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
});
