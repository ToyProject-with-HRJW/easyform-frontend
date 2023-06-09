import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as S from "./Profile.styles";
import { useCookie } from "commons/utils/cookie";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginState } from "store/loginState";
import modalClose from "commons/utils/modalClose";

export default function Profile() {
  const [isEditNickName, setIsEditNickName] = useState(false);
  const [language, setLanguage] = useState("korean");
  const [isModalDisplay, setIsModalDisplay] = useState(false);
  const [, setIsLogin] = useRecoilState(loginState);

  const outSide = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    modalClose(isModalDisplay, setIsModalDisplay, outSide);
  });

  const onClickEditNickName = () => {
    setIsEditNickName(!isEditNickName);
  };

  const onChangeLanguage = (e: ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  };

  const onClickWithdrawButton = () => {
    setIsModalDisplay(!isModalDisplay);
  };

  const onClickLogOut = () => {
    useCookie.removeCookie("access-token");
    setIsLogin(false);
    router.replace("/");
  };

  return (
    <S.Wrapper>
      <S.ContentsContainer>
        <S.Title>Account</S.Title>
        <S.AccountContainer>
          <S.AccountImageContainer>
            <S.AccountImage />
          </S.AccountImageContainer>
          <S.AccountDetailContainer>
            <S.DetailIconContainer>
              <S.AccountEmail>abcdefg@gmail.com</S.AccountEmail>
              <S.SocialIconWrapper>
                <S.SocialIcon src="/assets/profile/icon_kakao.png" />
              </S.SocialIconWrapper>
            </S.DetailIconContainer>
            <S.DetailIconContainer>
              {isEditNickName ? (
                <S.NickNameInput></S.NickNameInput>
              ) : (
                <S.NickName>in5b7d0t</S.NickName>
              )}
              <S.EditIconWrapper onClick={onClickEditNickName}>
                <S.EditIcon src="/assets/profile/icon_edit.png" />
              </S.EditIconWrapper>
            </S.DetailIconContainer>
          </S.AccountDetailContainer>
        </S.AccountContainer>
      </S.ContentsContainer>

      <S.ContentsContainer>
        <S.Title>Language</S.Title>
        <S.LanguageContainer>
          <S.SelectContainer>
            <S.LanguageSelect
              type="radio"
              value="english"
              onChange={onChangeLanguage}
              checked={language === "english"}
            />
            English
          </S.SelectContainer>
          <S.SelectContainer>
            <S.LanguageSelect
              type="radio"
              value="korean"
              onChange={onChangeLanguage}
              checked={language === "korean"}
            />
            한국어
          </S.SelectContainer>
        </S.LanguageContainer>
      </S.ContentsContainer>

      <S.BottomContainer>
        <S.withdrawButton onClick={onClickWithdrawButton} ref={outSide}>
          회원탈퇴
          <S.withdrawModal isModalDisplay={isModalDisplay}>
            <S.ModalTitle>회원탈퇴</S.ModalTitle>
            <S.ModalContents>
              회원탈퇴를 하시겠습니까?
              <br />
              확인 시 7일 후 계정이 자동으로 삭제됩니다.
            </S.ModalContents>
            <S.ModalButtonContainer>
              <S.ModalCancelButton>취소</S.ModalCancelButton>
              <S.ModalOKButton>확인</S.ModalOKButton>
            </S.ModalButtonContainer>
          </S.withdrawModal>
        </S.withdrawButton>
        <S.logOutButton onClick={onClickLogOut}>로그아웃</S.logOutButton>
      </S.BottomContainer>
    </S.Wrapper>
  );
}
