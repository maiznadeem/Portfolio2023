import { Suspense, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Download, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { findProject, projects } from "../data/projects";
import { SIZES } from "../utils/images";

const linkIcons = { live: ExternalLink, download: Download, article: BookOpen, source: FaGithub };

export const ProjectLink = ({ kind, label, href, primary }) => {
    const Icon = linkIcons[kind] || ExternalLink;
    return (
        <a className={primary ? "btn-primary" : "btn-secondary"} href={href} target="_blank" rel="noopener noreferrer">
            <Icon size={17} aria-hidden="true" />
            {label}
        </a>
    );
};

const ProjectPage = () => {
    const { slug } = useParams();
    const project = findProject(slug);

    useEffect(() => {
        if (project) document.title = `${project.name}: ${project.tagline} | Maiz`;
        return () => { document.title = "Maiz | Software developer"; };
    }, [project]);

    if (!project) return <Navigate to="/#projects" replace />;

    const index = projects.indexOf(project);
    const next = projects[(index + 1) % projects.length];
    const { name, tagline, summary, banner, tech, links, Content } = project;

    return (
        <article className="project-page">
            <div className="container project-page__inner">
                <Link to="/#projects" className="back-link">
                    <ArrowLeft size={18} aria-hidden="true" />
                    All projects
                </Link>

                <header className="project-page__header">
                    <h1>{name}</h1>
                    <p className="project-page__tagline">{tagline}</p>
                    <p className="project-page__summary">{summary}</p>
                    <ul className="tag-list" aria-label="Built with">
                        {tech.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <div className="project-page__actions">
                        {links.map((link, i) => <ProjectLink key={link.href} {...link} primary={i === 0 && link.kind !== "source"} />)}
                    </div>
                </header>

                <img {...banner} className="project-page__banner" sizes={SIZES.banner} alt={`${name} screens`} width="1280" height="500" fetchpriority="high" />

                <div className="prose">
                    <Suspense fallback={<p className="prose__loading">Loading project details…</p>}>
                        <Content />
                    </Suspense>
                </div>

                <nav className="next-project" aria-label="Next project">
                    <Link to={`/projects/${next.slug}`}>
                        <span className="next-project__label">Next project</span>
                        <span className="next-project__name">
                            {next.name}
                            <ArrowRight size={22} aria-hidden="true" />
                        </span>
                    </Link>
                </nav>
            </div>
        </article>
    );
};

export default ProjectPage;
