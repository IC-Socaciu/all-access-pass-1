import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 100px;
`;

export const StyledEventsContainer = styled.div`
  height: 700px;
  overflow-y: scroll;
  padding-right: 10px;
`;

export const StyledEventsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledTime = styled.p`
  position: relative;
  padding: 10px;
  background: #95091b;
  border: 2px solid #95091b;
  border-radius: 0.25em;
  box-sizing: border-box;
  color: #fafafa;
  width: 30%;
  height: 100%;
  float: left;
  margin-right: 10px;
  margin-left: 5px;
  text-align: center;
  font-weight: 700;
`;

export const StyledDetails = styled.div`
  padding: 20px;
  background-color: #dfdfdf;
  box-sizing: border-box;
  width: 85%;
  height: 100%;
  margin-right: 10px;
  margin-left: 30px;
  margin-bottom: 5px;
  margin-top: 30px;
  border: 2px solid #95091b;
  border-radius: 0.25rem;
`;
export const StyledTickets = styled.a`
  border: solid 2px #95091b;
  border-radius: 0.25em;
  text-decoration: none;
  background-color: #fafafa;
  color: #95091b;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover {
    background-color: #95091b;
    color: #fafafa;
  }
`;
export const StyledBand = styled.h3`
  color: #95091b;
`;
export const StyledVenue = styled.p`
  font-weight: 700;
`;
