import styled from 'styled-components';
import { colors } from '../../theme';
import {Link } from 'react-router-dom';

export const Card = styled.div`
  box-shadow: inset 0px 0px 0px 1px ${colors.un_grey};
  border-radius: 10px;
  background-color: white;
`;

export const DivFlex = styled.div`
    display: flex;
`;

export const ProductImg = styled.img`
  display: flex;
  margin:0px 50px 0px 0px;
  text-decoration: none;
  border-radius: 10px;
  width: 320px; 
  height: 230px; 
  //object-fit: cover; 
  object-position: 0% 100%;
`;

export const Title = styled.h3`
  margin:0px 0px 10px 0px;
`;

export const Description = styled.h5`
  width:300px;
  margin:0px 0px 20px 0px;

`;

export const FeatureSection = styled.div`
  padding: 50px 80px 30px 80px;

display: flex;
`;

export const FeatureTitle = styled.h5`
`;

export const FeatureValue = styled.h5`
`;

export const LikeButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  height: 38px;
  width: 60px;
  padding: 10px 0px 0px 10px;
  color: ${colors.ter};
  background-color: ${colors.smooth_ter};
  border-style: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }
`;

export const ChatButton = styled.button`
  text-align:center;
  font-size: 16px;
  font-weight: 400;
  
  height: 38px;
  width: 70px;
  color: ${colors.sec};
  background-color: ${colors.smooth_sec};
  border-style: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${colors.font};
    color: ${colors.white};
  }
`;

export const SubTitle = styled.h5`

`;

export const UserCardSection = styled.div`

`;
export const UserCard = styled.div`

`;

export const UserButtons = styled.div`

`;

export const BreadCrumbs = styled(Link)`
/* unvisited link */
  font-size: 14px;
  text-decoration: none;
  font-weight: 300;
  color: ${colors.prim};

`;