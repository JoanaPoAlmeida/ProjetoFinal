import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  MobileIcon,
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
            Named Entity Recognition
          </NavLink>
          <NavLink to='/Keywords' activestyle="true">
            Multi-Rake
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
          <NavLink to='/Sentilex' activestyle="true">
            Sentiment Analysis
          </NavLink>
        </NavMenu>
          {/* Second Nav */}
          <NavBtn>
            <NavBtnLink to='/Help' activestyle="true">
              Help
            </NavBtnLink>
            <NavBtnLink to='/Team' activestyle="true">
              Team
            </NavBtnLink>
          </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;