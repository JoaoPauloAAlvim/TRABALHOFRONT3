import react from "react";
import { Button } from "./Button";
import { HeaderLogo, HeaderStyled } from "../style";
import spoticryIcon from "../Assets/Icons/spoticryIcon.png"
import { useCoordinator } from "../hooks/useCoordinator";

export const Header=()=>{
    const {goToLogin}= useCoordinator()
    return<HeaderStyled>
        <HeaderLogo src ={spoticryIcon} alt={"Spoticry"}/>
        <Button text ={'Entrar'} onClick={goToLogin}/>
    </HeaderStyled>
}

