import React from 'react'
import { Nav, NavBtn, NavBtnLinkSecondary, NavBtnLink} from './NavbarElements';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';

const NavbarBottom = () => {
  return (
    <>
      <Nav>
        {/*<NavMenu>
          <div>

            <NavLink to="/about" activeStyle>
              Home
            </NavLink>
          </div>
        </NavMenu>*/}
        <NavBtn>
          <NavBtnLinkSecondary to="/sign-in"><IoLogoGoogle size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Entrar con Google</NavBtnLinkSecondary>
          <NavBtnLink to="/sign-in"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarBottom;
