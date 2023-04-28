import { ReactNode } from "react";
import Header from "./header/Header";
import styled from "@emotion/styled";
import MenuBar from "./menuBar/MenuBar";
import SearchBar from "./searchBar/SearchBar";
import MBWriteButton from "./MBWriteButton";
import { setMobileStyle, setTabletStyle } from "commons/styles/mediaQuery";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const CREATE_PAGE = "/create";

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const createPage = router.asPath.includes(CREATE_PAGE);

  return (
    <>
      <Header />
      <SearchBarBodyWrapper>
        {createPage ? <MenuBar /> : <SearchBar />}
        {props.children}
      </SearchBarBodyWrapper>
      <MBWriteButton />
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
