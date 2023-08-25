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
  color: #95091b;
  padding: 1.5em;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 9999;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
`;

const ListItem = styled.li`
  font-size: 1em;
  font-weight: bolder;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0px 5px;
  color: ${(props) => (props.active ? "#00ff00" : "#95091b")};
  width: 120px;
  cursor: pointer;
  a {
    color: #95091b;
    text-decoration: none;
    &:hover {
      font-size: 1em;
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    ${ListItem} {
      width: auto;
      padding: 10px;
    }
  }
`;
