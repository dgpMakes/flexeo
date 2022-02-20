import React from 'react';
import { SuperContainer, Front, CardLImage, FrontHoldImage, CardLText, IconSet, FrontButton} from './PagesElements';
import { FaSearch,FaHandshake} from 'react-icons/fa';
import {BsFillShieldFill} from 'react-icons/bs';
import { colors
 } from '../theme';
const Home = () => {
    return (

            <SuperContainer>
                <Front>
                    <FrontHoldImage>
                        <CardLImage src='https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg'></CardLImage>
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
        

            </SuperContainer>
    );
};
export default Home;
