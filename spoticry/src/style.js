import styled from "styled-components";
import colors from "./Constants/colors";

export const ButtonStyled = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 20px;
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

    @media (max-width: 600px) {
        width: 80px;
        height: 40px;
        font-size: 14px;
    }
`;

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
    box-sizing: border-box;
    background-color: ${colors.charcoal};
    color: ${colors.white};
    height: 100px;

    @media (max-width: 600px) {
        padding: 0 15px;
        height: 80px;
    }
`;

export const HeaderLogo = styled.img`
    width: 100px;
    height: auto;
    margin-right: 20px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const SectionStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    height: 400px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        padding: 10px;
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    text-align: left;
    white-space: pre-line;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ImageSection = styled.img`
    max-width: 50%;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
        max-width: 80%;
        margin-top: 10px;
    }
`;

export const NavStyled = styled.div`
    background-color: ${colors.slateGray};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 50px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 20px;
    }
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

    @media (max-width: 600px) {
        width: 150px;
        height: 150px;
        margin: 5px;
    }
`;

export const CardImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 60px;
        height: 60px;
    }
`;

export const CardText = styled.p`
    font-size: 16px;
    color: ${colors.charcoal};

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.charcoal};
    color: ${colors.white};
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
`;

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    width: 100%;
    font-size: 14px;
    color: ${colors.white};
    text-align: center;
`;

export const FooterLogo = styled.img`
    width: 100px;
    height: auto;
    margin-right: 20px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

export const FooterLinksStyled = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterLink = styled.a`
    color: ${colors.white};
    text-decoration: none;
    margin: 0 10px;
    
    &:hover {
        text-decoration: underline;
    }
`;

export const SocialLinksStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;

    @media (max-width: 600px) {
        justify-content: center;
    }
`;

export const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    transition: transform 0.3s;
    
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 600px) {
        width: 20px;
        height: 20px;
    }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.charcoal};
  color: ${colors.white};
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${colors.white};
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  color: ${colors.white};
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

export const InputField = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.slateGray};
  border-radius: 4px;
  background-color: ${colors.charcoal};
  color: ${colors.white};
  
  ::placeholder {
    color: ${colors.ivory};
  }

  &:focus {
    outline: 2px solid ${colors.navyBlue};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.charcoal};
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.navyBlue};
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.white}; 
`;