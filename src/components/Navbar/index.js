import React from 'react'
import { Nav, NavLink, Input, Searchbar, NavBtn, NavBtnLink, LogoL, LogoS, Tagbar, Tag, Minititle,ProfilePhoto,RedirectButton} from './NavbarElements';
import Logo_long from '../../images/logo-long.svg';
import Logo_short from '../../images/logo-short.svg';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { colors } from '../../theme';
import Cookies from 'universal-cookie';
import LoginButton from '../LoginButton';
import {IoChatbubblesOutline} from 'react-icons/io5';
import {IoHomeOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg';
import {FiUsers} from 'react-icons/fi';
import { useState } from 'react';
//client-id 677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com
//secret-client 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


function Menu(data) {
  if (data == null) {
    return (<><LoginButton />
    <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
    </>);

  } else {
    return (
    <>
          <RedirectButton  exact to="/">
            <IoHomeOutline size={25}/>
            <Minititle>Inicio</Minititle>
          </RedirectButton>
          <RedirectButton exact to="/social">
            <FiUsers size={25}/>
            <Minititle>Social</Minititle>
          </RedirectButton>
          <RedirectButton exact to="/chats">
            <IoChatbubblesOutline size={25}/>
            <Minititle>Chats</Minititle>
          </RedirectButton>
          <RedirectButton exact to="/panel">
            {/*<ProfilePhoto src={data.photo} alt="profile" style={{width:"25px", borderRadius:"20px"}}></ProfilePhoto>*/}
            <CgProfile size={25}/>
            <Minititle>Panel</Minititle>
          </RedirectButton>
          <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Subir</NavBtnLink>

</>)
    
  }
}


const Navbar = (props) => {

  const [active, setActive] = useState("home");
  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoL src={Logo_long} width="140" height="140" alt='logo' />
          <LogoS src={Logo_short} height="40" width="40" alt='logo' />
        </NavLink>
        <Searchbar>
          <FaSearch size={20} style={{ color: colors.i_searchbar, margin: "0px 0px 0px 15px", verticalAlign: 'middle' }} /><Input type="text" placeholder="Buscar zapatillas" />
        </Searchbar>
        <NavBtn>
          {Menu(props.data)}
          {/*<LoginButton/>*/}
          </NavBtn>
      </Nav>
      <Tagbar>
        <Tag>Nike</Tag>
        <Tag>Adidas</Tag>
        <Tag>FILA</Tag>
        <Tag>Reebok</Tag>
        <Tag>Puma</Tag>
      </Tagbar>


    </>
  );
};

export default Navbar;
