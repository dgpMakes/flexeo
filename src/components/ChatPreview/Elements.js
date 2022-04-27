import styled from 'styled-components';
import { colors } from '../../theme';

export const Card = styled.div`
  display: flex;
  margin: 2px; 
  box-shadow: inset 0px 0px 0px 1px ${colors.un_grey};
  width: 250px;
  height: 80px;
  border-radius: 10px;
  background-color: white;
`;

export const UserImage = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 1px 0px 0px 1px;
  width: 80px; 
  height: 80px; 
  object-fit: cover; 
  object-position: 0% 80%;
`;

export const Title = styled.p`
  font-size:14px;
  font-weight: 400;
  color: ${colors.font};

  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
`;

export const Text = styled.div`
  padding: 5px 10px 5px 10px;
`;

export const Subsection = styled.p`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.p`
    font-size:12px;
    display: flex;
    align-items: baseline;
`;


export const ActionButton = styled.button`
  padding: 7px;
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

