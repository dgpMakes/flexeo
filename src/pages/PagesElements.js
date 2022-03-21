import styled from 'styled-components';
import { colors } from '../theme';

export const SuperContainer = styled.div`
  padding: 0.5rem 5px;
  position: sticky; top: 0; //Makes things sticky <3

  @media screen and (min-width: 997px) {
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 955px) / 2);
  }
`;

export const Front = styled.div`

  display: none;

  @media screen and (min-width: 997px) {
    margin: 40px 0px 0px 0px;
    display: flex;
    width:100%;
    height:380px;
    overflow:hidden;
    position: relative;
  }  
`;

export const CardLText = styled.div`
  margin: 62px 0px 0px 5px;
  width: 61%;
  height: 240px;
  padding: 0px 0px 0px 40px;
  position: absolute;
  z-index: 2px;
  box-shadow: 0 1px 3px ${colors.shadow};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  

  display:"block";
`;

export const FrontHoldImage = styled.div`
  width:35%;
  margin: 0% 59%;
  height:380px;
  overflow:hidden;
  position: absolute;
  border-radius: 15px;
  box-shadow: 0 1px 3px ${colors.shadow};
`;

export const CardLImage = styled.img`
  width: 700px;
  height: 1000px;
  object-fit: cover;
  object-position: 85% -600px;
  display:"block";
`;

export const IconSet = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FrontButton = styled.button`
  padding: 8px 0px 8px 0px;
  font-size: 20px;
  width: 150px;
  color: ${colors.prim};
  background-color: ${colors.smooth_prim};
  border-style: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }
`

export const FrontMb = styled.div`
  
  display: none;

  @media screen and (max-width: 996px) {
    padding: 20px;
    display: block;
    width: 100%;
    font-size: 20px;
    color: ${colors.prim};
    background-color: ${colors.smooth_prim};
    border-radius: 10px;
  }
`

export const HlSection = styled.div`
  display: flex;
  margin: 30px 0px;
  border-radius: 20px;
  clear: both;
`

export const HlSectionText = styled.div`
  display:flex;
`
export const HlSectionTextLeft = styled.div`
`

export const HlSectionButtonRight = styled.div`
  margin-left: auto;
  text-align:center;
  padding: 13px 0px 0px 0px;
  font-size: 16px;
  font-weight: 400;
  width: 90px;
  color: ${colors.prim};
  background-color: ${colors.smooth_prim};
  border-style: none;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }
`

export const CardSection = styled.div`
  display:flex;
  width:100%;
`



