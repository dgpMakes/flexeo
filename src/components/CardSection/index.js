import React from 'react'
import { HlSection, HlSectionButtonRight, HlSectionText, HlSectionTextLeft} from './PagesElements';
import {FiUsers} from 'react-icons/fi';
import {HiFire} from 'react-icons/hi';
import ModelCard from '../components/ModelCard';
import {FaArrowRight} from 'react-icons/fa';

const CardSection = () => {
  
  return (
    <>
      <HlSection>
        <HiFire size={40} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>
        <HlSectionText>
            <HlSectionTextLeft>
              <h3 style={{color: colors.prim}}>Lo más popular</h3>
                <h4>Estas zapas están que lo arden.</h4>
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

export default CardSection;
