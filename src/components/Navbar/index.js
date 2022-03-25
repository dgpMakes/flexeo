import React from 'react'
import { Nav, NavLink, Input, Searchbar, NavBtn, NavBtnLinkSecondary, NavBtnLink, LogoL, LogoS, Tagbar, Tag } from './NavbarElements';
import Logo_long from '../../images/logo-long.svg';
import Logo_short from '../../images/logo-short.svg';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch} from 'react-icons/fa';
import { colors } from '../../theme';
import GoogleLogin from 'react-google-login';

//client-id 677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com
//secret-client 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

const Navbar = () => {

  const responseGoogle = (response)=>{
    console.log(response);
  }
  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoL src={Logo_long} alt='logo' />
          <LogoS src={Logo_short} alt='logo' />
        </NavLink>
        <Searchbar>
          <FaSearch size={20} style={{color: colors.i_searchbar, margin: "0px 0px 0px 15px", verticalAlign: 'middle' }} /><Input type="text" placeholder="Buscar zapatillas" />
        </Searchbar>
        <NavBtn>
        <GoogleLogin
          clientId="677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
          <NavBtnLinkSecondary to="/sign-in"><IoLogoGoogle size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Entrar con Google</NavBtnLinkSecondary>
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
