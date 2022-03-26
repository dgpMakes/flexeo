import styled from 'styled-components';
import { colors } from '../../theme';

export const Card = styled.div`
  box-shadow: inset 0px 0px 0px 1px ${colors.un_grey};
  width: 175px;
  height: 223px;
  border-radius: 10px;
  background-color: white;
`;

export const CardImage = styled.img`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin: 1px 0px 0px 1px;
  width: 173px; 
  height: 173px; 
  object-fit: cover; 
  object-position: 0% 100%;
`;

export const Title = styled.p`
  font-size:14px;
  height: 35px;
  font-weight: 400;
  color: ${colors.prim};

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

export const Price = styled.p`
    font-size:18px;
    font-weight: 400;
    display: flex;
    
`;

export const LikeCount = styled.p`
    display:flex;
    margin-left: auto;
    color: ${colors.like_count_grey};

    &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: none;
    color: ${colors.ter};
  }
`;

export const LikeNumber = styled.p`
  
`;
