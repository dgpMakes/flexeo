import React from 'react';
import { SuperContainer, Front, CardLImage, FrontHoldImage, CardLText} from './PagesElements';
import { FaSearch,FaHandshake} from 'react-icons/fa';
import {BsFillShieldFill} from 'react-icons/bs';

const Home = () => {
    return (

            <SuperContainer>
                <Front>
                    <FrontHoldImage>
                        <CardLImage src='https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg'></CardLImage>
                    </FrontHoldImage>
                    <CardLText>
                        <h1>Somos de edición limitada.</h1>
                        <h3>Tu portal de compraventa de zapatillas exclusivas</h3>
                        <h3><FaSearch/>Compara modelos y precios</h3>
                        <h3><FaHandshake/>Negocia con otros usuarios</h3>
                        <h3><BsFillShieldFill/>Protegido de las zapas falsas</h3>

                    </CardLText> 
                    
                </Front>
        
            </SuperContainer>
    );
};
export default Home;
