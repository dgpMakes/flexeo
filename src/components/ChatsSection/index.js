import React from 'react';
import { UserImage, Container, LeftContainer, Line, SectionName, ActionButton} from './Elements';
import { colors } from '../../theme';
import ChatPreview from '../ChatPreview';
import userphoto from '../../images/user7.jpg';
import { BsThreeDots } from 'react-icons/bs';
import chat from '../../images/chat.png';
const ChatsSection = () => {



    const cards = [];
    cards.push(<ChatPreview num={0} username="Marta_par4" date="05/06/2022" message="Sii, allí te veo"/>);
    cards.push(<ChatPreview num={1} username="Suprja" date="03/06/2022" message="¡Cómo molas, tío!"/>);
    cards.push(<ChatPreview num={5} username="Sergei99" date="03/06/2022" message="Anda, no lo sabía."/>);
    cards.push(<ChatPreview num={4} username="Sr_Mar" date="02/06/2022" message="Nos conocimos ayer."/>);

    return (
        <>

            <Container>
                <LeftContainer>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', margin: "10px 0px 30px 3px" }}>Chats</SectionName>
                    {cards}
                </LeftContainer>
                <Line />
                <div style={{ margin: "40px 0px 0px 30px", alignItems:"center"}}>
                    <div style={{ display: "flex", width: "450px",margin: "0px 0px 20px 4px" }}>
                        <UserImage src={userphoto} alt='user-profile'></UserImage>
                        <div style={{ margin: "18px 35px 15px 25px" }}>
                            <h4 style={{ color: colors.prim, fontWeight: "500", textTransform: 'uppercase', fontStyle: 'italic', fontSize: "22px" }}>Marta Campos</h4>
                            <p style={{ color: colors.like_count_grey }}>Conectado hace 1 día</p>
                        </div>
                        <div style={{ display: "flex",margin:"28px 0px 0px 0px"}}>
                            <ActionButton style={{width:"70px", height:"30px"}}>Ver perfil</ActionButton>
                            <ActionButton style={{width:"40px", height:"30px",color: colors.like_count_grey, margin:"0px 0px 0px 3px"}}><BsThreeDots size="24" /></ActionButton>
                        </div>
                    </div>
                    <img src={chat} style={{width:"550px"}}></img>
                </div>
            </Container>
        </>
    );
};
export default ChatsSection;
