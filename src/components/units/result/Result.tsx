import { MouseEvent, useState } from "react";
import * as S from "./Result.styles";
import Summary from "components/commons/response/Summary";
import Individual from "components/commons/response/Individual";

export default function Result() {
  const [selected, setSelected] = useState("summary");

  const onClickCategory = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLButtonElement).value);
  };

  return (
    <S.Wrapper>
      <S.Title>103 Responses</S.Title>
      <S.CategoryContainer>
        <S.CategoryTab
          className={`${selected === "summary" ? "active" : ""}`}
          onClick={onClickCategory}
          value="summary"
        >
          Summary
        </S.CategoryTab>
        <S.CategoryTab
          className={`${selected === "individual" ? "active" : ""}`}
          onClick={onClickCategory}
          value="individual"
        >
          Individual
        </S.CategoryTab>
      </S.CategoryContainer>

      {selected === "individual" && (
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
        <Summary />
        <Individual />
      </S.SummaryWrapper>
    </S.Wrapper>
  );
}
