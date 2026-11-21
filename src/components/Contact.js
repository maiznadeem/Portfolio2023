import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

const EMAIL = "contact.maiznadeem@gmail.com";

const links = [
    { label: "Email Me", href: `mailto:${EMAIL}` },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-maiz-nadeem-020949176" },
    { label: "GitHub", href: "https://github.com/MaizNadeem" },
];

const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img className="" src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col size={12} md={6}>
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>Have a project, a role or a question in mind? Email me and I'll get back to you, or find me on LinkedIn and GitHub.</p>
                            <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <div className="contact-actions">
                                {links.map(({ label, href }) => (
                                    <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
                                        <span>{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
