import styled from "styled-components";
import colors from "./Constants/colors"

export const ButtonStyled= styled.button`
    border-radius: 50px;
    padding: 10px 20px; 
    text-align: center; 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
    color: ${colors.charcoal};
    border: none;
    cursor: pointer;
    
    &:hover {
        background-color: ${colors.slateGray};
    }
`

export const HeaderStyled= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px; 
    width: 100%;
    box-sizing: border-box; 
    background-color: ${colors.charcoal};
    color: ${colors.white};
    height:70px;
`

export const SectionStyled = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 20px;
    height:500px;
`;

export const TextContainer = styled.div`
    flex: 1;
    text-align: left;
    white-space: pre-line;
`;

export const ImageSection = styled.img`
    max-width: 50%;
    height: auto;
    object-fit: cover;
`;

export const NavStyled = styled.div`
    background-color: ${colors.charcoal};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 20px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 180px;
    text-align: center;
    margin: 10px;
`;
export const CardImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 10px;
`;

export const CardText = styled.p`
    font-size: 16px;
    color: ${colors.charcoal};
`;

export const SocialLinksStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
    filter: hue-rotate(0deg) brightness(0.8) saturate(1.5);
    transition: filter 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2); /* Efeito de zoom no hover */
    }
`;

export const FooterLinksStyled = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;

export const FooterLink = styled.a`
    color: ${colors.charcoal};
    text-decoration: none;
    margin: 0 10px;
    &:hover {
        text-decoration: underline;
    }
`;

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${colors.white};
    color: ${colors.white};
`;

export const FooterLogo = styled.img`
    width: 100px;
    height: auto;
`;