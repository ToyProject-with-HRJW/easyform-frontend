import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./RemoveModal.styles";

interface IRemoveModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function RemoveModal({ setIsModalOpen }: IRemoveModalProps) {
  const onClickCancelRemove = () => {
    setIsModalOpen(false);
  };

  // NOTE 추후 해당 응답 삭제 기능 함수에 추가 필요
  const onClickConfirmRemove = () => {
    setIsModalOpen(false);
  };

  return (
    <S.RemoveModalContainer>
      <S.ModalTitle>응답 삭제</S.ModalTitle>
      <S.ModalContents>
        해당 응답지를 삭제하시겠습니까?
        <br />
        삭제된 응답자는 다시 확인할 수 없습니다.
      </S.ModalContents>
      <S.ModalButtonContainer>
        <S.ModalCancelButton onClick={onClickCancelRemove}>
          취소
        </S.ModalCancelButton>
        <S.ModalConfirmButton onClick={onClickConfirmRemove}>
          확인
        </S.ModalConfirmButton>
      </S.ModalButtonContainer>
    </S.RemoveModalContainer>
  );
}
