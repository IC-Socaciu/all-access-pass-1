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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/interview">Events</Link>
          </li>
          <li>
            <Link href="/about">Discover</Link>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  background: darkgray;
  color: white;
  padding: 3em;
  border-radius: 1em;
  text-align: start;
`;
