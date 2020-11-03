import React, { useState } from 'react';
import styled from 'styled-components'
import {Link,NavLink} from "react-router-dom"
import  "@fortawesome/fontawesome-free";

import logo from "../images/Logo.png" 
import BackDrop from './BackDrop';
import DropBar from './DropBar';
const NavBar = () => {
  const [sideBar, setSideBar]=useState(false);
  
  const Nav=styled.nav`
    background-color:#ffff;
    width:100%;
    max-height:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0 2px 3px -2px rgba(0,0,0,.2);
    padding: 0 2vw;
  `
  const UL=styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;
    height: 100%;
    width:auto;
    @media only screen and (max-width: 768px) {
      display:none;
    }
  `
  const LI=styled.li`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 50px;
    width:5rem;
    text-align:center;
    transition: 0.3s;
    &:hover{
      background-color:#f5f5f5;
    }
  `
  const IMG=styled.img`
    width:22vw;
    max-width:100px;
  `
  const BUTTON=styled.button`
    background:none;
    border:none;
    font-size:2.3rem;
    outline:none;
    cursor:pointer;
    @media only screen and (min-width: 769px) {
      display:none;
    }
  `
  const DIV=styled.div`
    display:flex;
    flex-direction:column;
    
  `
  const NavLinkStyle={
    textDecoration:"unset",
    color:'black',
    display: 'inline-block',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    height: '100%',
    width:'100%'
  }
  const activeStyle={
    fontWeight: "bold",
    color: 'var(--primary)'
  }
  console.log(sideBar);
  return ( 
    <div>

      <Nav>
        <Link><IMG src={logo}/></Link>

        <BUTTON onClick={()=>setSideBar(!sideBar)}> <i class="fas fa-bars"></i></BUTTON>
        <UL>
          <LI>
            <NavLink 
              style={NavLinkStyle} 
              activeStyle={activeStyle}
              to='/home'>Home
            </NavLink>
          </LI>
          <LI>
            <NavLink 
              activeStyle={activeStyle}
              style={NavLinkStyle} 
              to='/about'
            >
              About
            </NavLink>
          </LI>
        </UL>
      </Nav>
      {sideBar&& <DropBar/>}
    </div>
   );
}
 
export default NavBar;