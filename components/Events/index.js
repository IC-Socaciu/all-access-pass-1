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
              <StyledTime>
                <strong>{formatDate(event.date)}</strong>
              </StyledTime>
              <StyledDetails>
                <h3>
                  <strong>Band:</strong> {event.bandName}
                </h3>
                <p>
                  <strong>Venue:</strong> {event.venueName}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
                <a href={event.ticketsLink}>
                  <strong>Buy tickets</strong>
                </a>
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
  margin-left: 40px;
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
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  color: white;
  float: left;
  margin-right: 10px;
  text-align: center;
  margin-left: 10px;
  &:hover {
    background-color: #099584;
    color: white;
  }
`;

const StyledDetails = styled.div`
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  border: 2px solid #95091b;
  border-radius: 10px;
  width: 70%;
  height: 100%;
  float: left;
  margin-right: 10px;
  margin-left: 30px;
`;
