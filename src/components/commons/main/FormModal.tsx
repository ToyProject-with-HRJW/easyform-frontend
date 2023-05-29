import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./FormModal.styles";
import RemoveModal from "../modal/RemoveModal";

interface IFormModalProps {
  isDisplayFormModal: boolean;
}

export default function FormModal({ isDisplayFormModal }: IFormModalProps) {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const onClickRemoveButton = () => {
    setIsRemoveModalOpen(true);
  };

  return (
    <>
      <S.FormModal isDisplayFormModal={isDisplayFormModal}>
        <S.FormModalWrapper>
          <S.ModalIcon>
            <S.ModalIconImage src="/assets/main/icon_share.png" />
          </S.ModalIcon>
          <S.ModalText>설문지 공유</S.ModalText>
        </S.FormModalWrapper>
        <S.FormModalWrapper onClick={onClickRemoveButton}>
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
      {isRemoveModalOpen && (
        <RemoveModal setIsModalOpen={setIsRemoveModalOpen} />
      )}
    </>
  );
}
