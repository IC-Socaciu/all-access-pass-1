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
                <StyledBand>Band: {event.bandName}</StyledBand>
                <StyledVenue>Venue: {event.venueName}</StyledVenue>
                <p>Time: {event.time}</p>
                <StyledTickets
                  href={event.ticketsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy tickets
                </StyledTickets>
              </StyledDetails>
            </li>
          ))}
        </StyledEventsList>
      </StyledEventsContainer>
    </StyledSection>
  );
}

export const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 100px;
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

const StyledDetails = styled.div`
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
const StyledTickets = styled.a`
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
const StyledBand = styled.h3`
  color: #95091b;
`;
const StyledVenue = styled.p`
  font-weight: 700;
`;
