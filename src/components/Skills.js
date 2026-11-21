import { Clapperboard, Globe, Monitor, Palette, Smartphone } from "lucide-react";
import Container from "react-bootstrap/Container";

import javascript from "../assets/tech/javascript.svg";
import typescript from "../assets/tech/typescript.svg";
import csharp from "../assets/tech/csharp.svg";
import cplusplus from "../assets/tech/cplusplus.svg";
import c from "../assets/tech/c.svg";
import java from "../assets/tech/java.svg";
import react from "../assets/tech/react.svg";
import redux from "../assets/tech/redux.svg";
import tailwindcss from "../assets/tech/tailwindcss.svg";
import bootstrap from "../assets/tech/bootstrap.svg";
import nodejs from "../assets/tech/nodejs.svg";
import express from "../assets/tech/express.svg";
import dotnet from "../assets/tech/dotnet.svg";
import graphql from "../assets/tech/graphql.svg";
import mongodb from "../assets/tech/mongodb.svg";
import sqlserver from "../assets/tech/sqlserver.svg";
import firebase from "../assets/tech/firebase.svg";
import azure from "../assets/tech/azure.svg";
import googlecloud from "../assets/tech/googlecloud.svg";
import docker from "../assets/tech/docker.svg";
import visualstudio from "../assets/tech/visualstudio.svg";
import vscode from "../assets/tech/vscode.svg";
import premierepro from "../assets/tech/premierepro.svg";
import aftereffects from "../assets/tech/aftereffects.svg";
import photoshop from "../assets/tech/photoshop.svg";
import canva from "../assets/tech/canva.svg";

const areas = [
    { Icon: Globe, title: "Web development", text: "React front ends and Node.js APIs, deployed on Vercel and Google Cloud." },
    { Icon: Smartphone, title: "Mobile apps", text: "React Native and Expo apps for Android, with maps, payments and push notifications." },
    { Icon: Monitor, title: "Desktop and .NET", text: "WPF desktop apps backed by ASP.NET Core APIs and Azure SQL." },
    { Icon: Clapperboard, title: "Video editing", text: "Premiere Pro and After Effects edits, from short social clips to long-form channels." },
    { Icon: Palette, title: "Graphic design", text: "Thumbnails, social graphics and interface mockups in Photoshop and Canva." },
];

// invert: logos drawn in black, which would vanish on the dark background.
const toolkit = [
    { group: "Languages", items: [["JavaScript", javascript], ["TypeScript", typescript], ["C#", csharp], ["C++", cplusplus], ["C", c], ["Java", java]] },
    { group: "Front end and mobile", items: [["React", react], ["React Native", react], ["Redux", redux], ["Tailwind CSS", tailwindcss], ["Bootstrap", bootstrap]] },
    { group: "Back end and data", items: [["Node.js", nodejs], ["Express", express, true], [".NET", dotnet], ["GraphQL", graphql], ["MongoDB", mongodb], ["SQL Server", sqlserver], ["Firebase", firebase]] },
    { group: "Cloud and tools", items: [["Azure", azure], ["Google Cloud", googlecloud], ["Docker", docker], ["Visual Studio", visualstudio], ["VS Code", vscode]] },
    { group: "Creative", items: [["Premiere Pro", premierepro], ["After Effects", aftereffects], ["Photoshop", photoshop], ["Canva", canva]] },
];

const Skills = () => (
    <section className="section skill" id="skills">
        <Container>
            <header className="section__header">
                <h2>Skills</h2>
                <p>I work across the stack and across media: the same person who builds the API can cut the launch video.</p>
            </header>

            <ul className="skill-areas">
                {areas.map(({ Icon, title, text }) => (
                    <li key={title} className="skill-area">
                        <span className="skill-area__icon"><Icon size={22} aria-hidden="true" /></span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>

            <div className="toolkit">
                <h3 className="toolkit__title">Toolkit</h3>
                <dl className="toolkit__groups">
                    {toolkit.map(({ group, items }) => (
                        <div key={group} className="toolkit__group">
                            <dt>{group}</dt>
                            <dd>
                                <ul className="tool-list">
                                    {items.map(([name, logo, invert]) => (
                                        <li key={name} className="tool">
                                            <img src={logo} alt="" className={invert ? "is-inverted" : undefined} />
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Container>
    </section>
);

export default Skills;
