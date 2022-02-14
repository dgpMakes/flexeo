import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../theme';

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 80px;
  z-index: 10;
  position: sticky; bottom: 0;

  background: white;
  box-shadow: 0 1px 3px ${colors.shadow};
  justify-content: center;
  @media screen and (min-width: 996px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0 1rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  color: ${colors.sec};

  &.active {
    color: #15cdfc;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  margin-right: 24px;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  margin-left: 24px;
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;

  font-weight: 400;

  color: #fff;
  background: ${colors.prim};
  text-decoration: none;
  border-radius: 5px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: 400;
    background: ${colors.font};
    color: ${colors.white};
  }
`;

export const NavBtnLinkSecondary = styled(Link)`
  padding: 10px 15px;
  margin-left: 24px;
  cursor: pointer;

  border-radius: 5px;
  border: none;
  box-shadow: inset 0px 0px 0px 3px ${colors.font};
  color: ${colors.font};
  background: white;
  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: none;
    background: ${colors.font};
    color: ${colors.white};
  }
`;


export const NavMenu = styled.div`
  display: flex;
  margin-right: -24px;
  align-items: center;

  @media screen and (max-width: 995px) {
    display: none;
  }
`;