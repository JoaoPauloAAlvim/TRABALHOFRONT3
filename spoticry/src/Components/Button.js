import react from "react";
import { ButtonStyled } from "../style";

 export const Button =(props)=>{
    return<ButtonStyled onClick={props.onClick}>
        {props.text}
    </ButtonStyled>
}

