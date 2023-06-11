import * as S from "./Main.styles";
import FormContainer from "components/commons/main/FormContainer";

export default function Main() {
  const mainData = "";

  return mainData ? (
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
  ) : (
    <S.Wrapper>
      <S.InformationContainer>
        <S.ImageContainer>
          <S.Image src="/assets/img_home.png" />
        </S.ImageContainer>
        <S.Logo />
        <S.InformationText>
          작성된 설문지가 없습니다.
          <br />
          설문지를 작성해 주세요.
        </S.InformationText>
      </S.InformationContainer>
    </S.Wrapper>
  );
}
