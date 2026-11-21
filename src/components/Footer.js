import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import logo from "../assets/img/Logo.png";
import { SocialLinks } from "./social";

const Footer = () => (
    <footer className="footer">
        <Container className="footer__inner">
            <Link to="/" className="footer__logo"><img src={logo} alt="M. Maiz, home" /></Link>
            <SocialLinks />
            <p>© {new Date().getFullYear()} M. Maiz Nadeem</p>
        </Container>
    </footer>
);

export default Footer;
