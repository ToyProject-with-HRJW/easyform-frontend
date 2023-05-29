import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors } from "commons/styles/palette";
import { fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  padding: 0 1.25vw;

  ${setTabletStyle(css`
    padding: 0 1.668vw;
  `)}

  ${setMobileStyle(css`
    padding: 0 4.444vw;
  `)}
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};
  margin-top: 48px;
  margin-bottom: 24px;

  ${setMobileStyle(css`
    font-size: ${fontSize.mobileFont.MainTitle};
  `)}
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-template-rows: 1fr;
  column-gap: 1.25vw;
  row-gap: 26px;
  margin-bottom: 26px;

  ${setTabletStyle(css`
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    column-gap: 1.668vw;
  `)}

  ${setMobileStyle(css`
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    row-gap: 0;
  `)}
`;
