import styled from "@emotion/styled";
import { breakPoints, colors } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  padding: 0 13.75vw;
  background-color: #f7f9fb;

  @media screen and (max-width: ${breakPoints.tablet}px) {
    padding: 0 1.668vw;
  }

  @media screen and (max-width: ${breakPoints.mobile}px) {
    padding: 0 2.086vw;
  }
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

  @media screen and (max-width: ${breakPoints.mobile}px) {
    display: none;
  }
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

export const ProfileButtonIcon = styled.img`
  width: 8px;
  height: 4px;
  cursor: pointer;
`;

export const MBRightContainer = styled.div`
  display: none;

  @media screen and (max-width: ${breakPoints.mobile}px) {
    visibility: visible;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 51px;
    height: 100%;
  }
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
