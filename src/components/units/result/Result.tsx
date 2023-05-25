import * as S from "./Result.styles";
import Individual from "components/commons/response/Individual";
import BarGraph from "components/commons/response/summary/BarGraph";
import DoughnutGraph from "components/commons/response/summary/DoughnutGraph";
import Paragraph from "components/commons/response/summary/Paragraph";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();

  const SUMMARY_PAGE = router.asPath.includes("summary");
  const INDIVIDUAL_PAGE = router.asPath.includes("individual");

  const onClickSummary = () => {
    router.push("/result/summary");
  };

  const onClickIndividual = () => {
    router.push("/result/individual");
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
        <S.IndividualMenuBar>
          <S.ResponseMoveContainer>
            <S.PreviousButton>Previous</S.PreviousButton>
            <S.CountContainer>
              <S.CurrentPage>1</S.CurrentPage>/ 103
            </S.CountContainer>
            <S.NextButton>Next</S.NextButton>
          </S.ResponseMoveContainer>
          <S.RemoveButton>해당 응답 삭제</S.RemoveButton>
        </S.IndividualMenuBar>
      )}

      <S.SummaryWrapper>
        <BarGraph />
        <DoughnutGraph />
        <Paragraph />
        <Individual />
      </S.SummaryWrapper>
    </S.Wrapper>
  );
}
