import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors } from "commons/styles/palette";

export const Wrapper = styled.div`
  padding: 0 1.25vw;

  ${setTabletStyle(css`
    padding: 0 1.668vw;
  `)}

  ${setMobileStyle(css`
    padding: 0 4.444vw;
  `)}
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 360px;
  height: 308px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageContainer = styled.div`
  width: 322px;
  height: 212px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.div`
  width: 96px;
  height: 21px;
  background-image: url("/assets/header/logo.png");
  filter: grayscale(100%);
  margin: 10px 0 8px 0;
`;

export const InformationText = styled.div`
  width: 165px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;
  text-align: center;
  color: ${colors.black[400]};
`;
