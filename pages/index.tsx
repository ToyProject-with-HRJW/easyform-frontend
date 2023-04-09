import { useEffect, useState } from "react";
import { useAuthToken } from "../src/commons/api/hooks/login/useAuthToken";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

declare global {
  interface Window {
    naver: any;
  }
}

export default function Home() {
  interface IUser {
    access_token: string;
  }

  interface IProfile {
    email: string;
    name: string;
    picture: string;
  }

  const [user, setUser] = useState<IUser>({ access_token: "" });
  const [profile, setProfile] = useState<IProfile>({
    email: "",
    name: "",
    picture: "",
  });

  const { mutate } = useAuthToken();

  // NOTE Google
  useEffect(() => {
    if (user.access_token !== "") {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const GoogleLogin = useGoogleLogin({
    onSuccess: async (res: any) => {
      setUser(res);
      mutate({ type: "GOOGLE", token: res.access_token });
    },
    onError: (err) => console.log(err),
  });

  const GoogleLogOut = () => {
    googleLogout();
    setProfile({ email: "", name: "", picture: "" });
  };

  // NOTE Naver
  useEffect(() => {
    const NaverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000",
      loginButton: {
        color: "green",
        type: 2,
        height: "30",
      },
    });
    NaverLogin.init();

    try {
      NaverLogin.getLoginStatus((data: any) => {
        if (data) {
          console.log("token", NaverLogin.accessToken.accessToken);
          setProfile({
            email: data.email,
            name: data.name,
            picture: data.picture,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <button onClick={() => GoogleLogin()}>구글로그인</button>
      <button onClick={GoogleLogOut}>구글 로그아웃</button>
      <button id="naverIdLogin" />
    </>
  );
}
