import * as S from "components/commons/layout/header/Header.styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.LogoContainer>
        <S.LogoImage src="assets/header/logo.png" />
      </S.LogoContainer>

      <S.PCTBRightContainer>
        <S.AlertSearchIcon>
          <S.AlertSearchIconImage src="assets/header/icon_alert.png" />
        </S.AlertSearchIcon>
        <S.ProfileContainer>
          <S.ProfileImage />
          <S.ProfileButtonIcon src="assets/header/icon_profile.png" />
        </S.ProfileContainer>
      </S.PCTBRightContainer>

      <S.MBRightContainer>
        <S.AlertSearchIcon>
          <S.AlertSearchIconImage src="assets/header/icon_search.png" />
        </S.AlertSearchIcon>
        <S.HamburgerIcon>
          <S.HamburgerIconImage src="assets/header/icon_hamburger.png" />
        </S.HamburgerIcon>
      </S.MBRightContainer>
    </S.Wrapper>
  );
}
