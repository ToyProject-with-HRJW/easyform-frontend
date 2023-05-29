import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./RemoveModal.styles";
import { useRouter } from "next/router";

interface IRemoveModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function RemoveModal({ setIsModalOpen }: IRemoveModalProps) {
  const router = useRouter();

  const MAIN_PAGE = router.asPath.includes("main");

  const onClickCancelRemove = () => {
    setIsModalOpen(false);
  };

  // NOTE 추후 해당 응답 삭제 기능 함수에 추가 필요
  const onClickConfirmRemove = () => {
    setIsModalOpen(false);
  };

  return (
    <S.RemoveModalContainer>
      <S.ModalTitle>{MAIN_PAGE ? "설문지 삭제" : "응답 삭제"}</S.ModalTitle>
      <S.ModalContents>
        {MAIN_PAGE
          ? "설문지를 삭제하시겠습니까?"
          : "해당 응답지를 삭제하시겠습니까?"}
        <br />
        {MAIN_PAGE
          ? "삭제된 설문지는 더 이상 보실 수 없습니다."
          : "삭제된 응답자는 다시 확인할 수 없습니다."}
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
