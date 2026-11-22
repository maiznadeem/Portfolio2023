import React from 'react';

import home from '../../assets/screens/homyz/home.webp';
import properties from '../../assets/screens/homyz/properties.webp';
import property from '../../assets/screens/homyz/property.webp';
import mobileProperties from '../../assets/screens/homyz/m-properties.webp';
import mobileProperty from '../../assets/screens/homyz/m-property.webp';

const Homyz = () => (
    <>
        <h2>About</h2>
        <p>
            Homyz is a real estate website where people browse homes for sale, save the ones they like and book a visit. Anyone can search the listings by title, city or country and see each home on a map. Signed-in users can list their own property with photos, keep a favourites list and manage their bookings.
        </p>

        <h2>Features</h2>
        <ul>
            <li><strong>Search and browse:</strong> every listing with its price, rooms and location, searchable by title, city or country.</li>
            <li><strong>Map view:</strong> each property is pinned on an interactive Leaflet map, and new listings are placed by geocoding their address.</li>
            <li><strong>Favourites and visits:</strong> save homes with the heart button and book a visit for a date within the next year.</li>
            <li><strong>List a property:</strong> a guided form for the details, address and photos, which upload straight to Cloudinary.</li>
            <li><strong>Sign-in:</strong> Auth0 with email and password or Google, linked into one account per person.</li>
        </ul>

        <h2>Built to Be Safe in Public</h2>
        <ul>
            <li>The API decides whose favourites and bookings to change from the verified email in the Auth0 token, never from the request.</li>
            <li>Photo uploads are signed by the server for one logged-in user, one image and one folder, and only accept jpg, png and webp.</li>
            <li>Rate limits and per-account caps on listings, favourites, bookings and uploads, shared across serverless instances through MongoDB.</li>
            <li>Security headers with Helmet, a production-only CORS list and Auth0 application, and owners' email addresses kept out of public reads.</li>
        </ul>

        <h2>Screenshots</h2>
        <figure className="shot">
            <img src={home} alt="Homyz home page with search and listing stats" />
        </figure>
        <div className="shot-grid">
            <img src={properties} alt="All properties with search" loading="lazy" />
            <img src={property} alt="Property details with its location on a map" loading="lazy" />
        </div>
        <div className="shot-grid phones">
            <img src={mobileProperties} alt="Properties on a phone" loading="lazy" />
            <img src={mobileProperty} alt="Property details on a phone" loading="lazy" />
        </div>

        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Front end:</strong> React with Vite, React Router 7, Mantine, React Query, Leaflet and Swiper.</li>
            <li><strong>Back end:</strong> Node.js and Express on Vercel serverless functions, with Prisma on MongoDB Atlas.</li>
            <li><strong>Hosting:</strong> The site is a static build served from Cloudflare Workers, and the API on Vercel sits behind a Cloudflare Worker, so both are behind Cloudflare's WAF. Every push to main deploys automatically.</li>
            <li><strong>Services:</strong> Auth0 for sign-in, Cloudinary for photo uploads and delivery, and a daily Vercel cron that keeps the free Atlas cluster awake.</li>
        </ul>
    </>
);

export default Homyz;
