import React from "react";
import { CardContainer, CardImage, CardText } from "../style";

export const Card = ({ img, text, descricao }) => {
  return (
    <CardContainer>
      {img && <CardImage src={img} alt={text} />}
      <h3>{text}</h3>
      <CardText>{descricao}</CardText>
    </CardContainer>
  );
};
