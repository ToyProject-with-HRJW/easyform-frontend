import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 88px;
  padding: 0 1.25vw;
  border-bottom: 1px solid ${colors.black[800]};

  ${setTabletStyle(css`
    padding: 0 1.668vw;
    height: 64px;
  `)}

  ${setMobileStyle(css`
    display: none;
  `)}
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 320px;
  padding: 8px 16px 8px 12px;
  border: 1px solid ${colors.black[600]};
  border-radius: 6px;
`;

export const SearchIcon = styled.div`
  width: 15px;
  height: 15px;
`;

export const SearchIconImage = styled.img`
  width: 100%;
  height: 100%;
  color: ${colors.black[500]};
`;

export const SearchInput = styled.input`
  width: 264px;
  height: 24px;
  font-family: "Inter";
  font-size: ${fontSize.deskTopFont.subTitle};
  font-weight: 450px;
  line-height: 24px;
  letter-spacing: 0.2px;
  border: none;

  :focus {
    outline: ${colors.black[1000]};
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[500]};
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    /* width: 입력값;
    height: 입력값;
    background: url(경로) center center no-repeat; */
    /* cursor: pointer; */
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.blue[100]};
  border-radius: 4px;
  border: none;
  color: ${colors.black[1000]};
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;
