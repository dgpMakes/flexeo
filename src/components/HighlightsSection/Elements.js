import styled from 'styled-components';
import { colors } from '../../theme';

export const HlSection = styled.div`
  display: flex;
  margin: 25px 0px 10px 0px;
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
  padding: 8px 0px 0px 0px;
  font-size: 16px;
  font-weight: 400;
  height: 38px;
  width: 100px;
  color: ${colors.prim};
  background-color: ${colors.smooth_prim};
  border-style: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }

`

export const CardSection = styled.div`
  display:grid;
  gap: 0.6rem;
  grid-auto-flow:dense;
  grid-auto-rows:10.5rem;
  grid-template-columns: repeat(auto-fill,minmax(10.5rem, 2fr));

  @media screen and (max-width: 997px) {
    justify-items: center;
  }
`

export const Title = styled.h4`
  color: ${colors.prim};
  font-weight: 600;
`

export const SubTitle = styled.h4`
  font-weight: 400;
`
