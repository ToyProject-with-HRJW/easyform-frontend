import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

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
  width: 13px;
  height: 23px;
  background-image: url("/assets/main/icon_seeMore.png");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
