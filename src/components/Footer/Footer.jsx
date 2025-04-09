import './Footer.css'
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="/"><img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoodLogo" /><span>GeekFoods</span></a>
            </div>
            <div className="footer-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, aut eaque possimus adipisci cumque quod. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, illum labore sapiente facere ad totam.</p>
            </div>
            <div className="footer-nav">
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#history">History</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#blog">Blog</a>
            </div>
            <div className="footer-social">
                <IoLogoFacebook />
                <IoLogoInstagram />
                <FaXTwitter />
                <IoLogoGithub />
                <IoLogoLinkedin />
            </div>
        </footer>
    )
}

export default Footer