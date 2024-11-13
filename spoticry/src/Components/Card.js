import react from "react";
import { CardImage, CardText, CardContainer} from "../style";

export const Card =(props)=>{
    return<CardContainer>
        <CardImage src={props.img} alt={props.descricao}/>
        <CardText>{props.text}</CardText>
    </CardContainer>
}

