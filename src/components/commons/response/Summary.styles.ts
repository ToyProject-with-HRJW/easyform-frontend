import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 32px;
  margin-bottom: 32px;
  width: 59.583vw;
  background-color: ${colors.black[950]};
  border: 1px solid ${colors.black[700]};
  border-radius: 4px;

  ${setTabletStyle(css`
    width: 79.5vw;
  `)}
`;

export const ResponseTitle = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[100]};
  margin-bottom: 16px;
`;

export const ResponseCount = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[300]};
  margin-bottom: 40px;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;

  width: 41.51vw;
  height: 14.167vw;

  ${setTabletStyle(css`
    width: 55.386vw;
    height: 18.902vw;
  `)}
`;
