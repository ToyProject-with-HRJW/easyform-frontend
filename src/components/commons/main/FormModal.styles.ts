import styled from "@emotion/styled";
import { colors, fontSize } from "commons/styles/palette";

interface IFormModal {
  isDisplayRecent?: boolean;
  isDisplayMy?: boolean;
}

export const FormModal = styled.div<IFormModal>`
  display: ${(props) =>
    props.isDisplayRecent ? "flex" : props.isDisplayMy ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  top: 30px;
  right: 0;
  width: 322px;
  height: 146px;
  padding: 4px 0;
  background-color: ${colors.black[950]};
  border: 1px solid ${colors.black[700]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 4px;
`;

export const FormModalWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 20px;

  :hover {
    background-color: ${colors.blue[400]};
  }
`;

export const ModalIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const ModalIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ModalText = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 17px;
  color: ${colors.black[200]};
`;
