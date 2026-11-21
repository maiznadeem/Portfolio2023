import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDownload } from 'react-icons/fa';
import { downloadResume } from "../utils/resume";

export const Newsletter = () => {
    return (
        <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
            <Row className="align-items-center">
            <Col lg={12} md={6} xl={5}>
                <h3 style={{ textAlign: "left" }}>
                Want the details on paper? Download my resume.
                </h3>
            </Col>
            <Col md={6} xl={7}>
                <div className="download-resume" onClick={downloadResume} >
                    <FaDownload size={20} style={{ color:"white", marginRight: "10px", marginBottom: "3px" }} />
                    <button>Download Resume</button>
                </div>
            </Col>
            </Row>
        </div>
        </Col>
    );
};
