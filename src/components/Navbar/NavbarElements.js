import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../theme';

export const Nav = styled.nav`
  display: flex;
  height: 80px;
  padding: 0.5rem 10px;
  z-index: 9;

  background: white;
  box-shadow: 0 1px 3px ${colors.shadow};
  position: sticky; top: 0px; //Makes things sticky <3
  
  @media screen and (min-width: 997px) {
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
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

export const LogoL = styled.img`
  @media screen and (max-width: 996px) {
    display: none;
  }
`;

export const LogoS = styled(LogoL)`
    display: flex;
    padding: 0px 10px 0px 0px;
    @media screen and (min-width: 997px) {
    display: none;
  }

`;

export const NavBtn = styled.nav`
  display: flex;
  margin-right: 24px;
  align-items: center;

  @media screen and (max-width: 996px) {
    display: none;
  }
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


export const Input = styled.input`
  width: 100%;
  margin: 0 0.5rem 0 0.5rem;
  font-size: medium;

  border: none;
  outline: none;
  background:${colors.searchbar};
  color: black;
`;

export const Searchbar = styled.div`
  display: flex;
  width: 38%;
  margin: 12px 0px 12px 0px;
  align-items: center;


  color: white;
  background: ${colors.searchbar};
  border-radius: 0.5rem;

  @media screen and (max-width: 996px) {
    transition: all 0.5s ease-in-out;
    margin: 9px 7px 9px 0px;

    width: 95%;
  }
`;

export const Tagbar = styled.div`
  display: flex;
  height: 35px;
  padding: 0.5rem 10px;
  z-index: 10;

  background: white;
  box-shadow: 0 1px 3px ${colors.shadow};
  position: sticky; top: 80px; //Makes things sticky <3
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);

`;

export const Tag = styled.div`
    padding: 0px 10px;

`;