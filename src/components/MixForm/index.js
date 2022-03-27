import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Background, Container, Block, Title, ToFill, ToFillBig, Name, ToogleName, ToImage, Subtitle, VerticalDiv, VerticalText } from './Elements';
import { colors } from '../../theme';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { StyledButton } from '../ProductForm/Elements';
import Toogle from '../Toogle';
const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        modelName: Yup.object()
            .required("Escoge un modelo del catálogo"),
        price: Yup.number()
        .max(9999, "Tiene que estar por debajo de 10.000€")
        .required("Introduce el precio de venta"),
        size: Yup.object()
            .required("Escoge una talla"),
        condition: Yup.object()
            .required("Escoge un estado"),
        are_sent: Yup.boolean()
    }),
    mapPropsToValues: props => ({
        modelName: '',
        price: '',
        size: '',
        condition: '',
        are_sent:''
    }),
    handleSubmit: (values, { setSubmitting }) => {
        const payload = {
            ...values,modelName: values.modelName.value, size: values.size.value, condition: values.condition.value
        };
        setTimeout(() => {
            alert(JSON.stringify(payload, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'MyForm',
});

const MyForm = props => {
    const {
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
    } = props;
    return (
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
                    <form onSubmit={handleSubmit}>

                        <Name>Modelo</Name>
                        <MySelect
                            label="Modelo"
                            value={values.modelName}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.modelName}
                            touched={touched.modelName}
                        />

                        <label htmlFor="Precio" style={{ display: 'block' }}>
                            Precio (€)
                        </label>
                        <ToFill
                            id="price"
                            placeholder="¿Cuánto pides?"
                            type="number"
                            value={values.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.price &&
                            touched.price && (
                                <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.price}</div>
                            )}

                        <MySelect
                            label="Talla (EU)"

                            value={values.size}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.size}
                            touched={touched.size}
                        />
                        {errors.size &&
                            touched.size && (
                                <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.size}</div>
                            )}
                        <MySelect
                            label="Estado"
                            value={values.condition}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.condition}
                            touched={touched.condition}
                        />
                        {errors.condition &&
                            touched.condition && (
                                <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.condition}</div>
                            )}
                        {/*<StyledButton
                            label="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                            </StyledButton>*/}
                        <Toogle></Toogle>
                        <StyledButton type="submit" disabled={isSubmitting}>
                            Submit
                        </StyledButton>

                    </form>
                </Container>
            </Background>
        </div>
    );
};

function optionList(listType) {
    if (listType.includes("Talla")) {
        return [
            { value: '35', label: '35' },{ value: '35.5', label: '35.5' },
            { value: '36', label: '36' },{ value: '36.5', label: '36.5' },
            { value: '37', label: '37' },{ value: '37.5', label: '37.5' },
            { value: '38', label: '38' },{ value: '38.5', label: '38.5' },
            { value: '39', label: '39' },{ value: '39.5', label: '39.5' },
            { value: '40', label: '40' },{ value: '40.5', label: '40.5' },
            { value: '41', label: '41' },{ value: '41.5', label: '41.5' },
            { value: '42', label: '42' },{ value: '42.5', label: '42.5' },
            { value: '43', label: '43' },{ value: '43.5', label: '43.5' },
            { value: '44', label: '44' },{ value: '44.5', label: '44.5' },
            { value: '45', label: '45' },{ value: '45.5', label: '45.5' },
            { value: '46', label: '46' },{ value: '46.5', label: '46.5' },{ value: '47', label: '47' }
        ]
    }

    if (listType.includes("Estado")) {
        return [
            { value: 'New with tags', label: 'Nuevas con etiquetas' },
            { value: 'New without tags', label: 'Nuevas sin etiquetas' },
            { value: 'Very good', label: 'Como nuevas' },
            { value: 'Good', label: 'En buen estado' }
        ]
    }

    if (listType.includes("Modelo")) {
        return [
            { value: 'Nike Air One', label: 'Nike Air One' },
            { value: 'Adidas Plus Run', label: 'Adidas Plus Run' },
            { value: 'Asics Right Now Blue', label: 'Asics Right Now Blue' },
            { value: 'Jordan Off White', label: 'Jordan Off White' }
        ]
    }
}

function acceptedValuesSize() {
    let sizes = []
    for (var i = 35; i < 47; i = i + 0.5) {
        sizes.push(i.toString())
    }
    return sizes
}

class MySelect extends React.Component {

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (this.props.label.includes("Estado")) {
            this.props.onChange('condition', value);
        }

        if (this.props.label.includes("Talla")) {
            this.props.onChange('size', value);
        }

        if (this.props.label.includes("Modelo")) {
            this.props.onChange('modelName', value);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        if (this.props.label.includes("estado")) {

            this.props.onBlur('condition', true);
        }
        if (this.props.label.includes("talla")) {

            this.props.onBlur('size', true);
        }

        if (this.props.label.includes("Modelo")) {
            this.props.onBlur('modelName', true);
        }
    };

    render() {
        return (
            <div style={{ margin: '1rem 0' }}>
                <label htmlFor="color">{this.props.label}</label>
                <Select
                    id="color"
                    options={optionList(this.props.label)}
                    //multi={true}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    styles={styles}
                    theme={(theme) => ({
                        ...theme,
                        colors: {
                            ...theme.colors,
                            primary25: colors.smooth_prim,
                            primary: colors.prim
                        },
                    })}
                />

            </div>
        );
    }
}

const styles = {
    container: (provided, state) => ({
        ...provided,
        width: '100%',
    }),
    placeholder: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const fontWeight = '400'

        return { ...provided, opacity, transition, fontWeight };
    },

    option: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const fontWeight = '400'

        return { ...provided, opacity, transition, fontWeight };
    },

    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const fontWeight = '400'

        return { ...provided, opacity, transition, fontWeight };
    }
}

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;