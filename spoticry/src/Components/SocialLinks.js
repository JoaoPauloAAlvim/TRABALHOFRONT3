import react from "react"
import facebookIcon from "../Assets/Icons/facebookIcon.png"
import twitterIcon from "../Assets/Icons/twitterIcon.png"
import instagramIcon from "../Assets/Icons/instagramIcon.png"

export function SocialLinks(){
    return <>
        <a href="https://facebook.com">
        <img src={facebookIcon} alt={"Facebook"}></img>
        </a>
        <a href="https://twitter.com">
        <img src={twitterIcon} alt={"Twitter"}></img>
        </a>
        <a href="https://instagram.com">
        <img src={instagramIcon} alt={"Instagram"}></img>
        </a>
    </>
}