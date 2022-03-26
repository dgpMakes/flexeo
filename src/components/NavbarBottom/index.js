import React from 'react'
import { Nav, NavBtn, NavBtnLinkSecondary, NavBtnLink} from './NavbarElements';
import { IoLogoGoogle, IoMdAddCircleOutline } from 'react-icons/io';
import LoginButton from '../LoginButton';
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
          <LoginButton/>
          <NavBtnLink to="/upload"><IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Sube tus zapas</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavbarBottom;
