import React from 'react';
import {Front, FrontHoldImage, CardLText, IconSet, FrontButton, FrontMb} from './PagesElements';
import {FaSearch,FaHandshake} from 'react-icons/fa';
import HighlightsSection from '../components/HighlightsSection';
import {BsFillShieldFill} from 'react-icons/bs';
import {HiFire} from 'react-icons/hi';
import {colors} from '../theme';
import {FiUsers} from 'react-icons/fi';
import { CardLImage } from './PagesElements';

import sneakers from '../images/home_sneakers.jpeg';
const Home = () => {
    return (
        <>
               
                <Front>
                    <FrontHoldImage>
                        <CardLImage src={sneakers} alt='sneakers'></CardLImage>
                    </FrontHoldImage>
                    <CardLText>
                        <h1>Somos de edición limitada.</h1>
                        <h4>Tu portal de compraventa de zapatillas exclusivas</h4>
                        <br/>
                        <IconSet style={{margin: '5px'}}>
                            <h4 style={{margin:'5px 5px 5px 0px'}}><FaSearch size={25} style={{color: colors.prim}}/><br/>Compara modelos y precios</h4>
                            <h4 style={{margin:'5px'}}><FaHandshake size={25} style={{color: colors.prim}}/><br/>Negocia con otros usuarios</h4>
                            <h4 style={{margin:'5px'}}><BsFillShieldFill size={25} style={{color: colors.prim}}/><br/>Protegido de las zapas falsas</h4>
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

                <HighlightsSection icon={<HiFire size={28} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>} title="Lo más popular" description="Estas zapas están que lo arden." call="https://api.flexeo.es/v1/model"></HighlightsSection>
                <HighlightsSection icon={<FiUsers size={28} style={{color: colors.prim, margin:'0px 10px 0px 0px'}}/>} title="Últimas novedades" description="De gente que sigues." call="https://api.flexeo.es/v1/product?num=5"></HighlightsSection>    
                </>
    );
};
export default Home;
