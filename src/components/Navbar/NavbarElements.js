import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0 1px 3px hsla(0,0%,0%,.2)
  /* box-shadow: inset 0 1px 0 hsl(224,84%,74%);*/
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #2E2E8D;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinkSecondary = styled(Link)`
  border-radius: 5px;
  background: white;
  padding: 10px 15px;
  color: #2E2E8D;
  outline: solid;
  outline-color: #2E2E8D;

  
  border: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  
  background: #662D90;
  padding: 10px 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Input = styled.input`
margin: 0 0.5rem 0 0.5rem;
width: 100%;
border: none;
outline: none;
background:#E6E6E6;
color: black;
  }
`;

export const Searchbar = styled.div`
  align-items: center;
  width: 40%;
  margin: 9px 0px 9px 0px;
  display: flex;
  background: #E6E6E6;
  border-radius: 0.5rem;
  color: white;
  display: flex;
`;
/*box-shadow: 0.25rem 0.25rem 0rem #999999;*/