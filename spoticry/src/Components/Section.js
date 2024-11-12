import react from "react";

export function Section(props){
    return <>
        <img src={props.img} alt={props.descricao}/>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </>
}