import React from 'react'
import {HlSection, HlSectionButtonRight, HlSectionText, HlSectionTextLeft, CardSection, Title, SubTitle,HlSectionButtonEnd} from './Elements';

import ModelCard from '../ModelCard';
import {FaArrowRight} from 'react-icons/fa';

const HighlightsSection = (props) => {  
    // Where we're fetching data from
    fetch('http://server1.flexeo.es:8000/v1/recent-products')
    .then(response => response.json())
    .then(response => console.log(response))


  return (
    <>
      <HlSection>
        <div>{props.icon}</div>
        
        <HlSectionText>
            <HlSectionTextLeft>
              <Title>{props.title}</Title>
              <SubTitle>{props.description}</SubTitle>
            </HlSectionTextLeft>
          </HlSectionText>
        <HlSectionButtonRight >Ver más <FaArrowRight style={{margin:'2px 0px 0px 0px',}}/></HlSectionButtonRight>
      </HlSection>

      <CardSection>
        <ModelCard></ModelCard>
        <ModelCard></ModelCard>
        <ModelCard></ModelCard>
        <ModelCard></ModelCard>
        <ModelCard></ModelCard>
      </CardSection>
    </>
  );
};

export default HighlightsSection;
