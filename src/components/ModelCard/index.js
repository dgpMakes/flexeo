import React from 'react'
import {Card, CardImage,Text,Title,Subsection,Subtitle,Price,LikeCount,LikeNumber} from './Elements';
import {FaRegHeart} from 'react-icons/fa'
import sneaker from '../../images/sneaker.png';

const ModelCard = () => {
  
  return (
    <>
      <Card>
        <CardImage src={sneaker} alt='sneaker'></CardImage>
        <Text>
          <Title>Nike Dunk Low Retro White Black (2021)</Title>
          <Subsection>        
            <Subtitle>Retail:<Price>143€</Price></Subtitle>
            <LikeCount><LikeNumber>39</LikeNumber><FaRegHeart/></LikeCount>
          </Subsection>
        </Text>
      </Card>
    </>
  );
};

export default ModelCard;
