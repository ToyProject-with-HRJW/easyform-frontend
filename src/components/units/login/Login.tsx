import { useEffect, useState } from "react";
import * as S from "./Login.styles";
import { useAuthToken } from "commons/api/hooks/login/useAuthToken";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { IProfile, IUser } from "./Login.types";

declare global {
  interface Window {
    naver: any;
  }
}

export default function Login() {
  const [user, setUser] = useState<IUser>({ access_token: "" });
  const [, setProfile] = useState<IProfile>({
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

  //   const GoogleLogOut = () => {
  //     googleLogout();
  //     setProfile({ email: "", name: "", picture: "" });
  //   };

  // NOTE Naver
  //   useEffect(() => {
  //     const NaverLogin = new window.naver.LoginWithNaverId({
  //       clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
  //       callbackUrl: "http://localhost:3000",
  //       loginButton: {
  //         color: "green",
  //         type: 2,
  //         height: "30",
  //       },
  //     });
  //     NaverLogin.init();

  //     try {
  //       NaverLogin.getLoginStatus((data: any) => {
  //         if (data) {
  //           console.log("token", NaverLogin.accessToken.accessToken);
  //           setProfile({
  //             email: data.email,
  //             name: data.name,
  //             picture: data.picture,
  //           });
  //         }
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  return (
    <S.Wrapper>
      <S.Title />
      <S.Contents>
        지금 로그인하고 설문지를 작성해보세요.
        <br />
        팀원들의 가입 없이 같이 편리하게 작성할 수 있습니다.
      </S.Contents>
      <S.LoginButtonWrapper>
        <S.KaKaoLoginButton>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_kakao.png" />
          </S.LogoIconWrapper>
          카카오 로그인
        </S.KaKaoLoginButton>
        <S.NaverLoginButton>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_naver.png" />
          </S.LogoIconWrapper>
          네이버 로그인
        </S.NaverLoginButton>
        <S.GoogleLoginButton onClick={() => GoogleLogin()}>
          <S.LogoIconWrapper>
            <S.LogoIcon src="/assets/login/icon_google.png" />
          </S.LogoIconWrapper>
          Google 로그인
        </S.GoogleLoginButton>
      </S.LoginButtonWrapper>
      <S.BottomContents>
        로그인은 <S.UnderlineText>개인 정보 처리 방침</S.UnderlineText> 및{" "}
        <S.UnderlineText>서비스 이용약관</S.UnderlineText>에 동의하는 것을
        의미하며,
        <br />
        서비스 이용을 위해 이메일을 수집합니다.
      </S.BottomContents>
    </S.Wrapper>
  );
}
