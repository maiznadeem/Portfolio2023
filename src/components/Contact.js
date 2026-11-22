import { Mail } from "lucide-react";

import contactImg from "../assets/img/contact-img.svg";
import { EMAIL, SocialLinks } from "./social";

const Contact = () => (
    <section className="contact" id="connect">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 contact__art">
                    <img src={contactImg} alt="" width="785" height="589" loading="lazy" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>Get in touch</h2>
                    <p>Have a project, a role or a question in mind? Email me and I'll get back to you.</p>
                    <a className="btn-light" href={`mailto:${EMAIL}`}>
                        <Mail size={18} aria-hidden="true" />
                        {EMAIL}
                    </a>
                    <SocialLinks className="social-links--light" />
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
