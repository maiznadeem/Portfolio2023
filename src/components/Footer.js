import { Link } from "react-router-dom";

import logo from "../assets/img/Logo.webp";
import { SocialLinks } from "./social";

const Footer = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <Link to="/" className="footer__logo"><img src={logo} alt="M. Maiz, home" width="300" height="108" loading="lazy" /></Link>
            <SocialLinks />
            <p>© {new Date().getFullYear()} M. Maiz Nadeem</p>
        </div>
    </footer>
);

export default Footer;
