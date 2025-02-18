import React, { Component } from "react";
import Switch from "react-switch";
import { colors } from "../../theme";
import Select from 'react-select'


const styles = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
  placeholder: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const fontWeight = '400'

    return { ...provided, opacity, transition, fontWeight};
  },

  option: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const fontWeight = '400'

    return { ...provided, opacity, transition, fontWeight};
  },

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const fontWeight = '400'

    return { ...provided, opacity, transition, fontWeight};
  }
}

const options = [
  { value: '35', label: '35' },
  { value: '36', label: '36' },
  { value: '37', label: '37' },
  { value: '38', label: '38' },
  { value: '39', label: '39' },
  { value: '40', label: '40' },
  { value: '41', label: '41' },
  { value: '42', label: '42' },
  { value: '43', label: '43' },
  { value: '44', label: '44' },
  { value: '45', label: '45' },
  { value: '46', label: '46' }
]

const states = [
  { value: 'Sin estrenar', label: 'Sin estrenar' },
  { value: 'Nuevas', label: 'Nuevas' },
  { value: 'Poco Usadas', label: 'Poco Usadas' },
  { value: 'Usadas', label: 'Usadas' }
]

function optionList(listType) {
  if(listType.name.includes("Talla")){
    return [
      { value: '35', label: '35' },
      { value: '36', label: '36' },
      { value: '37', label: '37' },
      { value: '38', label: '38' },
      { value: '39', label: '39' },
      { value: '40', label: '40' },
      { value: '41', label: '41' },
      { value: '42', label: '42' },
      { value: '43', label: '43' },
      { value: '44', label: '44' },
      { value: '45', label: '45' },
      { value: '46', label: '46' }
    ]
  }
  
  if(listType.name.includes("estado")){
    return [
      { value: 'Sin estrenar', label: 'Sin estrenar' },
      { value: 'Nuevas', label: 'Nuevas' },
      { value: 'Poco Usadas', label: 'Poco Usadas' },
      { value: 'Usadas', label: 'Usadas' }
    ]
  }
}

const ToSelect = (props) => (
  
  <Select options={optionList(props)} styles={styles} placeholder={props.name} theme={(theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: colors.smooth_prim,
      primary: colors.prim
    },
  })}/>
)

export default ToSelect;