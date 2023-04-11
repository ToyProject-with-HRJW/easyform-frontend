import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  padding: 0 13.75vw;
  background-color: #f7f9fb;

  ${setTabletStyle(css`
    padding: 0 1.668vw;
  `)}

  ${setMobileStyle(css`
    padding: 0 2.086vw;
  `)}
`;

export const LogoContainer = styled.div`
  width: 96px;
  height: 21px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PCTBRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100px;
  height: 100%;

  ${setMobileStyle(css`
    display: none;
  `)}
`;

export const AlertSearchIcon = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const AlertSearchIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const ProfileImage = styled.div`
  width: 24px;
  height: 24px;
  background-color: #aed0ce;
  border: 1px solid ${colors.black[400]};
  border-radius: 50%;
  margin-right: 14px;
`;

export const ProfileButtonIcon = styled.div`
  width: 10px;
  height: 7px;
  background-image: url("/assets/header/icon_profile.png");
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const MBRightContainer = styled.div`
  display: none;

  ${setMobileStyle(css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 51px;
    height: 100%;
  `)}
`;

export const HamburgerIcon = styled.div`
  width: 16px;
  height: 12px;
  cursor: pointer;
`;

export const HamburgerIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileModal = styled.div<{ isDisplay: boolean }>`
  display: ${(props) => (props.isDisplay ? "flex" : "none")};
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: flex-start;
  position: fixed;
  right: 14.5vw;
  top: 60px;

  width: 322px;
  height: 141px;
  background-color: ${colors.black[1000]};
  border: 1px solid rgba(16, 40, 72, 0.09);
  box-shadow: 0px 2px 2px -1px rgba(27, 35, 44, 0.04),
    0px 8px 16px -2px rgba(27, 36, 44, 0.12);
  border-radius: 6px;

  ${setTabletStyle(css`
    right: 2.9vw;
  `)}

  ${setMobileStyle(css`
    display: none;
  `)}
`;

export const ModalTitle = styled.div`
  font-weight: 450;
  font-size: 1.2rem;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #7e8b99;
  font-family: "Inter";

  width: 100%;
  height: 20px;
  padding: 16px;
  margin-bottom: 14px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding-left: 19px;
  margin-bottom: 17px;
`;

export const ModalIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;

export const ModalIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EmailInfo = styled.div`
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #272235;
  font-family: "Inter";
`;

export const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e9ecef;
  margin-bottom: 17px;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 20px;
  padding-left: 20px;
  cursor: pointer;
`;

export const Logout = styled.div`
  color: ${colors.red[100]};
  font-weight: 450;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 24px;
  letter-spacing: 0.2px;
  font-family: "Inter";
`;
