import React from "react";
import { Card } from "./Card";
import { NavStyled } from "../style";

import assinantesIcon from "../Assets/Icons/assinantes.png";
import playlistIcon from "../Assets/Icons/playlist.png"
import musicasIcon from "../Assets/Icons/musica.png"


export const Nav = () => {
  return (
    <NavStyled>
      <Card 
        img={assinantesIcon} 
        text="Mais de 10.000 assinantes" 
        descricao="A nossa plataforma conta com uma base sólida de assinantes satisfeitos." 
      />
      <Card 
        img={playlistIcon} 
        text="Mais de 5.000 playlists" 
        descricao="Milhares de playlists personalizadas para todos os gostos musicais." 
      />
      <Card 
        img={musicasIcon} 
        text="Mais de 1.000.000 músicas" 
        descricao="Explore uma vasta biblioteca de músicas dos mais variados gêneros." 
      />
    </NavStyled>
  );
};
