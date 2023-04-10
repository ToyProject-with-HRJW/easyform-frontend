import * as S from "components/commons/layout/searchBar/SearchBar.styles";

export default function SearchBar() {
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchIcon>
          <S.SearchIconImage src="assets/header/icon_search.png" />
        </S.SearchIcon>
        <S.SearchInput type="search" placeholder="Search" />
      </S.SearchWrapper>
      <S.CreateButton>Create New</S.CreateButton>
    </S.Wrapper>
  );
}
