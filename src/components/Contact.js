import { Mail } from "lucide-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import contactImg from "../assets/img/contact-img.svg";
import { EMAIL, SocialLinks } from "./social";

const Contact = () => (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} className="contact__art">
                    <img src={contactImg} alt="" width="785" height="589" loading="lazy" />
                </Col>
                <Col xs={12} md={6}>
                    <h2>Get in touch</h2>
                    <p>Have a project, a role or a question in mind? Email me and I'll get back to you.</p>
                    <a className="btn-light" href={`mailto:${EMAIL}`}>
                        <Mail size={18} aria-hidden="true" />
                        {EMAIL}
                    </a>
                    <SocialLinks className="social-links--light" />
                </Col>
            </Row>
        </Container>
    </section>
);

export default Contact;
