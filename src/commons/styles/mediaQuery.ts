import { SerializedStyles, css } from "@emotion/react";
import { breakPoints } from "./palette";

export const setTabletStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.tablet}px) {
    ${style}
  }
`;

export const setMobileStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.mobile}px) {
    ${style}
  }
`;
