import * as S from "./FormModal.styles";

interface IFormModalProps {
  isDisplayRecent: boolean;
}

export default function FormModal({ isDisplayRecent }: IFormModalProps) {
  return (
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
  );
}
