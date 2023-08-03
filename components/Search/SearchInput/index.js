import { useState } from "react";
import { styled } from "styled-components";

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
          onChange={(event) => {
            setSearchFieldValue(event.target.value);
          }}
        />
        <button>
          <span>🔍</span> Search
        </button>
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
  width: 150px;
`;
