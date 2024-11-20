import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
import { FooterStyled, FooterTop, FooterBottom, FooterLogo } from "../style";
import spoticryIcon from "../Assets/Icons/spoticryIcon.png"

export const Footer = (props) => {
  return (
    <FooterStyled>
      <FooterTop>
        <FooterLogo src={spoticryIcon} alt={"Spoticry"} />
        <FooterLinks />
        <SocialLinks />
      </FooterTop>
      <FooterBottom>
        <p>© {new Date().getFullYear()} Spoticry. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterStyled>
  );
};
