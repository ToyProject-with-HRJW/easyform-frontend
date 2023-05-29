import { useState } from "react";
import * as S from "./FormContainer.styles";
import FormModal from "./FormModal";

export default function FormContainer() {
  const [isDisplayFormModal, setIsDisplayFormModal] = useState(false);

  const onClickSeeMoreRecent = () => {
    setIsDisplayFormModal(!isDisplayFormModal);
  };

  return (
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
          <FormModal isDisplayFormModal={isDisplayFormModal} />
        </S.ButtonWrapper>
      </S.FormInfoWrapper>
    </S.FormContainer>
  );
}
