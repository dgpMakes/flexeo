import { React, useState } from 'react';
import { Card, CardImage, Text, Title, Subsection, Subtitle, Price, LikeCount, LikeNumber } from './Elements';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import sneaker from '../../images/sneaker.png';
import { colors } from '../../theme';
import { Link } from 'react-router-dom';
//import { useState } from 'react/cjs/react.production.min';

const ModelCard = (props) => {

  const [count, setCount] = useState(Math.round(100 * Math.random())); //reemplazar por nº likes
  const [likedState, setLikedState] = useState(false);

  function handleLike() {
    if (!likedState) {
      setCount(count + 1);
      setLikedState(true);
    } else {
      setCount(count - 1);
      setLikedState(false);
    }
  }

  function showIcon() {
    if (!likedState) {
      return <LikeCount onClick={() => handleLike()}><FaRegHeart /><LikeNumber>{count}</LikeNumber></LikeCount>
    } else {
      return <LikeCount style={{ color: colors.ter }} onClick={() => handleLike()}><FaHeart /><LikeNumber>{count}</LikeNumber></LikeCount>
    }
  }

  return (
    <>
      <Card>
        <Link to={'/model/' + props.id}>
          <CardImage src={sneaker} alt='sneaker'></CardImage>
        </Link>
        <Text>
          <Title>{props.name}</Title>
          <Subsection>
            <Subtitle><Price>{props.price}€ </Price>&nbsp;en retail</Subtitle>
            {showIcon()}
          </Subsection>
        </Text>
      </Card>
    </>
  );
};

export default ModelCard;
