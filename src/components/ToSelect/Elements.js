import styled from 'styled-components';
import { colors } from '../../theme';

export const ToSelect = styled.input`
    box-shadow: inset 0px 0px 0px 2px ${colors.searchbar};
    height: 30px;
    padding: 10px;
    all: none;
    font-weight: 400;
    width: max(280px,30%);
    padding: 0px 10px;
    border-radius: 5px;
    border: none;

    :focus{
        outline: none;
        box-shadow: inset 0px 0px 0px 2px ${colors.prim};
    }
`