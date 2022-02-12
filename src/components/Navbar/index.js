import React from 'react'
import {Nav, NavLink, Bars, NavMenu,Input,Searchbar, NavBtn, NavBtnLinkSecondary,NavBtnLink} from './NavbarElements';
import Logolong from '../../images/logo-long.svg';
import { IoLogoGoogle,IoMdAddCircleOutline } from 'react-icons/io';
import  {FaSearch} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logolong} alt='logo'/>
        </NavLink>
        <Bars/>
        {/*
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu> */}
        <Searchbar> <FaSearch style={{color: "grey", margin: "0px 0px 0px 10px", verticalAlign: 'middle'}}/><Input type="text" placeholder="Search" /></Searchbar>
        
        <NavBtn>
          <NavBtnLinkSecondary to="/sign-in"><IoLogoGoogle style={{margin: "0px 3px 0px 0px",verticalAlign: 'middle'}}/>Entrar con Google</NavBtnLinkSecondary>
          <NavBtnLink to="/sign-in"><IoMdAddCircleOutline style={{margin: "0px 3px 0px 0px", verticalAlign: 'middle'}}/>Sube tus zapas</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
