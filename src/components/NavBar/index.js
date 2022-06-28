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
import '../../App.css'

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
          <div className='SecondNav'>
            <NavLink to='/Help' activestyle="true">
              Help
            </NavLink>
            <NavLink to='/Team' activestyle="true">
              Team
            </NavLink>
          </div>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;