import React from 'react'
import { Card, DivFlex, ProductImg, Title, Description, FeatureSection, FeatureTitle, FeatureValue, LikeButton, ChatButton, SubTitle, UserCard, UserButtons, UserCardSection } from './Elements';
//import AiOutlineHome from 'react-icons/ai';
//client-id 677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com
//secret-client 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
import product from '../../images/product.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { LikeNumber } from '../ModelCard/Elements';
import { colors } from '../../theme';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProductInformation = () => {
  const [count, setCount] = useState(Math.round(100 * Math.random())); //reemplazar por nº likes
  const [likedState, setLikedState] = useState(false);
  const [productInfo, setProductInfo] = useState(null);


  let { id } = useParams();

  function pullData() {
    return fetch('https://api.flexeo.es/v1/product/'+{id})
      .then(data => data.json())
  }

  useEffect(() => {
    let mounted = true;
    pullData()
      .then(items => {
        if(mounted) {
          setProductInfo(items)
        }
      })
    return () => mounted = false;
  }, [])

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
      return <LikeButton onClick={() => handleLike()}><FaRegHeart /><LikeNumber>{count}</LikeNumber></LikeButton>
    } else {
      return <LikeButton style={{ color: colors.ter }} onClick={() => handleLike()}><FaHeart /><LikeNumber>{count}</LikeNumber></LikeButton>
    }
  }

  return (
    <>
      <Card>
        <FeatureSection>
          <ProductImg src={product}></ProductImg>
          <div>
            <Title>Adidas Nike Edition {id}</Title>
            <Description>Ya sabéis lo bien que quedan con cualquier cosa que te pongas. Estas zapas las compré hace una semana y ahora buscan nuevo dueño. Me las puse para sacar fotos.
              Me envías un chat y quedamos :)</Description>
            <DivFlex>
              <FeatureTitle>Estado:</FeatureTitle><FeatureValue>Nuevas</FeatureValue>
            </DivFlex>
            <DivFlex>
              <FeatureTitle>Talla:</FeatureTitle><FeatureValue>42</FeatureValue>
            </DivFlex>
            <DivFlex>
              <FeatureTitle>Precio retail:</FeatureTitle><FeatureValue>124$</FeatureValue>
            </DivFlex>
            <DivFlex>
              <FeatureTitle>Marca:</FeatureTitle><FeatureValue>Adidas</FeatureValue>
            </DivFlex>
            <DivFlex>
              {showIcon()}
              <ChatButton>Chat</ChatButton>
            </DivFlex>
            <SubTitle></SubTitle>
            <UserCardSection>
              <UserCard>

              </UserCard>
              <UserButtons>

              </UserButtons>
            </UserCardSection>
          </div>
        </FeatureSection>


      </Card>
    </>
  );
};

export default ProductInformation;
