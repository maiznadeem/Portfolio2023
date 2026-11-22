import { useState } from "react";
import { Award, BookOpen, Clapperboard, GraduationCap, Megaphone } from "lucide-react";
import SegmentedIndicator from "./SegmentedIndicator";

const timelines = {
    education: [
        { Icon: GraduationCap, title: "BS Computer Science", place: "COMSATS University Islamabad (CUI)", when: "2021 – 2024" },
        { Icon: BookOpen, title: "Higher Secondary Education (FSc)", place: "Government College University (GCU), Lahore", when: "2018 – 2020" },
        { Icon: Award, title: "Secondary Education", place: "Pak Angels High School", when: "2016 – 2018" },
    ],
    work: [
        { Icon: Clapperboard, title: "Senior Video Editor", place: "EcommerceWala (ecommercewala.org)", when: "Dec 2021 – Aug 2023" },
        { Icon: Megaphone, title: "Social Media Manager", place: "Sagar Publishers", when: "Jan 2021 – Oct 2022" },
    ],
};

const tabs = [
    { key: "education", label: "Education" },
    { key: "work", label: "Experience" },
];

const Info = () => {
    const [active, setActive] = useState("education");

    return (
        <section className="section about" id="aboutme">
            <div className="container">
                <header className="section__header">
                    <h2>About me</h2>
                </header>
                <div className="about__grid">
                    <div>
                        <div className="segmented" role="group" aria-label="Show">
                            {tabs.map(({ key, label }) => (
                                <button
                                    key={key}
                                    type="button"
                                    className={`nav-link${active === key ? " active" : ""}`}
                                    aria-pressed={active === key}
                                    onClick={() => setActive(key)}
                                >
                                    {label}
                                </button>
                            ))}
                            <SegmentedIndicator />
                        </div>
                        <ol className="timeline">
                            {timelines[active].map(({ Icon, title, place, when }) => (
                                <li key={title} className="timeline__item">
                                    <span className="timeline__icon"><Icon size={18} aria-hidden="true" /></span>
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{place}</p>
                                        <p className="timeline__when">{when}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="about__bio">
                        <h3>Who I am</h3>
                        <p>I'm a software developer from Lahore, Pakistan, with a background in computer science. I've built web, mobile and desktop apps across different stacks, and I've also worked professionally as a video editor. I started on the front end and now build products end to end.</p>
                        <h3>How I work</h3>
                        <p>I like collaborative teams and clear plans. I keep to deadlines, enjoy untangling hard problems, and care about the details people notice when they use what I build.</p>
                        <h3>Outside work</h3>
                        <p>Video games and football. I speak English and Urdu fluently.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
