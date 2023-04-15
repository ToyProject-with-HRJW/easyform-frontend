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

  ${setTabletStyle(css`
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    column-gap: 1.668vw;
  `)}

  ${setMobileStyle(css`
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    row-gap: 0;
  `)}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 17.188vw;
  height: 15.104vw;
  background-color: ${colors.black[1000]};
  border: 2px solid ${colors.black[800]};
  border-radius: 8px;
  cursor: pointer;

  ${setTabletStyle(css`
    width: 45.313vw;
    height: 38.802vw;
  `)}

  ${setMobileStyle(css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 91.111vw;
    height: 23.889vw;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid ${colors.black[800]};
  `)}
`;

export const FormImageWrapper = styled.div`
  width: 100%;
  height: 9.479vw;
  overflow: hidden;

  ${setTabletStyle(css`
    height: 24.74vw;
  `)}

  ${setMobileStyle(css`
    width: 24.444vw;
    height: 15vw;
    border: 1px solid ${colors.black[800]};
    border-radius: 4px;
  `)}
`;

export const FormImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${setMobileStyle(css`
    width: 80%;
    height: 65%;
    align-items: flex-start;
  `)}
`;

export const FormInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  padding: 16px;

  ${setMobileStyle(css`
    padding: 5px 16px;
    height: 100%;
    justify-content: flex-start;
  `)}
`;

export const FormDisabledBadge = styled.div`
  width: 148px;
  height: 21px;
  padding: 4px 10px;
  margin-bottom: 11px;
  background-color: ${colors.blue[400]};
  border-radius: 16px;
  font-size: ${fontSize.deskTopFont.category};
  font-weight: 400;
  line-height: 13px;
  color: ${colors.black[200]};

  ${setMobileStyle(css`
    width: 130px;
    height: 17px;
    padding: 2px 6px;
    margin-bottom: 8px;
    line-height: 10px;
    font-size: ${fontSize.mobileFont.category};
  `)}
`;

export const FormActiveBadge = styled.div`
  width: 127px;
  height: 21px;
  padding: 4px 10px;
  margin-bottom: 11px;
  background-color: ${colors.blue[200]};
  border-radius: 16px;
  font-size: ${fontSize.deskTopFont.category};
  font-weight: 400;
  line-height: 13px;
  color: ${colors.black[1000]};

  ${setMobileStyle(css`
    width: 110px;
    height: 17px;
    padding: 2px 6px;
    margin-bottom: 8px;
    line-height: 10px;
    font-size: ${fontSize.mobileFont.category};
  `)}
`;

export const FormTitle = styled.div`
  font-size: ${fontSize.deskTopFont.title};
  font-weight: 500;
  line-height: 21px;
  color: ${colors.black[100]};
  margin-bottom: 4px;

  ${setMobileStyle(css`
    font-size: ${fontSize.mobileFont.title};
    font-weight: 500;
    line-height: 14px;
  `)}
`;

export const FormEditDate = styled.div`
  font-size: ${fontSize.deskTopFont.subTitle};
  font-weight: 400;
  line-height: 17px;
  color: ${colors.black[400]};

  ${setMobileStyle(css`
    font-size: ${fontSize.mobileFont.subTitle};
    font-weight: 400;
    line-height: 14px;
  `)}
`;

export const ButtonWrapper = styled.div`
  margin: auto;
  position: relative;
`;

export const FormSeeMoreButton = styled.div`
  width: 4px;
  height: 23px;
  background-image: url("/assets/main/icon_seeMore.png");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

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
