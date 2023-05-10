import React from 'react';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Background, Container, Block, Title, ToFill, ToDescript, Name, ToogleName, ToImage, Subtitle, VerticalDiv, VerticalText } from './Elements';
import { colors } from '../../theme';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Buffer } from 'buffer';

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        model_id: Yup.object()
            .required("Escoge un modelo del catálogo"),
        price: Yup.number()
            .max(9999, "Tiene que estar por debajo de 10.000€")
            .required("Introduce el precio de venta"),
        size: Yup.object()
            .required("Escoge una talla"),
        condition: Yup.object()
            .required("Escoge un estado"),
        description: Yup.string(),
        are_sent: Yup.boolean(),
        negotiable: Yup.boolean()
    }),
    mapPropsToValues: props => ({
        model_id: '',
        price: '',
        size: '',
        condition: '',
        are_sent: false,
        description: '',
        image: '',
        user_id: '727d16cf-e99e-46fc-8323-062fd421adb1',
        //image_url: ''
    }),
    handleSubmit: (values, { setSubmitting }) => {
        const payload = {
            ...values, model_id: values.model_id.value, size: values.size.value, condition: values.condition.value
        };

        var cookieMatch = document.cookie.match(new RegExp('(^| )' + 'auth' + '=([^;]+)'));
        if (cookieMatch) cookieMatch = cookieMatch[2];
        console.log(cookieMatch + "3")
        setTimeout(() => {
            let res = fetch("https://flexeo-api.dgpmakes.com/v1/product", {
                method: "POST",
                body: (JSON.stringify(payload, null, 2)),
            });
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

    /*function handleFileChange (e){
        const file = e.target.file[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            this.name: ;
        }

    }*/


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

                        <MySelect
                            label="Modelo"
                            value={values.model_id}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.model_id}
                            touched={touched.model_id}
                        />
                        {errors.model_id &&
                            touched.model_id && (
                                <div style={{ color: 'red', marginTop: '.5rem' }}>{errors.model_id}</div>
                            )}
                        <label htmlFor="Precio" style={{ display: 'block' }}>
                            Precio (€)
                        </label>
                        <ToFill style={{ width: "310px" }}
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

                        <label htmlFor="Descripción" style={{ display: 'block' }}>
                            Descripción
                        </label>
                        <ToDescript style={{ width: "310px", margin: "0px 0px 10px 0px" }}
                            id="description"
                            placeholder="Aquí puedes contar un poco tu historia con estas zapas... "
                            type="string"
                            value={values.string}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        <input id="image"
                            type="file"
                            value={values.string}
                            style={{margin:"0px 0px 15px 0px"}}
                            onChange={(event) => {
                                let reader = new FileReader();
                                reader.onload = function(a) {
                                    let res = a.target.result;
                                    setFieldValue("image", Buffer.from(res).toString("base64"));
                                }
                                reader.readAsArrayBuffer(event.target.files[0])
                                
                                
                            }}
                            onBlur={handleBlur} />


                        <label htmlFor="Envío" style={{ display: 'block' }}>Envío</label>
                        <div style={{ display: 'flex', margin: "0px 0px 10px 0px" }}>
                            <Field type="checkbox" name="are_sent" style={{ margin: "3px 7px 0px 0px" }} />
                            <Name>Hago envíos</Name>
                        </div>

                        <label htmlFor="Negociar" style={{ display: 'block' }}>¿Negociable?</label>
                        <div style={{ display: 'flex', margin: "0px 0px 10px 0px" }}>
                            <Field type="checkbox" name="negotiable" style={{ margin: "3px 7px 0px 0px" }} />
                            <Name>Acepto ofertas</Name>
                        </div>


                        <button type="submit" disabled={isSubmitting} style={{textAlign:"center", 
                        padding:"3px", fontSize:"16px", fontWeight:500, height:"38px", width:"100px",color:colors.prim, backgroundColor:colors.smooth_prim
                        ,borderStyle:"none", borderRadius:"5px"}}>
                            Subir
                        </button>
                    </form>

                </Container>
            </Background>
        </div>
    );
};

function optionList(listType) {
    if (listType.includes("Talla")) {
        return [
            { value: '35', label: '35' }, { value: '35.5', label: '35.5' },
            { value: '36', label: '36' }, { value: '36.5', label: '36.5' },
            { value: '37', label: '37' }, { value: '37.5', label: '37.5' },
            { value: '38', label: '38' }, { value: '38.5', label: '38.5' },
            { value: '39', label: '39' }, { value: '39.5', label: '39.5' },
            { value: '40', label: '40' }, { value: '40.5', label: '40.5' },
            { value: '41', label: '41' }, { value: '41.5', label: '41.5' },
            { value: '42', label: '42' }, { value: '42.5', label: '42.5' },
            { value: '43', label: '43' }, { value: '43.5', label: '43.5' },
            { value: '44', label: '44' }, { value: '44.5', label: '44.5' },
            { value: '45', label: '45' }, { value: '45.5', label: '45.5' },
            { value: '46', label: '46' }, { value: '46.5', label: '46.5' }, { value: '47', label: '47' }
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
            { value: 'b21befbf-e651-411a-995a-484827b6eb23', label: 'Tarther Blast Wasabi Thunder Blue' },
            { value: 'a3223f2d-362c-43e9-a581-d725ee39e632', label: 'Nike White Balance Extreme And Unlimited Super Edition' },
            { value: '440e2d6b-8876-402b-96aa-32a921e626af', label: 'Adidas Smart Relief for Training' },
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
            this.props.onChange('model_id', value);
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
            this.props.onBlur('model_id', true);
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