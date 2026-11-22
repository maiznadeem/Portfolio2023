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
            { kind: "source", label: "Source code", href: "https://github.com/maiznadeem/GreatRead" },
        ],
        Content: lazy(() => import("../projects/content/GreatRead")),
    },
    {
        slug: "homyz",
        name: "Homyz",
        tagline: "Real estate website",
        summary: "Browse homes for sale on a map, save favourites, book visits and list your own property, on a hardened Node.js API.",
        image: homyzCard,
        banner: homyzBanner,
        tech: ["React", "Mantine", "Leaflet", "Node.js", "Express", "Prisma", "MongoDB", "Auth0", "Cloudinary"],
        links: [
            { kind: "live", label: "View live site", href: "https://homyz.himaiz.com/" },
            { kind: "source", label: "Source code", href: "https://github.com/maiznadeem/HomyzRealEstate" },
        ],
        Content: lazy(() => import("../projects/content/Homyz")),
    },
    {
        slug: "deliveroo",
        name: "Deliveroo Clone",
        tagline: "Food delivery app",
        summary: "Browse restaurants, fill a basket and follow your rider on a live map, in light or dark mode, on a Firebase backend locked to the genuine app.",
        image: deliverooCard,
        banner: deliverooBanner,
        tech: ["React Native", "Expo", "Redux", "NativeWind", "Firebase", "Google Maps"],
        links: [
            { kind: "download", label: "Download for Android", href: "https://github.com/MaizNadeem/Deliveroo-2.0/releases/latest" },
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
        tagline: "Digital art app for Android",
        summary: "Browse and search curated digital art with full bid histories and light and dark themes, on a Firebase backend only the genuine app can read.",
        image: nftCard,
        banner: nftBanner,
        tech: ["React Native", "Expo", "Firebase", "App Check"],
        links: [
            { kind: "download", label: "Download for Android", href: "https://github.com/maiznadeem/NFTMarketplace/releases/latest" },
            { kind: "source", label: "Source code", href: "https://github.com/maiznadeem/NFTMarketplace" },
        ],
        Content: lazy(() => import("../projects/content/NftMarketplace")),
    },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
