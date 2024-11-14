import react from "react";
import { Button } from "./Button";
import { HeaderStyled } from "../style";

export const Header=(props)=>{
    return<HeaderStyled>
        <img src ={props.logo} alt={"Spoticry"}/>
        <Button text ={'Entrar'}/>
    </HeaderStyled>
}

