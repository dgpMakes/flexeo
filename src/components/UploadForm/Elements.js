import styled from 'styled-components';
import { colors } from '../../theme';


export const VerticalDiv = styled.div`
    margin: 50px 20px 0px 0px;
    width: 12px;

    @media screen and (max-width: 996px) {
        display: none;
  }
`

export const VerticalText = styled.h4`
    text-transform: uppercase;
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    color: ${colors.prim};
    font-weight: 500;
`

export const Background = styled.div`
    margin: 5px 0px 0px 0px;
    width: max(350px,30%);
`

export const Container = styled.div`
    justify-items: center;
    border-radius: 10px;
    padding: 30px 20px 30px 20px;
`

export const Block = styled.div`
 margin: 0px 0px 13px 0px;
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
    box-shadow: inset 0px 0px 0px 1px ${colors.searchbar};
    height: 38px;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    width: max(280px,30%);
    padding: 0px 10px;
    border-radius: 5px;
    border: none;
    
    :focus{
        outline: none;
        box-shadow: inset 0px 0px 0px 2px ${colors.prim};     /* oranges! yey */
    }
`

export const ToFillBig = styled.textarea`
    box-shadow: inset 0px 0px 0px 1px ${colors.searchbar};
    height: 38px;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
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
    font-size: 16px;
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
export const StyledButton = styled.button`

`