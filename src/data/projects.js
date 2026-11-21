import { lazy } from "react";

import helphiveCard from "../assets/projects/proj7.png";
import greatReadCard from "../assets/projects/proj8.png";
import homyzCard from "../assets/projects/proj1.png";
import deliverooCard from "../assets/projects/proj2.png";
import lifestreamCard from "../assets/projects/proj3.png";
import nftCard from "../assets/projects/proj4.png";
import helphiveBanner from "../assets/banners/proj7.png";
import greatReadBanner from "../assets/banners/proj8.png";
import homyzBanner from "../assets/banners/proj1.png";
import deliverooBanner from "../assets/banners/proj2.png";
import lifestreamBanner from "../assets/banners/proj3.png";
import nftBanner from "../assets/banners/proj4.png";

// Each link has a kind: live, download, article or source (sets its icon).
export const projects = [
    {
        slug: "helphive",
        name: "HelpHive",
        tagline: "Hospitality staffing marketplace",
        summary: "Hotels book staff by the shift through a web app, an Android app and an admin console, all on one Node.js API with Stripe payments.",
        image: helphiveCard,
        banner: helphiveBanner,
        tech: ["React", "TypeScript", "React Native", "Node.js", "MongoDB", "Stripe", "Google Cloud"],
        links: [
            { kind: "live", label: "Open the web app", href: "https://helphive.himaiz.com" },
            { kind: "download", label: "Download for Android", href: "https://github.com/Helphive/helphive-app/releases/latest" },
            { kind: "source", label: "Source code", href: "https://github.com/Helphive" },
        ],
        Content: lazy(() => import("../projects/content/HelpHive")),
    },
    {
        slug: "great-read",
        name: "Great Read",
        tagline: "Non-fiction book discovery",
        summary: "A library of 2,100+ non-fiction books with quotes, a reading-list builder and paid study notes through Stripe.",
        image: greatReadCard,
        banner: greatReadBanner,
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB", "Stripe", "Google Cloud"],
        links: [
            { kind: "live", label: "Visit Great Read", href: "https://greatread.himaiz.com" },
            { kind: "source", label: "Source code", href: "https://github.com/maiznadeem/great-read" },
        ],
        Content: lazy(() => import("../projects/content/GreatRead")),
    },
    {
        slug: "homyz",
        name: "Homyz",
        tagline: "Real estate website",
        summary: "Search, list and save properties on an interactive map, with Auth0 sign-in and a Node.js and MongoDB back end.",
        image: homyzCard,
        banner: homyzBanner,
        tech: ["React", "Node.js", "Express", "MongoDB", "Auth0", "Mantine"],
        links: [
            { kind: "live", label: "View live site", href: "https://homyz-real-estate.vercel.app/" },
            { kind: "source", label: "Source code", href: "https://github.com/MaizNadeem/Real-Estate-Web" },
        ],
        Content: lazy(() => import("../projects/content/Homyz")),
    },
    {
        slug: "deliveroo",
        name: "Deliveroo Clone",
        tagline: "Food delivery app",
        summary: "A Deliveroo-inspired food delivery app built with React Native, Redux, Tailwind CSS and Firebase.",
        image: deliverooCard,
        banner: deliverooBanner,
        tech: ["React Native", "Expo", "Redux", "Tailwind CSS", "Firebase"],
        links: [
            { kind: "download", label: "Download for Android", href: "https://drive.google.com/file/d/1yGeEmzMSG1cvEjTx2Am3kkB4xIG3apDv/view?usp=drive_link" },
            { kind: "source", label: "Source code", href: "https://github.com/MaizNadeem/Deliveroo-2.0" },
        ],
        Content: lazy(() => import("../projects/content/Deliveroo")),
    },
    {
        slug: "lifestream",
        name: "Lifestream",
        tagline: "Blood bank management",
        summary: "A blood bank management desktop app rebuilt on .NET 11, with a WPF client, an ASP.NET Core API and Azure SQL.",
        image: lifestreamCard,
        banner: lifestreamBanner,
        tech: [".NET", "WPF", "ASP.NET Core", "Azure SQL"],
        links: [
            { kind: "download", label: "Download for Windows", href: "https://github.com/maiznadeem/lifestream/releases/latest" },
            { kind: "source", label: "Source code", href: "https://github.com/maiznadeem/lifestream" },
        ],
        Content: lazy(() => import("../projects/content/Lifestream")),
    },
    {
        slug: "nft-marketplace",
        name: "NFT Marketplace",
        tagline: "Mobile marketplace UI",
        summary: "A React Native app for browsing and trading NFTs, built with Expo, React Navigation and Firebase.",
        image: nftCard,
        banner: nftBanner,
        tech: ["React Native", "Expo", "Firebase"],
        links: [
            { kind: "source", label: "Source code", href: "https://github.com/MaizNadeem/NFT-Marketplace" },
        ],
        Content: lazy(() => import("../projects/content/NftMarketplace")),
    },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
