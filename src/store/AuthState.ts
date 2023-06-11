import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export interface IAuthState {
  isLogin: boolean;
  accessToken: string;
  refreshToken: string;
}

export const AuthState = atom<IAuthState>({
  key: "AuthState",
  default: { isLogin: false, accessToken: "", refreshToken: "" },
  effects_UNSTABLE: [persistAtom],
});
