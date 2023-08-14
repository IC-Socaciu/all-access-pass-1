import styled from "styled-components";
import { useState, useEffect } from "react";
import useSWR from "swr";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}

export default function Events() {
  const { data: events, error, mutate } = useSWR("/api/events");

  if (!events) {
    return "loading...";
  }

  return (
    <StyledSection>
      <StyledEventsContainer>
        <StyledEventsList>
          {events.map((event, index) => (
            <li key={index}>
              <StyledTime>{formatDate(event.date)}</StyledTime>
              <StyledDetails>
                <h3>Band: {event.bandName}</h3>
                <p>Venue: {event.venueName}</p>
                <p>Time: {event.time}</p>
                <a href={event.ticketsLink}>Buy tickets</a>
              </StyledDetails>
            </li>
          ))}
        </StyledEventsList>
      </StyledEventsContainer>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const StyledEventsContainer = styled.div`
  height: 700px;
  overflow-y: scroll;
  padding-right: 10px;
`;

const StyledEventsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledTime = styled.p`
  position: relative;
  padding: 10px;
  background: #fafafa;
  border: 2px solid red;
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  color: red;
  float: left;
  margin-right: 10px;
  margin-left: 5px;
  text-align: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: red;
    color: #fafafa;
  }
`;

const StyledDetails = styled.div`
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  margin-right: 10px;
  margin-left: 30px;
  border: 2px solid red;
  border-radius: 0.25rem;
`;
