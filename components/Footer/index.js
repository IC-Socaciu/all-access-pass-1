import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <div class="wrapper">
        <div className="top_nav"></div>
      </div>
      <div class="bottom_nav">
        <ul>
          <NavLink>
            <Link href="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link href="/interview">Events</Link>
          </NavLink>
          <NavLink>
            <Link href="/about">Discover</Link>
          </NavLink>
        </ul>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  background: darkgray;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  color: white;
  padding: 3em;
  position: relative;
  text-align: justify;
  left: 0;
  bottom: 0;
`;
const NavLink = styled.li`
  color: white;
  font-size: 1em;
  font-weight: bolder;
  /* display: inline-block; */
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* padding: 12px 10px; */
`;
