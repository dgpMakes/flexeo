import React from 'react'
import { Card, PriceTag, DivFlex, ProductImg, Title, Description, FeatureSection, FeatureTitle, FeatureValue, LikeButton, ChatButton, SubTitle, UserCard, UserButtons, UserCardSection } from './Elements';
import product from '../../images/product.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LikeNumber } from '../ModelCard/Elements';
import { colors } from '../../theme';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../ModelInformation/Elements';
import {AiOutlineQuestionCircle} from 'react-icons/ai'

import user from '../../images/filling_user.png';

class ProductInformation extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      contentProduct: null,
      contentModel: null,
      contentUser: null,
      DataisLoaded: false
    }
  }

  pullData() {
    const { id } = this.props.params;

    fetch('https://api.flexeo.dgpmakes.com/v1/product/'+id, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          contentProduct: json,
          DataisLoaded: true,
        });
        //console.log(json);
        //console.log(this.state.contentProduct.length);
      });

    

    
  }

  

  componentDidMount() {
    this.interval = this.pullData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  translateGender(gender) {
    switch (gender) {
      case 'women':
        return 'Mujer';
      case 'men':
        return 'Hombre';
    }
  }

  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded) {
      return (
        <>
          <p>Loading</p>
        </>)
    }


    return (
      <>
      <Card>
        <FeatureSection>
          <ProductImg src={"https://images.flexeo.dgpmakes.com/file/flexeo/products/"+this.state.contentProduct.product_id}></ProductImg>
          <div style={{margin:"40px 0px 0px 0px"}}>
            <BreadCrumbs to={'/'} >Inicio / Producto / {this.state.contentProduct.user.name} / {this.state.contentProduct.model.name}</BreadCrumbs>
            <PriceTag>{this.state.contentProduct.price}€</PriceTag>
            <Title>{this.state.contentProduct.model.name}</Title>
            <Description>{this.state.contentProduct.description}</Description>
            <div style={{color: colors.like_count_grey}}>
            <DivFlex>
              <FeatureTitle>{this.translateGender(this.state.contentProduct.model.gender)} · {this.state.contentProduct.condition} <AiOutlineQuestionCircle style={{ verticalAlign:"middle"}}/></FeatureTitle>
            </DivFlex>
            <FeatureTitle></FeatureTitle>
            <DivFlex>
              <FeatureTitle>Talla {this.state.contentProduct.size} · {this.state.contentProduct.model.brand} · {this.state.contentProduct.model.retail_price}$ en retail</FeatureTitle>
            </DivFlex>
            </div>
            <DivFlex style={{margin:"10px 0px 0px 0px"}}>
              <ChatButton>Chat</ChatButton>
            </DivFlex>
          </div>
        </FeatureSection>
        <img style={{margin:"0px 0px 30px 100px", width:"700px"}}src={user}></img>


      </Card>
    </>)

};
}

export default (props) => (
  <ProductInformation
      {...props}
      params={useParams()}
  />
);