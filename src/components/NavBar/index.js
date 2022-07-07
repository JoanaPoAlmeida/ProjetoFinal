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
          <NavLink to='/Keywords' activestyle="true">
            Keywords
          </NavLink>
          <NavLink to='/LangDetect' activestyle="true">
            Language Detection
          </NavLink>
          <NavLink to='/Entity' activestyle="true">
            Named Entity Recognition
          </NavLink>
          <NavLink to='/POS' activestyle="true">
            Part of Speech
          </NavLink>
          <NavLink to='/Sentilex' activestyle="true">
            Sentiment Analysis
          </NavLink>
          <NavLink to='/Sum' activestyle="true">
            Summarization
          </NavLink>
        </NavMenu>
          {/* Second Nav */}
          <NavBtn>
            <a href='http://hultigcorpus-api.di.ubi.pt/' target="_blank" activestyle="true" className='NavBtnLink'>
              API
            </a>
            <NavBtnLink to='/Team' activestyle="true">
              Team
            </NavBtnLink>
          </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;