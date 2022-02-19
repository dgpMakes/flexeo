import styled from 'styled-components';
import { colors } from '../theme';

export const SuperContainer = styled.div`
  display: flex;
  height: 80px;
  padding: 0.5rem 10px;
  z-index: 10;

  position: sticky; top: 0; //Makes things sticky <3

  @media screen and (min-width: 996px) {
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 955px) / 2);
  }
`;

export const CardL = styled.div`
  background: ${colors.smooth_prim};
  border-radius: 10px;
  width:100%;

`;
