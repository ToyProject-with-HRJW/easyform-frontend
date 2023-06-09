import * as S from "components/commons/layout/searchBar/SearchBar.styles";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();

  const onClickCreateNew = () => {
    router.push("/create");
  };
  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <S.SearchIcon>
          <S.SearchIconImage src="assets/header/icon_search.png" />
        </S.SearchIcon>
        <S.SearchInput type="search" placeholder="Search" />
      </S.SearchWrapper>
      <S.CreateButton onClick={onClickCreateNew}>Create New</S.CreateButton>
    </S.Wrapper>
  );
}
