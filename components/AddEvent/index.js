import React from "react";
import styled from "styled-components";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

export default function AddEvent() {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = Object.fromEntries([...new FormData(event.target)]);

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Error creating event");
        return;
      }
      mutate("/api/events");
      router.push("/events");
    } catch (error) {
      console.log("Error creating event", error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Your Event!</legend>

        <div>
          <label htmlFor="bandName">Band Name</label>
          <input
            id="bandName"
            name="bandName"
            placeholder="Add band"
            type="text"
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <div>
            <input id="date" name="date" type="date" />
          </div>
        </div>

        <div>
          <label htmlFor="time">Select a time:</label>
          <select id="time" name="time">
            <option value="">--Choose a time--</option>
            <option value="19:00:00">19:00</option>
            <option value="19:15:00">19:15</option>
            <option value="19:30:00">19:30</option>
            <option value="19:45:00">19:45</option>
            <option value="20:00:00">20:00</option>
            <option value="20:15:00">20:15</option>
            <option value="20:30:00">20:30</option>
            <option value="20:45:00">20:45</option>
            <option value="21:00:00">21:00</option>
          </select>
        </div>

        <div>
          <label htmlFor="musicStyle">Music Style</label>
          <div>
            <input
              id="musicStyle"
              name="musicStyle"
              placeholder="Add style"
              type="text"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contactEmail">Contact E-mail</label>
          <div>
            <input
              id="contactEmail"
              name="contactEmail"
              placeholder="E-Mail Address"
              type="email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contactPhone">Contact phone</label>
          <div>
            <input
              id="contactPhone"
              name="contactPhone"
              placeholder="(123)456-7890"
              type="tel"
            />
          </div>
        </div>

        <div>
          <label htmlFor="venueName">Venue</label>
          <div>
            <select id="venueName" name="venueName">
              <option value="">Select local venue</option>
              <option value="Musikkneipe Session">Musikkneipe Session</option>
              <option value="Hermann J. Abs Chamber Music Hall">
                Hermann J. Abs Chamber Music Hall
              </option>
              <option value="Rock und Pop Zentrum Bonn">
                Rock und Pop Zentrum Bonn
              </option>
              <option value="Harmonie Bonn">Harmonie Bonn</option>
              <option value="BonnLive GmbH">BonnLive GmbH</option>
              <option value="Jazz-Galerie">Jazz-Galerie</option>
              <option value="Limes">Limes</option>
              <option value="BLA">BLA</option>
              <option value="The Fiddlers Pub">The Fiddlers Pub</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="ticketsProvider">Ticket provider</label>
          <div>
            <select id="ticketsProvider" name="ticketsProvider">
              <option value="">Select ticket provider</option>
              <option value="Eventim">Eventim</option>
              <option value="Ticketmaster">Ticketmaster</option>
              <option value="Eventbrite">Eventbrite</option>
              <option value="Songtick">Songtick</option>
              <option value="Available at venue">Available at venue</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="ticketsLink">External tickets link</label>
          <div>
            <input
              id="ticketsLink"
              name="ticketsLink"
              placeholder="Add link"
              type="text"
            />
          </div>
        </div>

        <div>
          <label htmlFor="linkToMusic">Link to your music</label>
          <div>
            <input id="linkToMusic" name="linkToMusic" type="text" />
          </div>
          <div>
            <input id="linkToMusic" name="linkToMusic" type="text" />
          </div>
          <div>
            <input id="linkToMusic" name="linkToMusic" type="text" />
          </div>
        </div>

        <div>
          <label>Do you have a rider?</label>
          <div>
            <div>
              <label>
                <input id="riderYes" name="rider" type="radio" value="yes" />{" "}
                Yes
              </label>
            </div>
            <div>
              <label>
                <input id="riderNo" name="rider" type="radio" value="no" /> No
              </label>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="membersInfo">Full members name and instruments</label>
          <div>
            <textarea id="membersInfo" name="membersInfo" />
          </div>
        </div>

        <div>
          <button type="submit">Submit Event</button>
        </div>
      </fieldset>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  input[type="text"],
  select {
    margin-bottom: 10px;
  }

  label[for="time"] {
    display: block;
    margin-bottom: 10px;
  }

  textarea {
    height: 100px;
  }

  button {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-bottom: 150px;

    transition: background-color 0.3s;
    &:hover {
      background-color: #3e8e41;
    }
  }
`;
