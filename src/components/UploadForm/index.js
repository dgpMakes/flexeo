import React from 'react';
import {Background, StyledButton,Container, Block, Title, ToFill, ToFillBig, Name,ToogleName, ToImage, Subtitle, VerticalDiv, VerticalText} from './Elements';
import { colors } from '../../theme';
import Toogle from '../Toogle';
import ToSelect from '../ToSelect';
import { IoMdAddCircleOutline } from 'react-icons/io';
const UploadForm = () => {
    return (
        <>
            {/* HEADER*/}
            <div style={{display:'flex'}}>
            <VerticalDiv>
                <VerticalText style={{margin:'63px 0px 0px 0px', fontSize:'14px'}}>Datos Básicos</VerticalText>
                <VerticalText style={{margin:'259px 0px 0px 0px',fontSize:'14px'}}>Fotos Chulas</VerticalText>
            </VerticalDiv>
            <Background>
                <Container>
                    <Block>
                    <IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", color: colors.prim}} />
                        <Title style={{lineHeight:'16px'}}>SUBIR TUS ZAPAS</Title>
                        <Subtitle>UPLOAD SNEAKERS</Subtitle>
                    </Block>
                    <Block>
                        <Name>Modelo</Name>
                        <ToFill type="text" placeholder="Busca tu modelo aquí..."></ToFill>
                    </Block>
                    <Block style={{display:'flex'}}>
                        <div>
                            <Name>Precio (€)</Name>
                            <ToFill type="text" placeholder="¿Cuánto pides?" style={{width: '140px', margin:'0px 20px 0px 0px'}}></ToFill>
                        </div>
                        <div style={{width: '120px'}}>
                            <Name>Talla (EU)</Name>
                            <ToSelect type="text" name="Talla" ></ToSelect>
                        </div>
                    </Block>
                    <Block style={{width: '280px'}}>
                        <Name>Estado</Name>
                        <ToSelect name="Escoge un estado..."></ToSelect>
                    </Block>
                    <Block>
                        <Name>Descripción</Name>
                        <ToFillBig placeholder="Cuenta un poco los detalles de estas zapas..." style={{height:'50px'}}></ToFillBig>
                    </Block>
                    <div style={{display:'flex'}}>
                        <Block style={{margin:'0px 10px 0px 0px'}}>
                           <Name>Envíos</Name>
                           <div style={{display:'flex'}}>
                                <ToogleName>Hago envíos</ToogleName>
                                <Toogle></Toogle>
                            </div>
                        </Block>
                        <Block>
                            <Name>¿Negociable?</Name>
                            <div style={{display:'flex'}}>
                                <ToogleName>Acepto ofertas</ToogleName>
                                <Toogle></Toogle>
                            </div>
                        </Block>
                    </div>
                    <Block>
                        <Name>Fotos</Name>
                        <ToImage></ToImage>
                    </Block>

                    
                </Container>
            </Background>
            </div>
        </>
    );
};
export default UploadForm;
