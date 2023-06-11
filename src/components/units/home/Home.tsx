import * as S from "./Home.styles";

export default function Home() {
  return (
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
