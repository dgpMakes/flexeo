import styled from 'styled-components';
import { colors } from '../../theme';

export const Line = styled.div`
  border-left: 2px solid ${colors.un_grey};
  margin: 40px 0px ;
  height: 400px;
`

export const SectionName = styled.h3`
  color: ${colors.prim};
  font-weight: 600;
`

export const LeftContainer = styled.div`
  padding: 30px 10px 0px 10px;
`

export const Container = styled.div`
  margin: 20px 0px;
  display: flex;
  box-shadow: inset 0px 0px 0px 1px ${colors.un_grey};
  border-radius: 10px;
  background-color: white;
`

export const Grid = styled.div`
  margin: 0px 0px 0px 15px;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
`
export const UserImage = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 80px; 
  height: 80px; 
  object-fit: cover; 
  object-position: 0% 80%;
`;

export const UserInfo = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;

`;

export const ActionButton = styled.button`
  font-weight: normal;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: ${colors.prim};
  background: ${colors.un_grey};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }
`;












