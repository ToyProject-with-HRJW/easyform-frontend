import { useEffect, useRef, useState } from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [addQuestion, setAddQuestion] = useState([
    {
      id: uuidv4(),
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTopDown, setScrollTopDown] = useState("top");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  // NOTE add question 버튼 클릭 시 스크롤 아래로 이동하도록 하는 useEffect
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [addQuestion]);

  // NOTE 현재 스크롤 위치 가져오는 useEffect
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("scroll", getScrollPosition);

      if (scrollPosition < 300) {
        setScrollTopDown("down");
      } else if (scrollPosition >= 300) {
        setScrollTopDown("top");
      }
    }
  }, [scrollPosition, scrollTopDown]);

  const onClickEditTitle = () => {
    if (!isEditTitle) setIsEditTitle(true);
  };

  const onBlurEditTitle = () => {
    setIsEditTitle(false);
  };

  const onClickEditDescription = () => {
    if (!isEditDescription) setIsEditDescription(true);
  };

  const onBlurEditDescription = () => {
    setIsEditDescription(false);
  };

  const onClickAddQuestion = () => {
    const newAddQuestion = {
      id: uuidv4(),
    };
    setAddQuestion([...addQuestion, newAddQuestion]);
  };

  const onClickDeleteQuestion = (id: string) => {
    if (addQuestion.length > 1)
      setAddQuestion(
        addQuestion.filter((question: { id: string }) => question.id !== id)
      );
  };

  const onClickScrollToTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setScrollTopDown("down");
  };

  const onClickScrollToBottom = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    setScrollTopDown("top");
  };

  const getScrollPosition = () => {
    if (window !== undefined) {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  };

  return (
    <S.Wrapper>
      {!isEditTitle ? (
        <S.FormTitle onClick={onClickEditTitle}>Untitled Title</S.FormTitle>
      ) : (
        <S.FormTitleInput
          onBlur={onBlurEditTitle}
          defaultValue="Untitled Title"
          autoFocus
        />
      )}
      <S.FormDescription
        onClick={onClickEditDescription}
        isEditDescription={isEditDescription}
      >
        {!isEditDescription ? (
          "Form Description"
        ) : (
          <S.FormDescriptionInput
            onBlur={onBlurEditDescription}
            defaultValue="Form Description"
            autoFocus
          />
        )}
      </S.FormDescription>
      <S.QuestionWrapper>
        {addQuestion.map((el: { id: string }) => (
          <Question
            questionId={el.id}
            key={el.id}
            onClickDeleteQuestion={onClickDeleteQuestion}
          />
        ))}
      </S.QuestionWrapper>
      <S.AddQuestionButtonWrapper ref={scrollRef}>
        <S.AddQuestionButton onClick={onClickAddQuestion}>
          Add Question
        </S.AddQuestionButton>
      </S.AddQuestionButtonWrapper>
      {addQuestion.length > 2 && (
        <S.ScrollButtonWrapper>
          <S.ScrollButton
            onClick={
              scrollTopDown === "top"
                ? onClickScrollToTop
                : onClickScrollToBottom
            }
            scrollTopDown={scrollTopDown}
          />
        </S.ScrollButtonWrapper>
      )}
    </S.Wrapper>
  );
}
