import React from 'react'
import { Nav, NavBtn, NavBtnLinkSecondary, NavBtnLink} from './NavbarElements';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import LoginButton from '../LoginButton';
import { RedirectButton, Minititle,ProfilePhoto } from '../Navbar/NavbarElements';
import {IoHomeOutline} from 'react-icons/io5';
import {FiUsers} from 'react-icons/fi';
import {IoChatbubblesOutline} from 'react-icons/io5'

function Menu(data) {
  if (data == null) {
    return (<>
    <NavBtn>
      <LoginButton/>
      <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
    </NavBtn></>);

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
          <RedirectButton exact to="/upload">
          <IoMdAddCircleOutline size={30}/>
          <Minititle>Subir</Minititle>
          </RedirectButton>
          <RedirectButton exact to="/chats">
            <IoChatbubblesOutline size={25}/>
            <Minititle>Chats</Minititle>
          </RedirectButton>
          <RedirectButton exact to="/panel">
            <ProfilePhoto src={data.photo} alt="profile" style={{width:"25px", borderRadius:"20px"}}></ProfilePhoto>
            <Minititle>Panel</Minititle>
          </RedirectButton>

</>)
    
  }
}


const NavbarBottom = (props) => {
  return (
    <>
    

      <Nav>
      {Menu(props.data)}
        {/*<NavMenu>
          <div>

            <NavLink to="/about" activeStyle>
              Home
            </NavLink>
          </div>
        </NavMenu>*/}

      </Nav>
    </>
  );
};

export default NavbarBottom;
