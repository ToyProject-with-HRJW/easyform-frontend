import { useState } from "react";
import * as S from "./MenuBar.styles";
import Toggle from "components/commons/Toggle";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { AuthState } from "store/AuthState";

export default function MenuBar() {
  const authState = useRecoilValue(AuthState);
  const [isOn, setIsOn] = useState(true);

  const router = useRouter();

  const CREATE_PAGE = router.asPath.includes("create");
  const RESULT_PAGE = router.asPath.includes("result");

  const onClickQuestion = () => {
    router.push("/create");
  };

  const onClickResult = () => {
    router.push("/result/summary");
  };

  const onClickToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.CategoryTitle
          className={`${CREATE_PAGE ? "active" : ""}`}
          value="question"
          onClick={onClickQuestion}
        >
          설문
        </S.CategoryTitle>
        <S.CategoryTitle
          className={`${RESULT_PAGE ? "active" : ""}`}
          value="result"
          onClick={onClickResult}
        >
          응답
        </S.CategoryTitle>
      </S.LeftContainer>
      <S.RightContainer>
        <S.ResponseContainer>
          응답받기
          <Toggle onClick={onClickToggle} isOn={isOn} />
        </S.ResponseContainer>
        <S.MiddleButtonContainer>
          <S.TextButton>미리보기</S.TextButton>
          <S.TextButton>초기화</S.TextButton>
          <S.ShareButton authState={authState}>공유</S.ShareButton>
        </S.MiddleButtonContainer>
        <S.SaveButton authState={authState}>
          저장
          <S.SaveBubble authState={authState}>
            로그인 이후 서비스를 완전히 이용할 수 있어요!
          </S.SaveBubble>
        </S.SaveButton>
      </S.RightContainer>
    </S.Wrapper>
  );
}
