import * as S from "components/commons/layout/header/Header.styles";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [isDisplay, setIsDisplay] = useState(false);

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

setIsDisplay(!isDisplay)
  return (
    <S.Wrapper>
      <S.LogoContainer onClick={onClickLogo}>
        <S.LogoImage src="assets/header/logo.png" />
      </S.LogoContainer>

      <S.PCTBRightContainer>
        <S.AlertSearchIcon>
          <S.AlertSearchIconImage src="assets/header/icon_alert.png" />
        </S.AlertSearchIcon>
        <S.ProfileContainer>
          <S.ProfileImage />
          <S.ProfileButtonIcon
            onClick={onClickProfileButton}
            isDisplay={isDisplay}
          ></S.ProfileButtonIcon>
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

      <S.ProfileModal isDisplay={isDisplay}>
        <S.ModalTitle>Account</S.ModalTitle>
        <S.EmailWrapper>
          <S.ModalIcon>
            <S.ModalIconImage src="assets/header/icon_modal_email.png" />
          </S.ModalIcon>
          <S.EmailInfo>abcdefg@gmail.com</S.EmailInfo>
        </S.EmailWrapper>
        <S.BorderLine />
        <S.LogoutWrapper>
          <S.ModalIcon>
            <S.ModalIconImage src="assets/header/icon_modal_logout.png" />
          </S.ModalIcon>
          <S.Logout>Log out</S.Logout>
        </S.LogoutWrapper>
      </S.ProfileModal>
    </S.Wrapper>
  );
}
