import react from "react";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
import { FooterStyled, FooterLogo } from "../style";

export const Footer = (props) => {
  return (
    <FooterStyled>
      <FooterLogo src={props.logo} alt={"Spoticry"} />
      <FooterLinks />
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} Spoticry. Todos os direitos reservados.
      </p>
    </FooterStyled>
  );
};
