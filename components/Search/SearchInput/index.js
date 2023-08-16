import { useState } from "react";
import {
  StyledSearchBar,
  StyledSearchButton,
  StyledSearchResp,
} from "@/components/Search/SearchInput/styles";

export default function SearchInput({ searchTerm, onSearch }) {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(searchFieldValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledSearchBar
          value={searchFieldValue}
          onChange={(event) => setSearchFieldValue(event.target.value)}
        />
        <StyledSearchButton type="submit">
          <span>🔍</span> Search
        </StyledSearchButton>
      </form>
      <StyledSearchResp>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please search for a keyword"}
      </StyledSearchResp>
    </>
  );
}
