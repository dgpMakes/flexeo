import React from 'react';
import { Container, LeftContainer, Line, SectionName, Grid } from './Elements';
import UserCardShort from '../UserCardShort';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiCalendar } from 'react-icons/fi';
import { colors } from '../../theme';
import ChatPreview from '../ChatPreview';
const ChatsSection = () => {

    const cards = [];
    //const cards = this.state.model.map((i) =>
    //  <ModelCard name = {this.state.model[i].name} price = {this.state.model[i].retail_price}></ModelCard>
    //);
    for (let i = 0; i < 4; i++) {
        cards.push(<ChatPreview/>);
    }


    return (
        <>

            <Container>
                <LeftContainer>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', margin: "10px 0px" }}>Chats</SectionName>
                    {cards}
                </LeftContainer>
                <Line />
                <div>
                    <div>
                    <h4 style={{ color: colors.prim, margin: "40px 0px 15px 19px", fontWeight: "400" }}>Tu chat con</h4>

                    </div>
                    <h4 style={{ color: colors.prim, margin: "40px 0px 15px 19px", fontWeight: "500",textTransform: 'uppercase', fontStyle: 'italic', fontSize:"22px"}}>Eva Letal</h4>

                </div>
            </Container>
        </>
    );
};
export default ChatsSection;
