import React from 'react'
import { Nav, NavLink, NavMenu, Input, Searchbar, NavBtn, NavBtnLinkSecondary, NavBtnLink, LogoL, LogoS } from './NavbarElements';
import Logo_long from '../../images/logo-long.svg';
import Logo_short from '../../images/logo-short.svg';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoL src={Logo_long} alt='logo' />
          <LogoS src={Logo_short} alt='logo' />
        </NavLink>
        {/*
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu> */}
        <Searchbar>
          <FaSearch size={20} style={{color: "#999999", margin: "0px 0px 0px 15px", verticalAlign: 'middle' }} /><Input type="text" placeholder="Buscar zapatillas" />
        </Searchbar>
        <NavBtn>
          <NavBtnLinkSecondary to="/sign-in"><IoLogoGoogle size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Entrar con Google</NavBtnLinkSecondary>
          <NavBtnLink to="/sign-in"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
