import * as S from "./Summary.styles";

export default function Paragraph() {
  return (
    <S.SummaryContainer>
      <S.ResponseTitle>Question</S.ResponseTitle>
      <S.ParagraphResponseCount>3 Responses</S.ParagraphResponseCount>
      <S.AnswerContainer>
        <S.Answer>Answer</S.Answer>
        <S.Answer>Answer</S.Answer>
        <S.Answer>Answer</S.Answer>
      </S.AnswerContainer>
    </S.SummaryContainer>
  );
}
