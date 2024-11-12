import react from "react";
import { Button } from "./Button";

export function Header(props){
    return<>
        <img src ={props.logo} alt={props.descricao}/>
        <Button text ={'Login'}></Button>
    </>
}