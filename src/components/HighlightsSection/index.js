import React from 'react'
import { HlSection, HlSectionButtonRight, HlSectionText, HlSectionTextLeft, CardSection} from './Elements';
import {FiUsers} from 'react-icons/fi';

import ModelCard from '../ModelCard';
import {FaArrowRight} from 'react-icons/fa';
import { colors } from '../../theme';

const HighlightsSection = (props) => {  
  return (
    <>
      <HlSection>
        <div>{props.icon}</div>
        
        <HlSectionText>
            <HlSectionTextLeft>
              <h3 style={{color: colors.prim}}>{props.title}</h3>
              <h4>{props.description}</h4>
            </HlSectionTextLeft>
          </HlSectionText>
        <HlSectionButtonRight >Ver más <FaArrowRight style={{margin:'2px 0px 0px 0px',}}/></HlSectionButtonRight>
      </HlSection>

      <CardSection>
        <div><ModelCard></ModelCard></div>
      </CardSection>
    </>
  );
};

export default HighlightsSection;
