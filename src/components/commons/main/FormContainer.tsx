import { useEffect, useRef, useState } from "react";
import * as S from "./FormContainer.styles";
import FormModal from "./FormModal";
import modalClose from "commons/utils/modalClose";

export default function FormContainer() {
  const [isDisplayFormModal, setIsDisplayFormModal] = useState(false);

  const outSide = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalClose(isDisplayFormModal, setIsDisplayFormModal, outSide);
  });

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
        <S.ButtonWrapper ref={outSide}>
          <S.FormSeeMoreButton onClick={onClickSeeMoreRecent} />
          <FormModal
            isDisplayFormModal={isDisplayFormModal}
            setIsDisplayFormModal={setIsDisplayFormModal}
          />
        </S.ButtonWrapper>
      </S.FormInfoWrapper>
    </S.FormContainer>
  );
}
