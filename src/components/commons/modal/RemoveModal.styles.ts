import styled from "@emotion/styled";
import { colors, fontSize } from "commons/styles/palette";

export const RemoveModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 328px;
  height: 188px;
  padding: 24px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.black[1000]};
  box-shadow: 0px 0px 8px rgba(145, 145, 145, 0.2);
  border-radius: 4px;
`;

export const ModalTitle = styled.div`
  font-weight: 500;
  font-size: ${fontSize.deskTopFont.title};
  line-height: 21px;
  color: ${colors.black[100]};
  margin-bottom: 10px;
`;

export const ModalContents = styled.div`
  font-weight: 400;
  font-size: ${fontSize.deskTopFont.subTitle};
  line-height: 21px;
  color: ${colors.black[300]};
  margin-bottom: 27px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ModalCancelButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.blue[400]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const ModalConfirmButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.blue[100]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[1000]};
  cursor: pointer;
`;
