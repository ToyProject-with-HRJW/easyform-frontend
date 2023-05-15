import { useState } from "react";
import * as S from "./Create.styles";
import Question from "components/commons/question/Question";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [addQuestion, setAddQuestion] = useState<any>([
    {
      id: uuidv4(),
      component: <Question />,
    },
  ]);

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
      component: (
        <Question addQuestion={addQuestion} setAddQuestion={setAddQuestion} />
      ),
    };
    setAddQuestion([...addQuestion, newAddQuestion]);
  };

  console.log(addQuestion);

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
        {addQuestion.map((el: any) => el.component)}
      </S.QuestionWrapper>
      <S.AddQuestionButtonWrapper>
        <S.AddQuestionButton onClick={onClickAddQuestion}>
          Add Question
        </S.AddQuestionButton>
      </S.AddQuestionButtonWrapper>
    </S.Wrapper>
  );
}
