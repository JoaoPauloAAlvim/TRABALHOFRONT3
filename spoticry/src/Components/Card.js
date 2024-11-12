import react from "react";

export function Card (props){
    return<>
        <img src={props.img} alt={'props.descricao'}></img>
        <p>{props.text}</p>
    </>
}