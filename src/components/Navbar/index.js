import React from 'react'
import { Nav, NavLink, Input, Searchbar, NavBtn, NavBtnLink, LogoL, LogoS, Tagbar, Tag } from './NavbarElements';
import Logo_long from '../../images/logo-long.svg';
import Logo_short from '../../images/logo-short.svg';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch} from 'react-icons/fa';
import { colors } from '../../theme';
import Cookies from 'universal-cookie';
import LoginButton from '../LoginButton';

//client-id 677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com
//secret-client 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

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  if(b == null){
    return;
  }
  var token = b[0];
  token = token.substring(8);
  var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    console.log(JSON.parse(jsonPayload));

    //return JSON.parse(jsonPayload);
}

const Navbar = () => {

  return (
    <>
      <Nav>
        {getCookie("auth")}
        <NavLink to="/">
          <LogoL src={Logo_long} alt='logo' />
          <LogoS src={Logo_short} alt='logo' />
        </NavLink>
        <Searchbar>
          <FaSearch size={20} style={{color: colors.i_searchbar, margin: "0px 0px 0px 15px", verticalAlign: 'middle' }} /><Input type="text" placeholder="Buscar zapatillas" />
        </Searchbar>
        <NavBtn>
          <LoginButton/>
          <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
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
