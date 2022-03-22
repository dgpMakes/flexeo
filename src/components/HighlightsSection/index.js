import React from 'react'
import {HlSection, HlSectionButtonRight, HlSectionText, HlSectionTextLeft, CardSection, Title, SubTitle} from './Elements';

import ModelCard from '../ModelCard';
import {FaArrowRight} from 'react-icons/fa';

export default class HighlightsSection extends React.Component{  
    constructor(props){
      super(props);

      this.state = {
        model: "a",
        DataisLoaded: false
      }
    }
    
    pullData(){
      fetch("http://server1.flexeo.es:8000/v1/recent-models")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          model: json,
          DataisLoaded: true,
        });
        console.log(json);
        console.log(this.state.model.length);
      });
    }

    componentDidMount(){
      this.interval = this.pullData();
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }
    // Where we're fetching data from
    //async componentDidMount(){
     // const url = 'http://server1.flexeo.es:8000/v1/recent-products';
     // const response = await fetch(url);
      //const data = await response.json();
      //console.log("El log da " + data[0].description);
      //this.setState = ({model: data[0].description})
    //}
    //.then(response => response.json())
    //.then(response => console.log(response.forEach(e => console.log(e["description"]))))


  render (){
    const{DataisLoaded} = this.state;
    if(!DataisLoaded){
    return(
    <>
      <p>Loading</p>
    </>)}



    const cards = [];
    //const cards = this.state.model.map((i) =>
    //  <ModelCard name = {this.state.model[i].name} price = {this.state.model[i].retail_price}></ModelCard>
    //);

    for(let i = 0; i< this.state.model.length;i++){
      cards.push(<ModelCard key = {"model."+i} name = {this.state.model[i].name} price = {this.state.model[i].retail_price}></ModelCard>);
    }
    
return(
  <>
    <HlSection>
      <div>{this.props.icon}</div>
      <HlSectionText>
          <HlSectionTextLeft>
            <Title>{this.props.title}</Title>
            <SubTitle>{this.props.description}</SubTitle>
          </HlSectionTextLeft>
        </HlSectionText>
      <HlSectionButtonRight >Ver más <FaArrowRight style={{margin:'2px 0px 0px 0px',}}/></HlSectionButtonRight>
    </HlSection>

    <CardSection>
      {cards}
    </CardSection>
  </>)
  
  };
}
