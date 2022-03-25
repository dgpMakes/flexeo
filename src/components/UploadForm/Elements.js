import styled from 'styled-components';
import { colors } from '../../theme';


export const Background = styled.div`
    margin: 50px 0px 0px 0px;
    width: max(330px,30%);
`

export const Container = styled.div`
    justify-items: center;
    border-radius: 10px;
    padding: 30px 20px 30px 20px;
`

export const Block = styled.div`
 margin: 0px 0px 8px 0px;
`

export const Title = styled.h4`
    color: ${colors.prim};
    font-size: 22px;
    font-weight: 700;
    font-style: italic;
`

export const Subtitle = styled.h4`
    color: ${colors.prim};
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
`

export const ToFill = styled.input`
    box-shadow: inset 0px 0px 0px 2px ${colors.searchbar};
    height: 30px;
    padding: 10px;
    font-weight: 400;
    width: max(280px,30%);
    padding: 0px 10px;
    border-radius: 5px;
    border: none;
    
    :focus{
        outline: none;
        box-shadow: inset 0px 0px 0px 2px ${colors.prim};     /* oranges! yey */
    }
`

export const Name = styled.h5`
    margin: 0px 0px 3px 0px;
    font-size: 16px;
`

export const ToogleName = styled.h5`
    margin: 2px 5px 0px 0px;
    font-size: 14px;
`

/*export const ToSelect = styled.input`
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
`*/


export const ToImage = styled.div`

`