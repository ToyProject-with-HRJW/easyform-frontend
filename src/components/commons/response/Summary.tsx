import * as S from "./Summary.styles";

export default function Summary() {
  return (
    <S.SummaryContainer>
      <S.ResponseTitle>Question</S.ResponseTitle>
      <S.ResponseCount>42 Responses</S.ResponseCount>
      <S.ChartContainer></S.ChartContainer>
    </S.SummaryContainer>
  );
}
