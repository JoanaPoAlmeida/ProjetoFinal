import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileIcon
} from './NavbarElements';

//1:07:14 https://www.youtube.com/watch?v=Nl54MJDR2p8&t=0s
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.png')} alt='logo' width='150px' />
        </NavLink>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink to='/Entity' activestyle="true">
            Entity
          </NavLink>
          <NavLink to='/Keywords' activestyle="true">
            Keywords
          </NavLink>
          <NavLink to='/LangDetect' activestyle="true">
            Language Detection
          </NavLink>
          <NavLink to='/POS' activestyle="true">
            Part of Speech
          </NavLink>
          <NavLink to='/Sum' activestyle="true">
            Summarization
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;