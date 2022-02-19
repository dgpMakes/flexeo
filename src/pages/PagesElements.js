import styled from 'styled-components';
import { colors } from '../theme';

export const SuperContainer = styled.div`
  padding: 0.5rem 10px;
  position: sticky; top: 0; //Makes things sticky <3

  @media screen and (min-width: 996px) {
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 955px) / 2);
  }
`;

export const Front = styled.div`
  display: flex;
  width:100%;
  height:380px;
  overflow:hidden;
  position: relative;
`;

export const CardLText = styled.div`
  width: 60%;
  height: 250px;
  position: absolute;
  z-index: 2px;
  box-shadow: 0 1px 3px ${colors.shadow};
  border-radius: 15px;

  display:"block";
`;

export const FrontHoldImage = styled.div`
  z-index: 1px;
  width:50%;
  margin: 5% 50%;
  height:300px;
  overflow:hidden;
  position: absolute;
  border-radius: 15px;
  box-shadow: 0 1px 3px ${colors.shadow};
`;

export const CardLImage = styled.img`
  width: 100%;
  height: 1000px;
  object-fit: cover;
  object-position: 55% -664px;

  display:"block";
`;

