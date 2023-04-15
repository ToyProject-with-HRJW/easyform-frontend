import { useState } from "react";
import * as S from "./Main.styles";

export default function Main() {
  const [isDisplayRecent, setIsDisplayRecent] = useState(false);
  const [isDisplayMy, setIsDisplayMy] = useState(false);

  const onClickSeeMoreRecent = () => {
    setIsDisplayRecent(!isDisplayRecent);
  };

  const onClickSeeMoreMy = () => {
    setIsDisplayMy(!isDisplayMy);
  };

  return (
    <S.Wrapper>
      <S.Title>Recent Forms</S.Title>
      <S.ListWrapper>
        <S.FormContainer>
          <S.FormImageWrapper>
            <S.FormImage />
          </S.FormImageWrapper>
          <S.FormInfoWrapper>
            <S.FormInfoContainer>
              <S.FormDisabledBadge>Not Accepting Responses</S.FormDisabledBadge>
              <S.FormTitle>Account Approval Research</S.FormTitle>
              <S.FormEditDate>edited 3days ago</S.FormEditDate>
            </S.FormInfoContainer>
            <S.ButtonWrapper onClick={onClickSeeMoreRecent}>
              <S.FormSeeMoreButton />
              <S.FormModal isDisplayRecent={isDisplayRecent}>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_share.png" />
                  </S.ModalIcon>
                  <S.ModalText>설문지 공유</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_delete.png" />
                  </S.ModalIcon>
                  <S.ModalText>삭제</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_copy.png" />
                  </S.ModalIcon>
                  <S.ModalText>복제</S.ModalText>
                </S.FormModalWrapper>
              </S.FormModal>
            </S.ButtonWrapper>
          </S.FormInfoWrapper>
        </S.FormContainer>
        <S.FormContainer>
          <S.FormImageWrapper>
            <S.FormImage />
          </S.FormImageWrapper>
          <S.FormInfoWrapper>
            <S.FormInfoContainer>
              <S.FormActiveBadge>Accepting Responses</S.FormActiveBadge>
              <S.FormTitle>Account Approval Research</S.FormTitle>
              <S.FormEditDate>edited 3days ago</S.FormEditDate>
            </S.FormInfoContainer>
            <S.ButtonWrapper onClick={onClickSeeMoreRecent}>
              <S.FormSeeMoreButton />
              <S.FormModal isDisplayRecent={isDisplayRecent}>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_share.png" />
                  </S.ModalIcon>
                  <S.ModalText>설문지 공유</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_delete.png" />
                  </S.ModalIcon>
                  <S.ModalText>삭제</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_copy.png" />
                  </S.ModalIcon>
                  <S.ModalText>복제</S.ModalText>
                </S.FormModalWrapper>
              </S.FormModal>
            </S.ButtonWrapper>
          </S.FormInfoWrapper>
        </S.FormContainer>
      </S.ListWrapper>

      <S.Title>My Forms</S.Title>
      <S.ListWrapper>
        <S.FormContainer>
          <S.FormImageWrapper>
            <S.FormImage />
          </S.FormImageWrapper>
          <S.FormInfoWrapper>
            <S.FormInfoContainer>
              <S.FormDisabledBadge>Not Accepting Responses</S.FormDisabledBadge>
              <S.FormTitle>Account Approval Research</S.FormTitle>
              <S.FormEditDate>edited 3days ago</S.FormEditDate>
            </S.FormInfoContainer>
            <S.ButtonWrapper onClick={onClickSeeMoreMy}>
              <S.FormSeeMoreButton />
              <S.FormModal isDisplayMy={isDisplayMy}>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_share.png" />
                  </S.ModalIcon>
                  <S.ModalText>설문지 공유</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_delete.png" />
                  </S.ModalIcon>
                  <S.ModalText>삭제</S.ModalText>
                </S.FormModalWrapper>
                <S.FormModalWrapper>
                  <S.ModalIcon>
                    <S.ModalIconImage src="/assets/main/icon_copy.png" />
                  </S.ModalIcon>
                  <S.ModalText>복제</S.ModalText>
                </S.FormModalWrapper>
              </S.FormModal>
            </S.ButtonWrapper>
          </S.FormInfoWrapper>
        </S.FormContainer>
      </S.ListWrapper>
    </S.Wrapper>
  );
}
