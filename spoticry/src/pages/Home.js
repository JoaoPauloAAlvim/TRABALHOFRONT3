import react from "react";
import { Header } from "../Components/Header";
import { Section } from "../Components/Section";
import { Footer } from "../Components/Footer";
import {Nav} from "../Components/Nav"

export const Home=()=>{
    return<>
    <Header/>
    <Section title={'Descubra Novos Sons e Crie Playlists Perfeitas:\n Tudo em Um Só Lugar!'}
    subtitle={'Acesse suas músicas favoritas, descubra novos artistas \ne crie playlists que combinam com seu estilo!'}
    img={''} descricao={''}/>
    <Nav ></Nav>
    <Footer/>
    </>
}

export default Home;