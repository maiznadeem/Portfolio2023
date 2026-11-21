import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Download } from "lucide-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import headerImg from "../assets/img/header-img.svg";
import { downloadResume } from "../utils/resume";
import { EMAIL } from "./social";

const roles = ["Software developer", "Video editor"];

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types each role, holds it, deletes it, then moves to the next.
const useTypedRole = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(prefersReducedMotion() ? roles[0] : "");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (prefersReducedMotion()) return undefined;
        const full = roles[index % roles.length];
        let delay = deleting ? 45 : 95;
        if (!deleting && text === full) delay = 2200;
        if (deleting && text === "") delay = 350;

        const timer = setTimeout(() => {
            if (!deleting && text === full) setDeleting(true);
            else if (deleting && text === "") {
                setDeleting(false);
                setIndex((i) => i + 1);
            } else setText(full.slice(0, text.length + (deleting ? -1 : 1)));
        }, delay);
        return () => clearTimeout(timer);
    }, [text, deleting, index]);

    return text;
};

const Banner = () => {
    const role = useTypedRole();

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={7}>
                        <div className="banner__copy">
                            <h1>
                                Hi, I'm Maiz.
                                <span className="banner__role" aria-hidden="true">{role}<span className="caret" /></span>
                                <span className="visually-hidden">{roles.join(" and ")}</span>
                            </h1>
                            <p>I build web, mobile and desktop products end to end, from React front ends to Node.js and .NET back ends, and I've worked professionally as a video editor.</p>
                            <div className="banner__actions">
                                <button type="button" className="btn-primary" onClick={downloadResume}>
                                    <Download size={18} aria-hidden="true" />
                                    Download resume
                                </button>
                                <Link to="/#projects" className="btn-secondary">
                                    See my projects
                                    <ArrowDown size={18} aria-hidden="true" />
                                </Link>
                            </div>
                            <p className="banner__email">Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                        </div>
                    </Col>
                    <Col xs={12} md={5} xl={5}>
                        <img className="banner__art" src={headerImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
