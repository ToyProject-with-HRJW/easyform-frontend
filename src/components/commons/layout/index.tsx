import { ReactNode } from "react";
import Header from "./header/Header";
import styled from "@emotion/styled";
import { breakPoints } from "commons/styles/palette";
import SearchBar from "./searchBar/SearchBar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <SearchBar />
      {props.children}
    </>
  );
}
