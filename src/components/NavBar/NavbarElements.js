import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #0d2240;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  margin-left: 2%

  &img {
    height: 100%;
    width: 150px;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 90%;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8em;
  letter-spacing: 0.2vh;

  &.active {
    color: #889aa5;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #889aa5;
  }
  &img {
    align-items: left;
    margin-left: 0%;
    width: 150px;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 1%;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 1060px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fefeff;
  padding: 10px 22px;
  color: #0d2240;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #889aa5;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1060px) {
    display: block;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor: pointer;
  }
`