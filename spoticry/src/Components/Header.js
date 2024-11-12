import react from "react";
import { Button } from "./Button";

export function Header(props){
    return<>
        <img src ={props.img} alt={props.descricao}/>
        <Button text ={'Login'}></Button>
    </>
}