import { useState } from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";

export default function Create() {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [addQuestion, setAddQuestion] = useState([<Question />]);

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
    setAddQuestion([...addQuestion, <Question />]);
    setQuestionId(questionId + 1);
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
      <S.QuestionWrapper>{addQuestion}</S.QuestionWrapper>
      <S.AddQuestionButtonWrapper>
        <S.AddQuestionButton onClick={onClickAddQuestion}>
          Add Question
        </S.AddQuestionButton>
      </S.AddQuestionButtonWrapper>
    </S.Wrapper>
  );
}
