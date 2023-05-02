import { MouseEvent, useState } from "react";
import Toggle from "../Toggle";
import * as S from "./Question.styles";

export default function Question() {
  const [isEditTitle, setIsEditTitle] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [questionType, setQuestionType] = useState("Multiple Choice");
  const [isEditOption, setIsEditOption] = useState(false);
  const [isEditParagraph, setIsEditParagraph] = useState(false);
  const [isMultipleChoiceOn, setIsMultipleChoiceOn] = useState(false);
  const [isNecessaryOn, setIsNecessaryOn] = useState(false);

  const onClickEditTitle = () => {
    if (!isEditTitle) setIsEditTitle(true);
  };

  const onBlurEditTitle = () => {
    setIsEditTitle(false);
  };

  const onClickDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickQuestionType = (e: MouseEvent<HTMLButtonElement>) => {
    setQuestionType((e.target as HTMLButtonElement).value);
    setIsDropdownOpen(false);
  };

  const onClickEditOption = () => {
    if (!isEditOption) setIsEditOption(true);
  };

  const onBlurEditOption = () => {
    setIsEditOption(false);
  };

  const onClickEditParagraph = () => {
    if (!isEditParagraph) setIsEditParagraph(true);
  };

  const onBlurEditParagraph = () => {
    setIsEditParagraph(false);
  };

  const onClickMultipleChoiceToggle = () => {
    setIsMultipleChoiceOn(!isMultipleChoiceOn);
  };

  const onClickNecessaryToggle = () => {
    setIsNecessaryOn(!isNecessaryOn);
  };

  return (
    <S.QuestionContainer>
      <S.QuestionTopWrapper>
        <S.QuestionTitleWrapper>
          {isEditTitle ? (
            <S.QuestionTitleInput
              defaultValue="Untitled Question"
              onBlur={onBlurEditTitle}
              autoFocus
            />
          ) : (
            <S.QuestionTitle onClick={onClickEditTitle}>
              Untitled Question
            </S.QuestionTitle>
          )}
          {isEditTitle && (
            <S.AddImageWrapper>
              <S.AddImage src="/assets/icon_image.png" />
            </S.AddImageWrapper>
          )}
        </S.QuestionTitleWrapper>
        <S.DropdownWrapper onClick={onClickDropdown}>
          <S.DropdownBox isDropdownOpen={isDropdownOpen}>
            {questionType}
            <S.DropdownArrow isDropdownOpen={isDropdownOpen} />
          </S.DropdownBox>
          <S.DropdownSelectWrapper isDropdownOpen={isDropdownOpen}>
            <S.DropdownSelect
              value="Multiple Choice"
              onClick={onClickQuestionType}
            >
              Multiple Choice
            </S.DropdownSelect>
            <S.DropdownSelect value="Paragraph" onClick={onClickQuestionType}>
              Paragraph
            </S.DropdownSelect>
          </S.DropdownSelectWrapper>
        </S.DropdownWrapper>
      </S.QuestionTopWrapper>

      {questionType === "Multiple Choice" ? (
        <S.QuestionMiddleWrapper>
          <S.SelectWrapper>
            <S.Radio type="radio" />
            {isEditOption ? (
              <>
                <S.RadioTitleInput
                  onBlur={onBlurEditOption}
                  autoFocus
                  value="Option 1"
                />
                <S.AddImageWrapper>
                  <S.AddImage src="/assets/icon_image.png" />
                </S.AddImageWrapper>
                <S.DeleteOptionWrapper>
                  <S.DeleteOption src="/assets/icon_delete_option.png" />
                </S.DeleteOptionWrapper>
              </>
            ) : (
              <S.RadioTitle onClick={onClickEditOption}>Option 1</S.RadioTitle>
            )}
          </S.SelectWrapper>
          <S.AddOptionButton>옵션 추가</S.AddOptionButton>
        </S.QuestionMiddleWrapper>
      ) : (
        <S.ParagraphWrapper
          onClick={onClickEditParagraph}
          isEditParagraph={isEditParagraph}
        >
          {!isEditParagraph ? (
            "Form Description"
          ) : (
            <S.ParagraphInput
              onBlur={onBlurEditParagraph}
              defaultValue="Form Description"
              autoFocus
            />
          )}
        </S.ParagraphWrapper>
      )}

      <S.QuestionBottomWrapper questionType={questionType}>
        <S.TextButton>복제</S.TextButton>
        <S.TextButton>삭제</S.TextButton>
        <S.BoundaryLine />
        {questionType === "Multiple Choice" && (
          <>
            <S.ToggleTitle>복수선택</S.ToggleTitle>
            <Toggle
              onClick={onClickMultipleChoiceToggle}
              isOn={isMultipleChoiceOn}
            />
          </>
        )}
        <S.ToggleTitle>필수</S.ToggleTitle>
        <Toggle onClick={onClickNecessaryToggle} isOn={isNecessaryOn} />
      </S.QuestionBottomWrapper>
    </S.QuestionContainer>
  );
}
