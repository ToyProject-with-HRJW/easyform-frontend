import * as S from "./Main.styles";
import FormContainer from "components/commons/main/FormContainer";

export default function Main() {
  return (
    <S.Wrapper>
      <S.Title>Recent Forms</S.Title>
      <S.ListWrapper>
        <FormContainer />
        <FormContainer />
      </S.ListWrapper>

      <S.Title>My Forms</S.Title>
      <S.ListWrapper>
        <FormContainer />
      </S.ListWrapper>
    </S.Wrapper>
  );
}
