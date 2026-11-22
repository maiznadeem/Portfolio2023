import { useRef, useState } from "react";

import innovation2 from "../assets/img/innovation2.webp";
import { projects } from "../data/projects";
import { loadImages } from "../utils/images";
import { ProjectCard } from "./ProjectCard";
import SegmentedIndicator from "./SegmentedIndicator";
import VideoCard from "./VideoCard";
import WistiaVideo from "./WistiaVideo";

const thumbs = loadImages(require.context("../assets/thumbnails", false, /\.webp$/));

const videos = [
    {
        title: "Despacito | A Scrap Edit",
        description: "Built mostly in After Effects, with short rotoscoping, some 3D tracking and plugin effects: a showcase of gaming-style edits.",
        image: thumbs.Thumbnail1,
        url: "https://youtu.be/v3kiFn9BV-A",
    },
    {
        title: "Lalo Salamanca - Better Call Saul",
        description: "A Premiere Pro edit that turns Lalo Salamanca's arc in Better Call Saul into a short cinematic story.",
        image: thumbs.Thumbnail2,
        url: "https://www.instagram.com/reel/Cmgxzdio3x7/",
    },
    {
        title: "Baloch Nationalism in Pakistan",
        description: "From a year managing the social channels of novelist Tariq Ismail Sagar.",
        image: thumbs.Thumbnail3,
        url: "https://youtu.be/R2ZasDkPhCQ",
    },
    {
        title: "1000+ Skills to Become a Freelancer",
        description: "1000+ skills to become a millionaire using Semrush.com, for eCommercewala.",
        image: thumbs.Thumbnail4,
        url: "https://fb.watch/iJH64zDnej/",
    },
    {
        title: "Future of Wars | Drone Soldiers",
        description: "E-commerce in a future digital war of AI-based drone soldiers, for eCommercewala.",
        image: thumbs.Thumbnail5,
        url: "https://fb.watch/iJGWer-zLn/",
    },
    {
        title: "One Curriculum Agenda",
        description: "A podcast with Dr. Zaar on improving the education system.",
        image: thumbs.Thumbnail6,
        url: "https://fb.watch/iJGZdIJFfR/",
    },
];

const panes = {
    software: (
        <div className="card-grid">
            {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
        </div>
    ),
    video: (
        <>
            <div className="video-feature">
                <WistiaVideo />
            </div>
            <div className="card-grid">
                {videos.map((v) => <VideoCard key={v.url} {...v} />)}
            </div>
        </>
    ),
    next: (
        <div className="future">
            <img src={innovation2} alt="" width="580" height="328" loading="lazy" />
            <div>
                <h3>Where I'm headed</h3>
                <p>As I continue as a software developer and video editor, I want to lead projects that join solid engineering with good storytelling. I'm sharpening both the code and the visual side so I can build digital experiences that people enjoy using, and I'm always keen to learn from and work with people building ambitious things.</p>
            </div>
        </div>
    ),
};

const tabs = [
    { key: "software", label: "Software" },
    { key: "video", label: "Video editing" },
    { key: "next", label: "What's next" },
];

// A tab's panel is first rendered when the tab is opened, so the video player only loads on demand,
// and then kept. Arrow keys, Home and End move between tabs.
const Projects = () => {
    const [active, setActive] = useState("software");
    const [opened, setOpened] = useState(["software"]);
    const tabRefs = useRef({});

    const select = (key) => {
        setActive(key);
        setOpened((keys) => (keys.includes(key) ? keys : [...keys, key]));
    };

    const onKeyDown = (e) => {
        const i = tabs.findIndex((t) => t.key === active);
        const to = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (to === undefined) return;
        e.preventDefault();
        const { key } = tabs[(to + tabs.length) % tabs.length];
        select(key);
        tabRefs.current[key].focus();
    };

    return (
        <section className="section project" id="projects">
            <div className="container">
                <header className="section__header">
                    <h2>Projects</h2>
                    <p>Products I've built end to end, from marketplaces with real payments to mobile and desktop apps. Open one for screenshots, the stack and how it fits together.</p>
                </header>
                <div className="segmented" role="tablist" aria-label="Projects" onKeyDown={onKeyDown}>
                    {tabs.map(({ key, label }) => (
                        <button
                            key={key}
                            ref={(el) => { tabRefs.current[key] = el; }}
                            type="button"
                            role="tab"
                            id={`projects-tab-${key}`}
                            aria-controls={`projects-panel-${key}`}
                            aria-selected={active === key}
                            tabIndex={active === key ? 0 : -1}
                            className={`nav-link${active === key ? " active" : ""}`}
                            onClick={() => select(key)}
                        >
                            {label}
                        </button>
                    ))}
                    <SegmentedIndicator />
                </div>
                <div className="tab-content">
                    {tabs.filter(({ key }) => opened.includes(key)).map(({ key }) => (
                        <div
                            key={key}
                            role="tabpanel"
                            id={`projects-panel-${key}`}
                            aria-labelledby={`projects-tab-${key}`}
                            className={`tab-pane${active === key ? " active" : ""}`}
                        >
                            {panes[key]}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
