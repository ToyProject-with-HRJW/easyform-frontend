import { ReactNode } from "react";
import Header from "./header/Header";
import styled from "@emotion/styled";
import SearchBar from "./searchBar/SearchBar";
import MBSearchButton from "./MBSearchButton";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { css } from "@emotion/react";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <SearchBarBodyWrapper>
        <SearchBar />
        {props.children}
      </SearchBarBodyWrapper>
      <MBSearchButton />
    </>
  );
}

const SearchBarBodyWrapper = styled.div`
  padding: 0 12.5vw;

  ${setTabletStyle(css`
    padding: 0;
  `)}

  ${setMobileStyle(css`
    padding: 0;
  `)}
`;
