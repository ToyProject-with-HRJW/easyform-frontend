import MultipleOption from "components/commons/response/individual/MultipleOption";
import * as S from "./Result.styles";
import OneOption from "components/commons/response/individual/OneOption";
import BarGraph from "components/commons/response/summary/BarGraph";
import DoughnutGraph from "components/commons/response/summary/DoughnutGraph";
import Paragraph from "components/commons/response/summary/Paragraph";
import { useRouter } from "next/router";
import IndividualParagraph from "components/commons/response/individual/IndividualParagraph";
import { useState } from "react";

export default function Result() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const SUMMARY_PAGE = router.asPath.includes("summary");
  const INDIVIDUAL_PAGE = router.asPath.includes("individual");

  const onClickSummary = () => {
    router.push("/result/summary");
  };

  const onClickIndividual = () => {
    router.push("/result/individual");
  };

  const onClickRemoveButton = () => {
    setIsModalOpen(true);
  };

  const onClickCancelRemove = () => {
    setIsModalOpen(false);
  };

  // NOTE 추후 해당 응답 삭제 기능 함수에 추가 필요
  const onClickConfirmRemove = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <S.Title>103 Responses</S.Title>
      <S.CategoryContainer>
        <S.CategoryTab
          className={`${SUMMARY_PAGE ? "active" : ""}`}
          onClick={onClickSummary}
          value="summary"
        >
          Summary
        </S.CategoryTab>
        <S.CategoryTab
          className={`${INDIVIDUAL_PAGE ? "active" : ""}`}
          onClick={onClickIndividual}
          value="individual"
        >
          Individual
        </S.CategoryTab>
      </S.CategoryContainer>

      {INDIVIDUAL_PAGE && (
        <>
          <S.IndividualMenuBar>
            <S.ResponseMoveContainer>
              <S.PreviousButton>Previous</S.PreviousButton>
              <S.CountContainer>
                <S.CurrentPage>1</S.CurrentPage>/ 103
              </S.CountContainer>
              <S.NextButton>Next</S.NextButton>
            </S.ResponseMoveContainer>
            <S.RemoveButton onClick={onClickRemoveButton}>
              해당 응답 삭제
            </S.RemoveButton>
          </S.IndividualMenuBar>
          {isModalOpen && (
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
          )}
        </>
      )}

      <S.SummaryWrapper>
        {SUMMARY_PAGE && (
          <>
            <BarGraph />
            <DoughnutGraph />
            <Paragraph />
          </>
        )}
        {INDIVIDUAL_PAGE && (
          <>
            <OneOption />
            <MultipleOption />
            <IndividualParagraph />
          </>
        )}
      </S.SummaryWrapper>
    </S.Wrapper>
  );
}
