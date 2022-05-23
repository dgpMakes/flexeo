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
        cards.push(<UserCardShort key={"usercard." + 0}  num={0} name="Marta Campos" username="@Marta_par4"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 1}  num={1} name="Jaime Brezo" username="@Suprja"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 2}  num={2} name="Luis Grande" username="@Luis98"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 3}  num={3} name="Álex Ruiz" username="@Alexio12"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 4}  num={4} name="Sara Mar" username="@Sr_Mar"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 5}  num={5} name="Sergio Manzano" username="@Sergei99"></UserCardShort>);
        cards.push(<UserCardShort key={"usercard." + 6}  num={6} name="Patri Serrano" username="@PatriCIA"></UserCardShort>);



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
