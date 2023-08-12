import styled from "styled-components";

export const StyledSearchBar = styled.input`
  width: 220px;
  height: 30px;
  border: solid 2px #95091b;
  margin-top: 15px;
  margin-left: 15px;
`;
export const StyledSearchButton = styled.button`
  background-color: #95091b;
  color: white;
  height: 30px;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;
export const StyledSearchResp = styled.div`
  margin-left: 15px;
  margin-top: 10px;
`;
