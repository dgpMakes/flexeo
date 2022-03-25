import React from 'react'
import {FooterSection,RelevantTags,RelevantTagsList, RTLtitle, RTLtag,RelevantPages, LogoCopyright, Logo, Copyright, RelevantPagesList} from './Elements';
import LogoSVG from '../../images/logoShortV1.svg';

const Footer = (props) => {
  return (
    <>
      <FooterSection>
        <RelevantTags>
          <RelevantTagsList>
            <RTLtitle>Nike</RTLtitle>
            <RTLtag>Nike White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Nike White Unlimited</RTLtag>
            <RTLtag>Nike Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Nike White Extreme And Unlimited</RTLtag>
            <RTLtag>Nike Extreme Unlimited</RTLtag>
            <RTLtag>Nike White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Nike White Unlimited</RTLtag>
            <RTLtag>Nike Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Nike White Extreme And Unlimited</RTLtag>
            <RTLtag>Nike Extreme Unlimited</RTLtag>
          </RelevantTagsList>
          <RelevantTagsList>
            <RTLtitle>Adidas</RTLtitle>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>
          </RelevantTagsList>
          <RelevantTagsList>
            <RTLtitle>Adidas</RTLtitle>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>  
          </RelevantTagsList>
          <RelevantTagsList>
            <RTLtitle>Adidas</RTLtitle>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>
            <RTLtag>Adidas White Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Unlimited</RTLtag>
            <RTLtag>Adidas Balance Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas White Extreme And Unlimited</RTLtag>
            <RTLtag>Adidas Extreme Unlimited</RTLtag>
          </RelevantTagsList>
        </RelevantTags>
        <RelevantPages>
          <LogoCopyright>
            <Logo style={{height:'25px', margin:'5px 0px 0px 0px'}} src={LogoSVG} alt="Logo"></Logo>
            <Copyright>Copyright © {(new Date().getFullYear())} FLEXEO © de sus respectivos propietarios</Copyright>
          </LogoCopyright>
          <RelevantPagesList>
            <RTLtitle>FLEXEO</RTLtitle>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
          </RelevantPagesList>
          <RelevantPagesList>
            <RTLtitle>FLEXEO</RTLtitle>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
          </RelevantPagesList>
          <RelevantPagesList>
            <RTLtitle>FLEXEO</RTLtitle>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
            <RTLtag>Política de privacidad</RTLtag>
          </RelevantPagesList>
        </RelevantPages>
      </FooterSection>
    </>
  );
};

export default Footer;
