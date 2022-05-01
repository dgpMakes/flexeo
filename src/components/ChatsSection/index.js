import React from 'react';
import { UserImage, Container, LeftContainer, Line, SectionName, ActionButton} from './Elements';
import { colors } from '../../theme';
import ChatPreview from '../ChatPreview';
import userphoto from '../../images/product.jpg';
import { BsThreeDots } from 'react-icons/bs';
const ChatsSection = () => {

    const cards = [];
    for (let i = 0; i < 4; i++) {
        cards.push(<ChatPreview />);
    }

    return (
        <>

            <Container>
                <LeftContainer>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', margin: "10px 0px 30px 3px" }}>Chats</SectionName>
                    {cards}
                </LeftContainer>
                <Line />
                <div>
                    <div style={{ display: "flex", margin: "40px 0px 0px 30px", width: "400px" }}>
                        <UserImage src={userphoto} alt='user-profile'></UserImage>
                        <div style={{ margin: "18px 0px 15px 25px" }}>
                            <h4 style={{ color: colors.prim, fontWeight: "500", textTransform: 'uppercase', fontStyle: 'italic', fontSize: "22px" }}>Eva Letal</h4>
                            <p style={{ color: colors.like_count_grey }}>Conectado hace menos de un día</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <ActionButton>Ver perfil</ActionButton>
                            <ActionButton style={{ color: colors.like_count_grey, margin: "0px 5px" }}><BsThreeDots size="24" /></ActionButton>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default ChatsSection;
