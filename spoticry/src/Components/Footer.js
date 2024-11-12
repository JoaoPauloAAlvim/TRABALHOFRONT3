import react from "react"
import { FooterLinks } from "./FooterLinks"
import { SocialLinks } from "./SocialLinks"

export function Footer (props){
    return <>
        <img src={props.logo} alt={"Spoticry"}/>
        <FooterLinks/>
        <SocialLinks/>
        <p>© {new Date().getFullYear()} Spoticry. Todos os direitos reservados.</p>
        <></>
    </>
}