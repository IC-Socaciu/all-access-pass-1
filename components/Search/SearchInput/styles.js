import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 220px;
  height: 30px;
  border: solid 2px #95091b;
  margin: 0 10px 0 5px;
`;
export const StyledSearchButton = styled.button`
  background-color: #fafafa;
  color: #95091b;
  border: 2px solid #95091b;
  border-radius: 0.25em;
  height: 30px;
  margin: 5px 0;

  transition: background-color 0.3s;
  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;
export const StyledSearchResp = styled.p`
  margin: 5px 0;
  padding: 0;
`;
