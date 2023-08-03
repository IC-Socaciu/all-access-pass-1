import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <div></div>
      </div>
      <div>
        <LinkList>
          <NavLink>
            <Link href="/">Home</Link>
          </NavLink>
          <LinkList>
            <li>Events</li>
          </LinkList>
          <LinkList>
            <li>Discover</li>
          </LinkList>
        </LinkList>
      </div>
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
  color: white;
  font-size: 1em;
  font-weight: bolder;
  display: inline-block;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-evenly;
  list-style-type: none;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Separator = styled.div`
  color: white;
  font-size: 1em;
  font-weight: bolder;
  display: inline-block;
  padding: 0 10px;
`;
