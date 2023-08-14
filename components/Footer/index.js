import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Footer({ currentPath }) {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <StyledFooter>
      <LinkList>
        <ListItem>
          <Link href="/" onClick={handleHomeClick}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/events">Events</Link>
        </ListItem>
        <ListItem>
          <Link href="/addevent">Add Event</Link>
        </ListItem>
        <ListItem>
          <Link href="/discover">Discover</Link>
        </ListItem>
      </LinkList>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #fafafa;
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
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
`;

const ListItem = styled.li`
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
      font-size: 1.1em;
      transform: scale(1.1);
    }
  }
`;

const LinkList = styled.ul`
  display: flex;
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
