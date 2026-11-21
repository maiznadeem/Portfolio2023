import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const EMAIL = "contact.maiznadeem@gmail.com";

export const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-maiz-nadeem-020949176", Icon: FaLinkedinIn },
    { label: "GitHub", href: "https://github.com/MaizNadeem", Icon: FaGithub },
    { label: "X", href: "https://x.com/MaizNadeem", Icon: FaXTwitter },
    { label: "Instagram", href: "https://www.instagram.com/m.maiznadeem", Icon: FaInstagram },
];

export const SocialLinks = ({ className = "" }) => (
    <ul className={`social-links ${className}`}>
        {socials.map(({ label, href, Icon }) => (
            <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                </a>
            </li>
        ))}
    </ul>
);
