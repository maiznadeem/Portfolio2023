import { Play } from "lucide-react";

import { SIZES } from "../utils/images";

const VideoCard = ({ title, description, image, url }) => (
    <article className="project-card">
        <div className="project-card__media project-card__media--video">
            <img {...image} sizes={SIZES.card} alt="" width="1280" height="720" loading="lazy" decoding="async" />
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
