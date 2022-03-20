import React from 'react';
import { SuperContainer, Front, FrontHoldImage, CardLText, IconSet, FrontButton, FrontMb} from './PagesElements';
import { HlSection, HlSectionButtonRight, HlSectionText, HlSectionTextLeft, CardSection} from './PagesElements';
import { FaSearch,FaHandshake, FaArrowRight} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {HiFire} from 'react-icons/hi';
import ModelCard from '../components/ModelCard';

import {BsFillShieldFill} from 'react-icons/bs';
import { colors
 } from '../theme';
const Home = () => {
    return (

            <SuperContainer>
                {/* HEADER*/}
                <Front>
                    <FrontHoldImage>
                        {/*<CardLImage src='https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg'></CardLImage>*/}
                    </FrontHoldImage>
                    <CardLText>
                        <h1>Somos de edición limitada.</h1>
                        <h4>Tu portal de compraventa de zapatillas exclusivas</h4>
                        <br/>
                        <IconSet>
                            <h4><FaSearch size={25} style={{color: colors.prim}}/><br/>Compara modelos y precios</h4>
                            <h4><FaHandshake size={25} style={{color: colors.prim}}/><br/>Negocia con otros usuarios</h4>
                            <h4><BsFillShieldFill size={25} style={{color: colors.prim}}/><br/>Protegido de las zapas falsas</h4>
                        </IconSet>
                        <br/>
                        <FrontButton>Vender ya</FrontButton>
                    </CardLText> 
                </Front>
                <FrontMb>
                    <h4 style={{fontWeight: 500}}>Somos de edición limitada.</h4>
                    <h5 style={{color: colors.font}}>Tu portal de compraventa de zapatillas exclusivas</h5>
                </FrontMb>
                
                 {/* Sneakers selection*/}

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

                <HlSection>
                    <FiUsers size={40} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>
                    <HlSectionText>
                        <HlSectionTextLeft>
                            <h3 style={{color: colors.prim}}>Últimas novedades</h3>
                            <h4>De gente que sigues.</h4>
                        </HlSectionTextLeft>
                    </HlSectionText>
                    <HlSectionButtonRight>Ver más <FaArrowRight style={{margin:'2px 0px 0px 0px',}}/></HlSectionButtonRight>
                </HlSection>


        

            </SuperContainer>
    );
};
export default Home;
