import styled from "@emotion/styled";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const Title = styled.div`
  width: 200px;
  height: 60px;
  background-image: url("/assets/login/logo_big.png");
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 16px;
`;

export const Contents = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 21px;
  color: ${colors.black[400]};
  margin-bottom: 56px;
  text-align: center;
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 240px;
  height: 246px;
  margin-bottom: 48px;
`;

export const KaKaoLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 66px;
  background-color: #fee500;
  border: 1px solid ${colors.black[800]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 120px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
  cursor: pointer;
`;

export const LogoIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const LogoIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const NaverLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 66px;
  background-color: #03c75a;
  border: 1px solid ${colors.black[800]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 120px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[1000]};
  cursor: pointer;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 66px;
  background-color: ${colors.black[1000]};
  border: 1px solid ${colors.black[800]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 120px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
  cursor: pointer;
`;

export const BottomContents = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 20px;
  text-align: center;
  color: ${colors.black[400]};
`;

export const UnderlineText = styled.a`
  text-decoration: underline;
`;
