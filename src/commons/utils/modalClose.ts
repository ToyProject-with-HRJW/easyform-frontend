import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

export default function modalClose(
  isDisplay: boolean,
  setIsDisplay: Dispatch<SetStateAction<boolean>>,
  outSide: RefObject<HTMLDivElement>
) {
  const clickOutSide = (e: CustomEvent<MouseEvent>) => {
    if (
      isDisplay &&
      outSide.current &&
      !outSide.current?.contains(e.target as Node)
    ) {
      setIsDisplay(false);
    }
  };

  document.addEventListener("click", clickOutSide as EventListener);
  return () =>
    document.removeEventListener("click", clickOutSide as EventListener);
}
