import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const IndividualContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px 32px 7px 32px;
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
  margin-bottom: 48px;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 22px;
  margin-bottom: 25px;
`;

export const SelectedOption = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 12px;
`;

export const Option = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[200]};
`;
