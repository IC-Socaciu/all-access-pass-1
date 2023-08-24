import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  StyledSection,
  StyledEventsContainer,
  StyledEventsList,
  StyledTime,
  StyledDetails,
  StyledTickets,
  StyledBand,
  StyledVenue,
} from "./styles";
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
