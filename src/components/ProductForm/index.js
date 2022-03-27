import React from 'react';
import { Background, Container, Block, Title, ToFill, ToFillBig, Name, ToogleName, ToImage, Subtitle, VerticalDiv, VerticalText } from './Elements';
import { StyledLabel, StyledSelect, StyledErrorMessage, StyledButton } from './Elements.js';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../theme';
import { IoMdAddCircleOutline } from 'react-icons/io';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <Name htmlFor={props.id || props.name}>{label}</Name>
            <ToFill className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MySelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <Name htmlFor={props.id || props.name}>{label}</Name>
            <StyledSelect {...field} {...props} />
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    );
}

function fillValuesSize() {
    let sizes = []

    sizes.push(<option value="invalid" style={{fontWeight:"400"}}>Escoge una talla</option>)
    for (var i = 35; i <= 47; i = i + 0.5) {
        sizes.push(<option value={i} style={{fontWeight:"400"}}>{i}</option>)
    }
    return sizes
}

function acceptedValuesSize() {
    let sizes = []
    for (var i = 35; i < 47; i = i + 0.5) {
        sizes.push(i.toString())
    }
    return sizes
}
// And now we can use these
const ProductForm = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <VerticalDiv>
                    <VerticalText style={{ margin: '63px 0px 0px 0px', fontSize: '14px' }}>Datos Básicos</VerticalText>
                    <VerticalText style={{ margin: '259px 0px 0px 0px', fontSize: '14px' }}>Fotos Chulas</VerticalText>
                </VerticalDiv>
                <Background>
                    <Container>
                        <Block>
                            <IoMdAddCircleOutline size={20} style={{ margin: "0px 3px 0px 0px", color: colors.prim }} />
                            <Title style={{ lineHeight: '16px' }}>SUBIR TUS ZAPAS</Title>
                            <Subtitle>UPLOAD SNEAKERS</Subtitle>
                        </Block>
                        <Formik
                            initialValues={{
                                modelName: "",
                                price: "",
                                size: "",
                                condition: ""
                            }}
                            validationSchema={Yup.object({
                                modelName: Yup.string()
                                    .required("Escoge un modelo del catálogo"),
                                price: Yup.number()
                                    .max(9999, "Tiene que estar por debajo de 10.000€")
                                    .required("Introduce el precio de venta"),
                                size: Yup.string()
                                    // specify the set of valid values for job type
                                    // @see http://bit.ly/yup-mixed-oneOf
                                    .oneOf(
                                        acceptedValuesSize())
                                    .required("Escoge una talla"),
                                condition: Yup.string()
                                    // specify the set of valid values for job type
                                    // @see http://bit.ly/yup-mixed-oneOf
                                    .oneOf(
                                        ["New with tags", "New without tags","Very good", "Good"])
                                    .required("Escoge un estado"),
                            })}
                            onSubmit={async (values, { setSubmitting }) => {
                                await new Promise(r => setTimeout(r, 500));
                                console.log(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }}
                        >
                            <Form>
                                <MyTextInput
                                    label="Modelo"
                                    name="modelName"
                                    type="text"
                                    placeholder="Busca tu modelo aquí..."
                                />
                                <MyTextInput
                                    label="Precio (€)"
                                    name="price"
                                    type="text"
                                    placeholder="¿Cuánto pides?"
                                />
                                <MySelect label="Talla" name="size" >
                                    {fillValuesSize()}
                                </MySelect>
                                <MySelect label="Estado" name="condition" >
                                    <option value="invalid" style={{fontWeight:"400"}}>Escoge un estado </option>
                                    <option value="New with tags" style={{fontWeight:"400"}}>Nuevas con etiquetas</option>
                                    <option value="New without tags"style={{fontWeight:"400"}}>Nuevas sin etiquetas</option>
                                    <option value="Very good"style={{fontWeight:"400"}}>Como nuevas</option>
                                    <option value="Good"style={{fontWeight:"400"}}>En buen estado</option>
                                </MySelect>



                                <StyledButton type="submit">Submit</StyledButton>
                            </Form>
                        </Formik>
                    </Container>
                </Background>
            </div>
        </>
    );
};

export default ProductForm;