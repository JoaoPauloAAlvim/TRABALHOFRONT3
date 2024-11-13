import react from "react";
import { ButtonStyled } from "../style";

 export const Button =(props)=>{
    return<ButtonStyled>
        {props.text}
    </ButtonStyled>
}

