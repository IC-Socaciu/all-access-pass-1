import { useState } from "react";
import { styled } from "styled-components";

export default function SearchInput({ searchTerm, onSearch }) {
  const [searchFieldValue, setSearchFieldValue] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(searchFieldValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledSearchBar
          value={searchFieldValue}
          onChange={(event) => {
            setSearchFieldValue(event.target.value);
          }}
        />
        <StyledSearchButton>
          <span>🔍</span> Search
        </StyledSearchButton>
      </form>
      <h3>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please search for a keyword"}
      </h3>
    </>
  );
}

const StyledSearchBar = styled.input`
  width: 220px;
  height: 30px;
  border: solid 2px #95091b;
  margin-top: 5px;
`;
const StyledSearchButton = styled.button`
  background-color: #95091b;
  color: white;
  height: 30px;

  &:hover {
    background-color: #099584;
    color: white;
  }
`;
