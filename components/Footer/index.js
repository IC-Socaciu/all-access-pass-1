import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Footer({ currentPath }) {
  const router = useRouter();

  const handleButtonClick = () => {
    if (currentPath == "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <StyledFooter>
      <div>
        <div></div>
      </div>
      <div>
        <NavLink>
          <NavLink>
            <button onClick={handleButtonClick}>
              {" "}
              {currentPath == "/" ? "" : "Home"}
            </button>
          </NavLink>
          <NavLink>
            <Link href="/events">Events</Link>
          </NavLink>
          <NavLink>
            <Link href="/addevent">Add Event</Link>
          </NavLink>
        </NavLink>
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
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0px 5px;
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
