import react from "react";
import { ImageSection } from "../style";
import { SectionStyled } from "../style";
import { TextContainer } from "../style";


export const Section = (props) => {
  return (
    <SectionStyled>
      <TextContainer>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </TextContainer>
      <ImageSection src={props.image} alt={props.descricao} />
    </SectionStyled>
  );
};
