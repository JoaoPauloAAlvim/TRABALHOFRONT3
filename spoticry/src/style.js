import styled from "styled-components";
import colors from "./Constants/colors";
import { createGlobalStyle } from "styled-components";

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
  opacity: 0.8;
  filter: grayscale(50%);

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 10px;
  }

  border: 2px solid #f5f5f5;
  border-radius: 10px;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
  }
`;

export const NavStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
  margin: auto;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 5px solid #f5f5f5;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 5px;
  text-align: center;

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const LoadingGif = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  z-index: 10;
`;

export const SearchContainer = styled.div`
  background-color: ${colors.charcoal};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${colors.white};

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 2px solid ${colors.slateGray};
  border-radius: 4px;
  width: 300px;
  margin-right: 10px;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const SearchButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.charcoal};
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.slateGray};
  }

  &:disabled {
    background-color: ${colors.slateGray};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const PlaylistItem = styled.li`
  list-style: none;
  background-color: ${colors.white};
  border: 1px solid ${colors.slateGray};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${colors.navyBlue};
  }

  p {
    color: ${colors.charcoal};
    font-size: 14px;
    margin: 10px 0;
  }

  button {
    background-color: ${colors.navyBlue};
    color: ${colors.white};
    border: none;
    padding: 8px 12px;
    margin-right: 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.forestGreen};
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

export const TitleLogin = styled.h1`
  color: ${colors.white};
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PlaylistListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  flex: 1;
  overflow-y: auto;
`;

export const NoPlaylistsMessage = styled.p`
  color: ${colors.charcoal};
  font-size: 16px;
  text-align: center;
`;

export const PlaylistItemStyled = styled(PlaylistItem)`
  background-color: ${colors.white};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${colors.charcoal};
  }

  p {
    color: ${colors.charcoal};
    font-size: 14px;
    margin: 10px 0;
  }

  button {
    background-color: ${colors.charcoal};
    color: ${colors.white};
    border: none;
    padding: 8px 12px;
    margin-right: 5px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.slateGray};
    }

    &:disabled {
      background-color: ${colors.slateGray};
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const CreatePlaylistButton = styled.button`
  background-color: ${colors.charcoal};
  color: ${colors.white};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.slateGray};
  }

  &:disabled {
    background-color: ${colors.slateGray};
    cursor: not-allowed;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalTitle = styled.h2`
  color: ${colors.charcoal};
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid ${colors.slateGray};
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${colors.charcoal};
  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${colors.navyBlue};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid ${colors.slateGray};
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${colors.charcoal};
  resize: none;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${colors.navyBlue};
  }
`;

export const CancelButton = styled.button`
  background-color: ${colors.charcoal};
  color: ${colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: ${colors.charcoal};
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalContent = styled.div`
  width: 100%;
`;

export const ErrorText = styled.p`
  color: ${colors.red};
  font-size: 16px;
  margin-top: 10px;
`;

export const SongContainer = styled.div`
  padding: 20px;
  background-color: ${colors.beigeLight};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  text-align: center;

  h2 {
    color: ${colors.charcoal};
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export const SongTitle = styled.h3`
  color: ${colors.charcoal};
  font-size: 22px;
  margin-bottom: 10px;
`;

export const SongArtist = styled.p`
  color: ${colors.charcoal};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SongLink = styled.a`
  display: inline-block;
  background-color: ${colors.charcoal};
  color: ${colors.white};
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.slateGray};
  }
`;
export const SongsContainer = styled.div`
  padding: 20px;
  background-color: ${colors.beigeLight};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  text-align: center;

  h1 {
    color: ${colors.charcoal};
    margin-bottom: 20px;
    font-size: 26px;
  }
`;

export const SongList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SongItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.beigeLight};
  }
`;
export const ActionButton = styled.button`
  background-color: ${colors.charcoal};
  color: ${colors.white};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.slateGray};
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #343a40;
`;

export const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const ErrorSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const BackButton = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const TrackItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.beigeLight};
  padding: 8px; /* Tamanho menor */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.slateGray};
  }
`;

export const Button = styled.button`
  background-color: ${colors.charcoal};
  color: ${colors.white};
  border: none;
  padding: 6px 12px; 
  border-radius: 4px;
  font-size: 14px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.slateGray};
  }

  &:disabled {
    background-color: ${colors.slateGray};
    cursor: not-allowed;
  }
`;

export const TrackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; 
`;

export const TrackTitle = styled.p`
  color: ${colors.charcoal};
  font-weight: bold;
`;

export const TrackArtist = styled.p`
  color: ${colors.charcoal};
  font-size: 14px;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: ${colors.lightGray}; 
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: ${colors.whi};
  font-size: 24px;
  margin-bottom: 10px; 
`;

export const Label = styled.label`
  font-size: 16px;
  color: ${colors.charcoal};
  margin-bottom: 8px;
`;

export const Select = styled.select`
  padding: 6px 10px; 
  font-size: 14px; 
  border-radius: 4px;
  border: 1px solid ${colors.charcoal};
  margin-top: 5px; 
  margin-bottom: 10px; 
`;

export const SecondaryButton = styled(Button)`
  margin-left: 10px; 
  margin-top: 10px; 
  align-self: flex-start; 
  width: 100px;
  height: 40px;
`;
export const PlaylistTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.white}; 
  background-color: ${colors.charcoal};
  padding: 10px 15px; 
  margin-bottom: 15px; 
  margin-top:0px;
`;
