import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

// The title link covers the whole card; the source link sits above it.
export const ProjectCard = ({ slug, name, tagline, summary, image, links }) => {
    const source = links.find((l) => l.kind === "source");
    return (
        <article className="project-card">
            <div className="project-card__media">
                <img src={image} alt="" width="1280" height="720" loading="lazy" decoding="async" />
            </div>
            <div className="project-card__body">
                <p className="project-card__tagline">{tagline}</p>
                <h3>
                    <Link to={`/projects/${slug}`} className="project-card__link">{name}</Link>
                </h3>
                <p className="project-card__summary">{summary}</p>
                <div className="project-card__footer">
                    <span className="project-card__more" aria-hidden="true">
                        View project <ArrowRight size={16} />
                    </span>
                    {source && (
                        <a className="icon-button project-card__source" href={source.href} target="_blank" rel="noopener noreferrer" aria-label={`${name} source code`} title="Source code">
                            <FaGithub aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};
