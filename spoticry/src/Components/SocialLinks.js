import react from "react";
import facebookIcon from "../Assets/Icons/facebookIcon.png";
import twitterIcon from "../Assets/Icons/twitterIcon.png";
import instagramIcon from "../Assets/Icons/instagramIcon.png";
import { SocialIcon, SocialLinksStyled } from "../style";

export const SocialLinks = () => {
  return (
    <SocialLinksStyled>
      <a href="https://facebook.com">
        <SocialIcon src={facebookIcon} alt={"Facebook"}></SocialIcon>
      </a>
      <a href="https://twitter.com">
        <SocialIcon src={twitterIcon} alt={"Twitter"}></SocialIcon>
      </a>
      <a href="https://instagram.com">
        <SocialIcon src={instagramIcon} alt={"Instagram"}></SocialIcon>
      </a>
    </SocialLinksStyled>
  );
};
