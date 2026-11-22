import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download } from "lucide-react";

import logo from "../assets/img/Logo.webp";
import { SocialLinks } from "./social";
import { downloadResume } from "../utils/resume";

const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "aboutme", label: "About" },
    { id: "connect", label: "Contact" },
];

// Matches the CSS breakpoint where the inline links give way to the menu button.
const DESKTOP = "(min-width: 992px)";

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

const SectionLinks = ({ active, onNavigate, numbered = false, tabbable = true }) =>
    sections.map(({ id, label }, i) => (
        <Link
            key={id}
            to={`/#${id}`}
            onClick={onNavigate}
            tabIndex={tabbable ? undefined : -1}
            className={active === id ? "is-active" : undefined}
            aria-current={active === id ? "true" : undefined}
            style={numbered ? { "--i": i } : undefined}
        >
            {numbered && <span className="site-nav__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>}
            {label}
        </Link>
    ));

const NavigationBar = () => {
    const { pathname } = useLocation();
    const onHome = pathname === "/";
    const active = useActiveSection(onHome);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleRef = useRef(null);
    const panelRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // While the phone menu is open: lock page scroll, close on Escape or when the window grows to
    // desktop width, and move focus into the menu (and back to the button when it closes).
    useEffect(() => {
        if (!open) return undefined;
        document.body.classList.add("nav-open");
        panelRef.current?.querySelector("a")?.focus({ preventScroll: true });
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };
        const desktop = window.matchMedia(DESKTOP);
        const onResize = () => desktop.matches && setOpen(false);
        document.addEventListener("keydown", onKey);
        desktop.addEventListener("change", onResize);
        return () => {
            document.body.classList.remove("nav-open");
            document.removeEventListener("keydown", onKey);
            desktop.removeEventListener("change", onResize);
        };
    }, [open]);

    useEffect(() => setOpen(false), [pathname]);

    const close = () => setOpen(false);
    const solid = scrolled || open || !onHome;

    return (
        <header className={`site-nav${solid ? " is-solid" : ""}${open ? " is-open" : ""}`}>
            <div className="container site-nav__bar">
                <Link to="/" onClick={close} className="site-nav__brand">
                    <img src={logo} alt="M. Maiz, home" width="300" height="108" />
                </Link>

                <nav className="site-nav__links" aria-label="Main">
                    <SectionLinks active={active} />
                </nav>
                <div className="site-nav__actions">
                    <SocialLinks />
                    <button type="button" className="btn-primary btn-sm" onClick={downloadResume}>
                        <Download size={16} aria-hidden="true" />
                        Resume
                    </button>
                </div>

                <button
                    ref={toggleRef}
                    type="button"
                    className="site-nav__toggle"
                    aria-expanded={open}
                    aria-controls="site-nav-menu"
                    aria-label={open ? "Close menu" : "Menu"}
                    onClick={() => setOpen((o) => !o)}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>

            <div
                id="site-nav-menu"
                ref={panelRef}
                className="site-nav__panel"
                aria-hidden={!open}
                {...(!open && { inert: "" })}
            >
                <nav className="site-nav__panel-links" aria-label="Menu">
                    <SectionLinks active={active} onNavigate={close} numbered tabbable={open} />
                </nav>
                <div className="site-nav__panel-footer">
                    <SocialLinks />
                    <button
                        type="button"
                        className="btn-primary"
                        tabIndex={open ? undefined : -1}
                        onClick={() => { downloadResume(); close(); }}
                    >
                        <Download size={18} aria-hidden="true" />
                        Download resume
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
