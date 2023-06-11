import * as S from "components/commons/layout/header/Header.styles";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isDisplayProfile, setIsDisplayProfile] = useState(false);
  const [isDisplaySearch, setIsDisplaySearch] = useState(false);

  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLoginButton = () => {
    router.replace("/login");
  };

  const onClickProfileButton = () => {
    setIsDisplayProfile(!isDisplayProfile);
  };

  const onClickEmail = () => {
    router.push("/profile");
    setIsDisplayProfile(!isDisplayProfile);
  };

  const onClickSearchIcon = () => {
    setIsDisplaySearch(true);
  };

  const onClickBackIcon = () => {
    setIsDisplaySearch(false);
  };

  return (
    <>
      <S.PCTBWrapper>
        <S.LogoContainer onClick={onClickLogo}>
          <S.LogoImage src="/assets/header/logo.png" />
        </S.LogoContainer>

        {isLogin ? (
          <S.PCTBRightContainer>
            <S.AlertSearchIcon>
              <S.AlertSearchIconImage src="/assets/header/icon_alert.png" />
            </S.AlertSearchIcon>
            <S.ProfileContainer>
              <S.ProfileImage />
              <S.ProfileButtonIcon
                onClick={onClickProfileButton}
                isDisplayProfile={isDisplayProfile}
              ></S.ProfileButtonIcon>
            </S.ProfileContainer>
          </S.PCTBRightContainer>
        ) : (
          <S.LoginButton onClick={onClickLoginButton}>Log In</S.LoginButton>
        )}

        <S.ProfileModal isDisplayProfile={isDisplayProfile}>
          <S.ModalTitle>Account</S.ModalTitle>
          <S.EmailWrapper onClick={onClickEmail}>
            <S.ModalIcon>
              <S.ModalIconImage src="/assets/header/icon_modal_email.png" />
            </S.ModalIcon>
            <S.EmailInfo>abcdefg@gmail.com</S.EmailInfo>
          </S.EmailWrapper>
          <S.BorderLine />
          <S.LogoutWrapper>
            <S.ModalIcon>
              <S.ModalIconImage src="/assets/header/icon_modal_logout.png" />
            </S.ModalIcon>
            <S.Logout>Log out</S.Logout>
          </S.LogoutWrapper>
        </S.ProfileModal>
      </S.PCTBWrapper>

      <S.MBWrapper>
        {!isDisplaySearch ? (
          isLogin ? (
            <>
              <S.LogoContainer onClick={onClickLogo}>
                <S.LogoImage src="/assets/header/logo.png" />
              </S.LogoContainer>
              <S.MBRightContainer>
                <S.AlertSearchIcon onClick={onClickSearchIcon}>
                  <S.AlertSearchIconImage src="/assets/header/icon_search.png" />
                </S.AlertSearchIcon>
                <S.HamburgerIcon>
                  <S.HamburgerIconImage src="/assets/header/icon_hamburger.png" />
                </S.HamburgerIcon>
              </S.MBRightContainer>
            </>
          ) : (
            <>
              <S.LogoContainer onClick={onClickLogo}>
                <S.LogoImage src="/assets/header/logo.png" />
              </S.LogoContainer>
              <S.LoginButton onClick={onClickLoginButton}>Log In</S.LoginButton>
            </>
          )
        ) : (
          <S.MBSearchContainer>
            <S.BackIconContainer onClick={onClickBackIcon}>
              <S.BackIconImage src="/assets/header/icon_back_mb.png" />
            </S.BackIconContainer>
            <S.SearchWrapper>
              <S.SearchIcon>
                <S.SearchIconImage src="/assets/header/icon_search.png" />
              </S.SearchIcon>
              <S.SearchInput type="search" placeholder="Search" />
            </S.SearchWrapper>
          </S.MBSearchContainer>
        )}
      </S.MBWrapper>
    </>
  );
}
