import React from 'react';
import {Container, LeftContainer, Line, SectionName, Grid} from './Elements';
import UserCardShort from '../UserCardShort';
import {FiUsers} from 'react-icons/fi';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {FiCalendar} from 'react-icons/fi';
import { colors } from '../../theme';
const SocialSection = () => {

    const cards = [];
    //const cards = this.state.model.map((i) =>
    //  <ModelCard name = {this.state.model[i].name} price = {this.state.model[i].retail_price}></ModelCard>
    //);
    for (let i = 0; i < 7; i++) {
        cards.push(<UserCardShort key={"usercard." + i} name="Eva Letal" username="@E_Valetal"></UserCardShort>);
    }


    return (
        <>

            <Container>
                <LeftContainer>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', margin:"10px 0px" }}>Social</SectionName>
                    <div style={{display:"flex", color: colors.prim}}><FiUsers/> <h5>Gente</h5></div>
                    <div style={{display:"flex", color: colors.prim}}><p>· Siguiendo</p></div>
                    <div style={{display:"flex", color: colors.like_count_grey}}><p>· Seguidores</p></div>
                    <div style={{display:"flex", color: colors.like_count_grey}}><HiOutlineUserGroup/><p>Grupos</p></div>
                    <div style={{display:"flex",color: colors.like_count_grey}}><FiCalendar/> <p>Eventos</p></div>
                </LeftContainer>
                <Line/>
                <div>
                    <h4 style={{color: colors.prim, margin:"40px 0px 15px 19px", fontWeight:"500"}}>Siguiendo a 7 personas</h4>
                    <Grid> {/*grid*/}
                        {cards}
                    </Grid>
                </div>
            </Container>
        </>
    );
};
export default SocialSection;
