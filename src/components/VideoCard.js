import { Play } from "lucide-react";

const VideoCard = ({ title, description, imgUrl, url }) => (
    <article className="project-card">
        <div className="project-card__media project-card__media--video">
            <img src={imgUrl} alt="" loading="lazy" />
            <span className="play-badge" aria-hidden="true"><Play size={22} fill="currentColor" /></span>
        </div>
        <div className="project-card__body">
            <h3>
                <a href={url} target="_blank" rel="noopener noreferrer" className="project-card__link">{title}</a>
            </h3>
            <p className="project-card__summary">{description}</p>
        </div>
    </article>
);

export default VideoCard;
