import styled from 'styled-components';
import { colors } from '../../theme';
export const Card = styled.div`
  box-shadow: inset 0px 0px 0px 1px ${colors.un_grey};
  width: 200px;
  height: 200px;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  display: flex;
  align-items: center;
  text-decoration: none;
  transform: scaleX(-1);

  width: 210px; 
  height: 120px; 
  object-fit: cover; 
  object-position: -10% 40%;
`;

export const Title = styled.p`
  font-size:14px;
  height: 35px;
  font-weight: 300;
`;

export const Text = styled.div`
  padding: 15px;
`;

export const Subsection = styled.p`
    display: flex;
    align-items: center;
`;

export const Subtitle = styled.p`
    font-size:14px;
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
`;

export const LikeNumber = styled.p`
  
`;
