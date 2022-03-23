import styled from 'styled-components';
import { colors } from '../../theme';

export const FooterSection = styled.div`
 background-color: ${colors.background_grey};
 height: 600px;
 margin: 125px 0px 0px 0px;
 padding: 150px calc((100vw - 955px) / 2);

 @media screen and (max-width: 996px) {
    margin: 60px 0px 0px 0px;
    align-content: center;
    padding: 2rem 40px;
    height: 1120px;

  }
`

export const RelevantTags = styled.div`
 display:grid;
  gap: 0.85rem;
  grid-auto-flow:dense;
  grid-auto-rows:10.5rem;
  grid-template-columns: repeat(auto-fill,minmax(14rem, 2fr));
`
export const RelevantTagsList = styled.div`
 
`

export const RTLtitle = styled.h5`
 font-size: 14px;
`

export const RTLtag = styled.h6`
 font-size: 12px;
  width: 210px;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
`
export const RelevantPages = styled.div`
  display:grid;
  align-items: center;
  gap: 0.85rem;
  grid-auto-flow:dense;
  grid-auto-rows:5rem;
  grid-template-columns: repeat(auto-fill,minmax(14rem, 2fr));
 
`

export const LogoCopyright = styled.div`
 
`

export const Logo = styled.img`
 height: 200px;
`

export const Copyright = styled.h6`
  width: 200px;

`

export const RelevantPagesList = styled.div`
 
`
