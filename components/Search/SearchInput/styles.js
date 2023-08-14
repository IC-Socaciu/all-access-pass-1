import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 220px;
  height: 30px;
  border: solid 2px red;
  margin-top: 15px;
  margin-left: 15px;
`;
export const StyledSearchButton = styled.button`
  background-color: #fafafa;
  color: red;
  border: 2px solid red;
  border-radius: 0.25em;
  height: 30px;
  transition: background-color 0.3s;
  &:hover {
    background-color: red;
    color: #fafafa;
  }
`;
export const StyledSearchResp = styled.div`
  margin-left: 15px;
  margin-top: 10px;
`;
