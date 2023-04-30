import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTabletStyle } from "commons/styles/mediaQuery";
import { colors, fontSize } from "commons/styles/palette";

export const Wrapper = styled.div`
  padding: 0 1.667vw;
`;

export const FormTitle = styled.div`
  margin-top: 48px;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 4rem;
  line-height: 48px;
  color: ${colors.black[100]};
`;

export const FormTitleInput = styled.input`
  margin-top: 48px;
  margin-bottom: 32px;
  height: 20px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: ${colors.black[100]};

  :focus {
    outline: 1px solid ${colors.blue[100]};
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[100]};
  }
`;

export const FormDescription = styled.div<{ isEditDescription: boolean }>`
  width: 59.583vw;
  background-color: ${colors.black[950]};
  border: ${(props) =>
    props.isEditDescription ? `1px solid ${colors.blue[100]}` : "none"};
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 21px;
  color: ${colors.black[500]};
  padding: 16px 24px;
  margin-bottom: 32px;

  :hover {
    border: 1px solid ${colors.blue[100]};
  }

  ${setTabletStyle(css`
    width: 100%;
  `)}
`;

export const FormDescriptionInput = styled.input`
  width: 100%;
  height: 21px;
  color: ${colors.black[200]};
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: ${colors.black[200]};
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddQuestionButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 59.583vw;
  cursor: pointer;

  ${setTabletStyle(css`
    width: 100%;
  `)}
`;

export const AddQuestionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 132px;
  height: 40px;
  background-color: ${colors.black[950]};
  border: 1px solid ${colors.black[700]};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 24px;
  color: ${colors.blue[100]};
  margin-top: -8px;
  margin-bottom: 16px;
`;
