import styled from 'styled-components';
import { colors } from '../../theme';


export const ButtonRender = styled.div`
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