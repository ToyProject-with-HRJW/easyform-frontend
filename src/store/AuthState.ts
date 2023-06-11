import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const AuthState = atom({
  key: "AuthState",
  default: { isLogin: false, accessToken: "", refreshToken: "" },
  effects_UNSTABLE: [persistAtom],
});
