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
  const [mounted, setMounted] = useState(false);

  let { id } = useParams();


  /*function pullData() {
    return fetch('https://api.flexeo.es/v1/product/'+id)
      .then(data => data.json())
  }*/

  useEffect(() => {
    async function pullData() {
      return await fetch('https://api.flexeo.es/v1/product/'+id)
        .then(data => data.json())
    }

    if(mounted===false){
      return;
    }
    pullData()
      .then(items => {
          setProductInfo(items)
          setMounted(true)
        })
  },[id,mounted])

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
            <Title>Adidas Nike Edition</Title>
            <Description>{console.log(productInfo.description)}</Description>
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
