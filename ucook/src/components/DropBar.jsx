import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free";


const DropBar = () => {
  const DropDIV = styled.nav`
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    /* max-height:50px; */
    /* justify-content:space-between;
    align-items:center; */
    box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.2);
    /* padding: 0 2vw; */
    z-index: 10;
    @media only screen and (min-width: 769px) {
      display: none;
    }
  `;
  const UL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    /* @media only screen and (max-width: 768px) {
      display:none;
    } */
  `;
  const LI = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    &:hover {
      background-color: #f5f5f5;
    }
  `;
  const DIV = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const NavLinkStyle = {
    textDecoration: "unset",
    color: "black",
    display: "inline-block",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    height: "100%",
    width: "100%",
  };
  const activeStyle = {
    fontWeight: "bold",
    color: "var(--primary)",
  };
  return (
    <DropDIV>
      <UL>
        <LI>
          <NavLink style={NavLinkStyle} activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
        </LI>
        <LI>
          <NavLink
            activeStyle={activeStyle}
            style={NavLinkStyle}
            to="/categories"
          >
            Categories
          </NavLink>
        </LI>
        <LI>
          <NavLink
            activeStyle={activeStyle}
            style={NavLinkStyle}
            to="/areas"
          >
            Areas
          </NavLink>
        </LI>
        <LI>
          <NavLink activeStyle={activeStyle} style={NavLinkStyle} to="/about">
            About
          </NavLink>
        </LI>
      </UL>
    </DropDIV>
  );
};

export default DropBar;
