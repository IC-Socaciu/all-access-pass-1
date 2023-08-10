import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Rabbit from "@/public/year-of-rabbit.png";

export default function Footer({ currentPath }) {
  return (
    <StyledFooter>
      <LinkList>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link href="/events">Events</Link>
        </NavLink>
        <NavLink>
          <Link href="/addevent">Add Event</Link>
        </NavLink>
        <NavLink>
          <Link href="/discover">Discover</Link>
        </NavLink>
      </LinkList>
      <Bunny src="/year-of-rabbit.png" alt="Bunny" />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: darkgray;
  color: white;
  padding: 1.5em;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 9999;
  text-align: justify;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  height: 100px;
  margin-top: -100px;
`;

const NavLink = styled.li`
  font-size: 1em;
  font-weight: bolder;
  display: inline-block;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0px 5px;
  color: ${(props) => (props.active ? "#00ff00" : "#95091b")};
  cursor: pointer;
  a {
    color: #95091b;
    text-decoration: none;
    &:hover {
      color: #099584;
      font-size: 1.1em;
      transform: scale(1.1);
    }
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 5px;
`;

const Separator = styled.div`
  color: white;
  font-size: 1em;
  font-weight: bolder;
  display: inline-block;
  padding: 0 10px;
`;
const Bunny = styled.img`
  height: 20px;
  margin-left: auto;
  filter: invert(100%);
`;
