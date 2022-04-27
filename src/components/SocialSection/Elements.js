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
  padding: 30px 40px 0px 40px;
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














