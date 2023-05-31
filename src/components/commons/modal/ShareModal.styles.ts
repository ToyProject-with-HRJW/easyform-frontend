import styled from "@emotion/styled";
import { colors } from "commons/styles/palette";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 645px;
  height: 632px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.black[1000]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 3;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 85px;
  padding: 28px 24px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 30px;
  color: #1a1a1a;
  border-bottom: 1px solid #e6e6e6;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 72px;
  padding: 20px 28px;
  border-bottom: 1px solid #e6e6e6;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 228px;
  height: 40px;
  background-color: ${colors.black[800]};
  border-radius: 8px;
`;

export const TabButton = styled.button`
  width: 106px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  color: ${colors.black[400]};
  border: none;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  cursor: pointer;

  &.active {
    background-color: ${colors.blue[200]};
    color: ${colors.black[1000]};
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 385px;
  padding: 24px;
  border-bottom: 1px solid #e6e6e6;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 42px;
`;

export const ContentsTitle = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[100]};
`;

export const ContentsDetail = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 14px;
  color: ${colors.black[300]};
`;

export const URLContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const URLBox = styled.div`
  width: 513px;
  height: 44px;
  padding: 12px 24px;
  background-color: ${colors.black[900]};
  border-radius: 4px;
`;

export const URLCopyButton = styled.button`
  width: 68px;
  height: 44px;
  background-color: ${colors.blue[400]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.blue[100]};
  cursor: pointer;
`;

export const PasswordTitle = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[100]};
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PasswordBox = styled.div`
  width: 114px;
  height: 44px;
  padding: 12px 24px;
  background-color: ${colors.black[900]};
  border-radius: 4px;
  margin-right: 16px;
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 134px;
  height: 40px;
  padding: 8px 16px;
  border: 1px solid ${colors.black[700]};
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
  position: relative;
`;

export const SelectBoxIcon = styled.div<{ isSelectBoxOpen: boolean }>`
  width: 15px;
  height: 15px;
  background-image: ${(props) =>
    props.isSelectBoxOpen
      ? `url("/assets/header/icon_profile_up.png")`
      : `url("/assets/header/icon_profile_down.png")`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const SelectOptionContainer = styled.div<{ isSelectBoxOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isSelectBoxOpen ? "flex" : "none")};
  flex-direction: column;

  width: 134px;
  height: 80px;
  top: 40px;
  left: 0;
  border: 1px solid rgba(16, 40, 72, 0.09);
  background-color: ${colors.black[1000]};
  border-radius: 4px;
`;

export const SelectOption = styled.button`
  height: 40px;
  padding: 8px 16px;
  text-align: left;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 19px;
  color: ${colors.black[200]};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EmailTabBox = styled.div`
  width: 597px;
  height: 44px;
  padding: 12px 24px;
  background-color: ${colors.black[900]};
  border-radius: 4px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 24px;
`;

export const CancelButton = styled.button`
  width: 132px;
  height: 40px;
  background-color: ${colors.black[1000]};
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.black[300]};
  margin-right: 16px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
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
