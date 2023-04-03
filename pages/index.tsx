import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthToken } from "../src/commons/api/hooks/login/useAuthToken";

declare global {
  interface Window {
    naver: any;
  }
}

export default function Home() {
  const [, setAccessToken] = useState({ email: "", name: "" });

  const { mutate } = useAuthToken();

  // NOTE Google
  useEffect(() => {
    const url = new URL(window.location.href);
    const googleHash = url.hash;

    if (googleHash) {
      const splitToken = googleHash.split("=")[1].split("&")[0];

      axios
        .get(
          "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
            splitToken,
          {
            headers: {
              authorization: splitToken,
              accept: "application/json",
            },
          }
        )
        .then((data: any) => {
          setAccessToken({ email: data.data.email, name: data.data.id });
          mutate({ type: "GOOGLE", token: splitToken });
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // NOTE Naver
  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000",
      loginButton: {
        color: "green",
        type: 2,
        height: "30",
      },
    });
    naverLogin.init();

    try {
      naverLogin.getLoginStatus((data: any) => {
        if (data) {
          console.log("token", naverLogin.accessToken.accessToken);
          setAccessToken({ email: data.email, name: data.name });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onClickGoogle = () => {
    const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`;

    window.location.assign(oAuthURL);
  };

  return (
    <>
      <button onClick={onClickGoogle}>구글 로그인</button>
      <button id="naverIdLogin" />
    </>
  );
}
