import styled from "styled-components";
import { useState, useEffect } from "react";
import useSWR from "swr";
function formadDate(timestamp) {
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
      <StyledEvents>
        <StyledEventList>
          {events.map((event, index) => (
            <li key={index}>
              <StyledTime>{formadDate(event.date)}</StyledTime>
              <StyledDetails>
                <h3>Band: {event.bandName}</h3>
                <p>Venue: {event.venueName}</p>
                <p>Time: {event.time}</p>
                <a href={event.ticketsLink}>Buy tickets</a>
              </StyledDetails>
            </li>
          ))}
        </StyledEventList>
      </StyledEvents>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 200px;
`;
const StyledEvents = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;
const StyledTime = styled.div`
  position: relative;
  padding: 20px;
  background: #95091b;
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  float: left;
  text-align: center;

  &:hover {
    background-color: #099584;
    color: white;
  }
`;

const StyledDetails = styled.div`
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  float: left;
`;
const StyledEventList = styled.ul`
  list-style-type: none;
`;
