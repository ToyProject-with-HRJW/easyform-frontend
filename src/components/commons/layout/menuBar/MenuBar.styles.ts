import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { fontSize } from "commons/styles/palette";
import { colors } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 88px;
  padding: 0.885vw 1.25vw;
  border-bottom: 1px solid ${colors.black[800]};

  ${setTabletStyle(css`
    padding: 0.885vw 1.668vw;
    height: 64px;
  `)}
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 148px;
  height: 53px;
`;

export const CategoryTitle = styled.button`
  width: 74px;
  height: 100%;

  font-weight: 500;
  font-size: ${fontSize.deskTopFont.MainTitle};
  line-height: 29px;
  color: ${colors.black[500]};
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &.active {
    border-bottom: 1px solid ${colors.blue[100]};
    color: ${colors.blue[100]};
    font-weight: 600;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 471px;
  height: 40px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[300]};
`;

export const ResponseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 117px;
`;

export const MiddleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 158px;
`;

export const TextButton = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[300]};
  cursor: pointer;
`;

export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 40px;
  border-radius: 4px;
  background-color: ${colors.blue[100]};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[1000]};
  cursor: pointer;
`;
