import { Container, Tab, Nav } from "react-bootstrap";
import SegmentedIndicator from "./SegmentedIndicator";

import thumb1 from "../assets/thumbnails/Thumbnail1.jpg";
import thumb2 from "../assets/thumbnails/Thumbnail2.jpg";
import thumb3 from "../assets/thumbnails/Thumbnail3.jpg";
import thumb4 from "../assets/thumbnails/Thumbnail4.jpg";
import thumb5 from "../assets/thumbnails/Thumbnail5.jpg";
import thumb6 from "../assets/thumbnails/Thumbnail6.jpg";
import innovation2 from "../assets/img/innovation2.jpg";

import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import VideoCard from "./VideoCard";
import WistiaVideo from "./WistiaVideo";

const videos = [
    {
        title: "Despacito | A Scrap Edit",
        description: "Built mostly in After Effects, with short rotoscoping, some 3D tracking and plugin effects: a showcase of gaming-style edits.",
        imgUrl: thumb1,
        url: "https://youtu.be/v3kiFn9BV-A",
    },
    {
        title: "Lalo Salamanca - Better Call Saul",
        description: "A Premiere Pro edit that turns Lalo Salamanca's arc in Better Call Saul into a short cinematic story.",
        imgUrl: thumb2,
        url: "https://www.instagram.com/reel/Cmgxzdio3x7/",
    },
    {
        title: "Baloch Nationalism in Pakistan",
        description: "From a year managing the social channels of novelist Tariq Ismail Sagar.",
        imgUrl: thumb3,
        url: "https://youtu.be/R2ZasDkPhCQ",
    },
    {
        title: "1000+ Skills to Become a Freelancer",
        description: "1000+ skills to become a millionaire using Semrush.com, for eCommercewala.",
        imgUrl: thumb4,
        url: "https://fb.watch/iJH64zDnej/",
    },
    {
        title: "Future of Wars | Drone Soldiers",
        description: "E-commerce in a future digital war of AI-based drone soldiers, for eCommercewala.",
        imgUrl: thumb5,
        url: "https://fb.watch/iJGWer-zLn/",
    },
    {
        title: "One Curriculum Agenda",
        description: "A podcast with Dr. Zaar on improving the education system.",
        imgUrl: thumb6,
        url: "https://fb.watch/iJGZdIJFfR/",
    },
];

const Projects = () => (
    <section className="section project" id="projects">
        <Container>
            <header className="section__header">
                <h2>Projects</h2>
                <p>Products I've built end to end, from marketplaces with real payments to mobile and desktop apps. Open one for screenshots, the stack and how it fits together.</p>
            </header>
            <Tab.Container id="projects-tabs" defaultActiveKey="software" mountOnEnter>
                <Nav className="segmented" role="tablist">
                    <Nav.Item><Nav.Link eventKey="software">Software</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="video">Video editing</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="next">What's next</Nav.Link></Nav.Item>
                    <SegmentedIndicator />
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="software">
                        <div className="card-grid">
                            {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="video">
                        <div className="video-feature">
                            <WistiaVideo />
                        </div>
                        <div className="card-grid">
                            {videos.map((v) => <VideoCard key={v.url} {...v} />)}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="next">
                        <div className="future">
                            <img src={innovation2} alt="" loading="lazy" />
                            <div>
                                <h3>Where I'm headed</h3>
                                <p>As I continue as a software developer and video editor, I want to lead projects that join solid engineering with good storytelling. I'm sharpening both the code and the visual side so I can build digital experiences that people enjoy using, and I'm always keen to learn from and work with people building ambitious things.</p>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    </section>
);

export default Projects;
