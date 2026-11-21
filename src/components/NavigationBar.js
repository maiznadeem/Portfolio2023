import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Download } from "lucide-react";

import logo from "../assets/img/Logo.png";
import { SocialLinks } from "./social";
import { downloadResume } from "../utils/resume";

const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "aboutme", label: "About" },
    { id: "connect", label: "Contact" },
];

// Highlights the section in view on the home page; project pages highlight Projects.
const useActiveSection = (onHome) => {
    const [active, setActive] = useState(onHome ? "home" : "projects");

    useEffect(() => {
        if (!onHome) {
            setActive("projects");
            return undefined;
        }
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [onHome]);

    return active;
};

const NavigationBar = () => {
    const { pathname } = useLocation();
    const onHome = pathname === "/";
    const active = useActiveSection(onHome);
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const close = () => setExpanded(false);

    return (
        <header>
            <Navbar
                expand="lg"
                variant="dark"
                aria-label="Main"
                expanded={expanded}
                onToggle={setExpanded}
                className={`site-nav${scrolled || expanded || !onHome ? " is-solid" : ""}`}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/" onClick={close} className="site-nav__brand">
                        <img src={logo} alt="M. Maiz, home" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="site-nav-menu" label="Menu" />
                    <Navbar.Collapse id="site-nav-menu">
                        <div className="site-nav__links">
                            {sections.map(({ id, label }) => (
                                <Link
                                    key={id}
                                    to={`/#${id}`}
                                    onClick={close}
                                    className={active === id ? "is-active" : undefined}
                                    aria-current={active === id ? "true" : undefined}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <div className="site-nav__actions">
                            <SocialLinks />
                            <button type="button" className="btn-primary btn-sm" onClick={() => { downloadResume(); close(); }}>
                                <Download size={16} aria-hidden="true" />
                                Resume
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavigationBar;
