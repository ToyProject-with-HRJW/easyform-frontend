import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle } from "commons/styles/mediaQuery";
import { breakPoints, colors } from "commons/styles/palette";

export default function MBSearchButton() {
  return (
    <WriteButton>
      <WriteIcon>
        <WriteIconImage src="assets/icon_write.png" />
      </WriteIcon>
    </WriteButton>
  );
}

const WriteButton = styled.div`
  display: none;

  ${setMobileStyle(css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    width: 56px;
    height: 56px;
    right: 16px;
    bottom: 40px;
    background-color: ${colors.blue[100]};
    box-shadow: 4px 4px 12px rgba(54, 53, 81 0.25);
    border-radius: 16px;
    cursor: pointer;
  `)}
`;

const WriteIcon = styled.div`
  width: 18px;
  height: 18px;
`;

const WriteIconImage = styled.img`
  width: 100%;
  height: 100%;
`;
