import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const PCTBWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  height: 60px;
  padding: 0 13.75vw;
  background-color: #f7f9fb;

  ${setTabletStyle(css`
    padding: 0 1.668vw;
  `)}

  ${setMobileStyle(css`
    display: none;
  `)}
`;

export const MBWrapper = styled.div`
  display: none;

  ${setMobileStyle(css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    width: 100%;
    height: 60px;
    background-color: #f7f9fb;
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

export const MBSearchContainer = styled.div`
  display: none;

  ${setMobileStyle(css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 1.173vw;
  `)}
`;

export const BackIconContainer = styled.div`
  width: 1.5%;
  height: 12px;
  cursor: pointer;
`;

export const BackIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 93%;
  height: 36px;
  padding: 10.5px 14.5px;
  border: 1px solid ${colors.black[600]};
  border-radius: 4px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 14.5px;
  width: 15px;
  height: 15px;
  z-index: 2;
`;

export const SearchIconImage = styled.img`
  width: 100%;
  height: 100%;
  color: ${colors.black[500]};
`;

export const SearchInput = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  height: 34px;
  padding-left: 40px;
  font-size: ${fontSize.deskTopFont.subTitle};
  font-weight: 450px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: ${colors.black[200]};
  border: none;
  border-radius: 4px;

  :focus {
    outline: 1px solid ${colors.blue[100]};
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[500]};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: url("/assets/icon_search_cancel.png") center center no-repeat;
    position: relative;
    right: 8px;
    cursor: pointer;
  }
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

  width: 70%;
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

export const ProfileButtonIcon = styled.div<{ isDisplayProfile: boolean }>`
  width: 14px;
  height: 14px;
  background-image: ${(props) =>
    props.isDisplayProfile
      ? `url('/assets/header/icon_profile_up.png')`
      : `url("/assets/header/icon_profile_down.png")`};
  background-repeat: no-repeat;
  background-position: center;
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

export const ProfileModal = styled.div<{ isDisplayProfile: boolean }>`
  display: ${(props) => (props.isDisplayProfile ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  right: 14.5vw;
  top: 60px;

  width: 322px;
  height: 141px;
  padding: 16px 0;
  background-color: ${colors.black[950]};
  border: 1px solid rgba(16, 40, 72, 0.09);
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 4px;

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

  width: 100%;
  height: 36px;
  padding-left: 16px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background-color: ${colors.blue[400]};
  }
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
`;

export const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e9ecef;
  margin: 8px 0;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 36px;
  padding-left: 20px;
  cursor: pointer;

  :hover {
    background-color: ${colors.blue[400]};
  }
`;

export const Logout = styled.div`
  color: ${colors.red[100]};
  font-weight: 450;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 24px;
  letter-spacing: 0.2px;
`;
