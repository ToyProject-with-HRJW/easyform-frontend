import * as S from "./Individual.styles";

export default function MultipleOption() {
  return (
    <S.IndividualContainer>
      <S.ResponseTitle>Untitled Question</S.ResponseTitle>
      <S.OptionContainer>
        <S.SelectedOption type="checkbox" />
        <S.Option>Option 1</S.Option>
      </S.OptionContainer>
      <S.OptionContainer>
        <S.SelectedOption type="checkbox" />
        <S.Option>Option 1</S.Option>
      </S.OptionContainer>
    </S.IndividualContainer>
  );
}
