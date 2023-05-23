import { MouseEvent, useState } from "react";
import * as S from "./MenuBar.styles";
import Toggle from "components/commons/Toggle";
import { useRouter } from "next/router";

export default function MenuBar() {
  const [selected, setSelected] = useState("question");
  const [isOn, setIsOn] = useState(true);

  const router = useRouter();

  const onClickQuestion = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLButtonElement).value);
    router.push("/create");
  };

  const onClickResult = (e: MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLButtonElement).value);
    router.push("/result");
  };

  const onClickToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.CategoryTitle
          className={`${selected === "question" ? "active" : ""}`}
          value="question"
          onClick={onClickQuestion}
        >
          설문
        </S.CategoryTitle>
        <S.CategoryTitle
          className={`${selected === "result" ? "active" : ""}`}
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
          <S.TextButton>공유</S.TextButton>
        </S.MiddleButtonContainer>
        <S.SaveButton>저장</S.SaveButton>
      </S.RightContainer>
    </S.Wrapper>
  );
}
