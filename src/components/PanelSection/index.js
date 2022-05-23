import React from 'react';
import { UserImage, Container, LeftContainer, Line, SectionName, ActionButton, Option } from './Elements';
import { colors } from '../../theme';
import ChatPreview from '../ChatPreview';
import me from '../../images/me.png';
import { BsThreeDots } from 'react-icons/bs';
import { OptionText } from './Elements';
import {BreadCrumbs} from '../ModelInformation/Elements';
import {AiFillHeart} from 'react-icons/ai';
import {MdSettings} from 'react-icons/md';
import {IoMdHelpCircle} from 'react-icons/io';
import {GiConverseShoe} from 'react-icons/gi';
import {IoPersonAddSharp,IoInformationCircleSharp} from 'react-icons/io5';
import {RiFilePaper2Fill} from 'react-icons/ri';
import {HiEmojiHappy} from 'react-icons/hi';

const PanelSection = () => {

    return (
        <>

            <Container style={{ padding: "60px 0px 0px 0px" }}>
                <LeftContainer style={{padding:"0px 70px 0px 70px"}}>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', margin: "10px 0px 30px 3px" }}>Panel</SectionName>

                    <img src={me} style={{width:"120px", borderRadius:"5px"}}/>
                    <SectionName style={{ textTransform: 'uppercase', fontStyle: 'italic', fontSize:"16px", padding:"6px 0px 6px 0px" }}>Diego García</SectionName>
                    <h5 style={{padding:"0px 0px 6px 0px", color:colors.body}}>@diegogarpe</h5>
                    <div style={{ display: "flex", justifyContent: "center",padding:"6px 0px 0px 0px" }}>
                        <ActionButton style={{padding:"5px" }}>Ver perfil</ActionButton>
                        <ActionButton style={{ color: colors.like_count_grey, margin: "0px 5px", padding:"5px" }}><BsThreeDots size="24" /></ActionButton>
                    </div>
                </LeftContainer>
                <Line />
                <div style={{ margin: "0px 0px 0px 30px" }}>
                    <BreadCrumbs to={'/'} >Inicio / Panel</BreadCrumbs>

                    <div style={{ margin: "20px 0px 0px 0px" }}>
                        <Option> <OptionText><AiFillHeart size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Mis likes</OptionText></Option>
                        <Option> <OptionText><MdSettings size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Ajustes</OptionText></Option>
                        <Option> <OptionText><IoMdHelpCircle size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Ayuda</OptionText></Option>
                        <Option> <OptionText><GiConverseShoe size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Mis productos</OptionText></Option>
                        <Option> <OptionText><IoPersonAddSharp size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Invitar amigos</OptionText></Option>
                        <Option> <OptionText><IoInformationCircleSharp size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Sobre Flexeo</OptionText></Option>
                        <Option> <OptionText><RiFilePaper2Fill size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Información legal</OptionText></Option>
                        <Option> <OptionText><HiEmojiHappy size="20" style={{verticalAlign:"text-top", margin:"0px 10px 0px 0px"}}/>Envía tus comentarios</OptionText></Option>

                    </div>
                </div>
            </Container>
        </>
    );
};
export default PanelSection;
