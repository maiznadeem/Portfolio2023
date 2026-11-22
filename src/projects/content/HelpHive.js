import React from 'react';

import { loadImages, SIZES } from '../../utils/images';

const shots = loadImages(require.context('../../assets/screens/helphive', false, /\.webp$/));

const ORG = "https://github.com/Helphive";
const WEB = "https://helphive.himaiz.com";
const ADMIN = "https://admin.helphive.himaiz.com";

const HelpHive = () => (
    <>
        <h2>About</h2>
        <p>
            HelpHive is a staffing marketplace where hotels book room attendants, public area attendants and linen porters by the shift, and nearby providers accept the job, work it and get paid. It runs as a web app, an Android app and an admin console on one API, with card payments and payouts through Stripe, in-app chat and push notifications.
        </p>

        <h2>Try the Demo</h2>
        <p>
            The sign-in pages have one-tap <strong>Demo customer</strong> and <strong>Demo provider</strong> buttons on the <a href={WEB} target="_blank" rel="noopener noreferrer">web app</a> and the Android app, and a read-only <strong>Demo admin</strong> button on the <a href={ADMIN} target="_blank" rel="noopener noreferrer">admin console</a>. No password is needed. The demo accounts are shared, so don't enter real personal or payment details. Payments run in Stripe test mode, so the card <code>4242 4242 4242 4242</code> works.
        </p>

        <h2>Features</h2>
        <h3>For customers (hotels)</h3>
        <ul>
            <li>Book a service by the shift: pick the service, date, start time and hours, then the address by search or a map pin, and pay by card.</li>
            <li>Follow each booking from paid through accepted, started and completed, and approve the provider's start.</li>
            <li>Chat with the provider, with booking cards in the conversation and a timeline of every booking with that person.</li>
            <li>Get push notifications on the phone and in the browser, and download receipts.</li>
            <li>Use light or dark mode, following the system or set by hand.</li>
        </ul>
        <h3>For providers</h3>
        <ul>
            <li>Apply with documents, which an admin reviews and approves.</li>
            <li>Go online for chosen services and get a "New job available" push for paid jobs within 25 km, even with the app closed.</li>
            <li>Accept a job, ask the customer to approve the start, and complete it.</li>
            <li>Get earnings released to a Stripe Connect account and request payouts.</li>
        </ul>
        <h3>For the operations team</h3>
        <ul>
            <li>An overview of the marketplace right now, with a "needs attention" list: unassigned shifts near their start, jobs nobody started, failed payouts and refunds, and waiting applications.</li>
            <li>Bookings, customers, providers, applications, payments, earnings, payouts, reconciliation and disputes.</li>
            <li>Analytics, risk rules and cases, support cases, an audit log, and observability for errors, webhooks and scheduled tasks.</li>
            <li>Platform settings such as fees, booking limits, services and an announcement banner, changed without a deploy.</li>
        </ul>
        <h3>Automatic rules</h3>
        <ul>
            <li>A paid booking that nobody accepts is cancelled and refunded at its start time.</li>
            <li>An accepted booking that nobody starts is cancelled and refunded after its shift ends.</li>
            <li>Earnings are released after completion, unless a risk hold applies.</li>
        </ul>

        <h2>Screenshots</h2>

        <h3>Web App</h3>
        <figure className="shot">
            <img {...shots.webLanding} width="1440" height="900" sizes={SIZES.shot} alt="HelpHive landing page" />
        </figure>
        <div className="shot-grid">
            <img {...shots.webBookingForm} width="1440" height="900" sizes={SIZES.half} alt="Booking form" loading="lazy" />
            <img {...shots.webBookings} width="1440" height="900" sizes={SIZES.half} alt="Customer bookings" loading="lazy" />
            <img {...shots.webProviderHome} width="1440" height="900" sizes={SIZES.half} alt="Provider home" loading="lazy" />
            <img {...shots.webProviderOrders} width="1440" height="900" sizes={SIZES.half} alt="Provider orders" loading="lazy" />
            <img {...shots.webProviderEarnings} width="1440" height="900" sizes={SIZES.half} alt="Provider earnings" loading="lazy" />
            <img {...shots.webDarkBookingForm} width="1440" height="900" sizes={SIZES.half} alt="Booking form in dark mode" loading="lazy" />
        </div>

        <h3>Android App</h3>
        <div className="shot-grid phones">
            <img {...shots.appBookService} width="540" height="1152" sizes={SIZES.phone} alt="Book a service" loading="lazy" />
            <img {...shots.appBookings} width="540" height="1152" sizes={SIZES.phone} alt="Bookings" loading="lazy" />
            <img {...shots.appProviderMap} width="540" height="1152" sizes={SIZES.phone} alt="Provider home with location" loading="lazy" />
            <img {...shots.appDarkBookService} width="540" height="1152" sizes={SIZES.phone} alt="Book a service in dark mode" loading="lazy" />
            <img {...shots.appDarkEarnings} width="540" height="1152" sizes={SIZES.phone} alt="Provider earnings in dark mode" loading="lazy" />
        </div>

        <h3>Admin Console</h3>
        <div className="shot-grid">
            <img {...shots.adminOverview} width="1440" height="900" sizes={SIZES.half} alt="Admin overview" loading="lazy" />
            <img {...shots.adminApplication} width="1440" height="900" sizes={SIZES.half} alt="Provider application review" loading="lazy" />
        </div>

        <h2>Architecture</h2>
        <p>
            HelpHive is four repositories on one API. The web app and the admin console are static builds served from Cloudflare Workers and deployed by Workers Builds. The API runs on Google Cloud Run behind a Cloudflare Worker, so traffic only reaches it through Cloudflare's WAF, from a Docker image that Cloud Build makes on every push to main, with MongoDB Atlas as the database. Google Cloud Tasks runs the scheduled jobs (booking expiry, earning release, chat windows), and Google Cloud Storage holds documents and photos.
        </p>
        <ul>
            <li><strong><a href={`${ORG}/helphive-web`} target="_blank" rel="noopener noreferrer">helphive-web</a>:</strong> The customer and provider web app, a progressive web app with web push.</li>
            <li><strong><a href={`${ORG}/helphive-app`} target="_blank" rel="noopener noreferrer">helphive-app</a>:</strong> The Android app, built and signed locally and published as GitHub Releases.</li>
            <li><strong><a href={`${ORG}/helphive-admin`} target="_blank" rel="noopener noreferrer">helphive-admin</a>:</strong> The operations console.</li>
            <li><strong><a href={`${ORG}/helphive-backend`} target="_blank" rel="noopener noreferrer">helphive-backend</a>:</strong> The API, with about 400 tests and WebSockets for live provider availability.</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Web app:</strong> React 18, TypeScript, Vite, MUI 6, Redux Toolkit with RTK Query, React Router 7, Stripe Elements, Google Maps, CometChat and OneSignal web push.</li>
            <li><strong>Admin console:</strong> React 18, TypeScript, Vite, MUI 6, Redux Toolkit with RTK Query, React Router 7 and ECharts.</li>
            <li><strong>Mobile app:</strong> Expo SDK 58, React Native 0.88 on the New Architecture, React 19, TypeScript, React Navigation 7, Redux Toolkit, Stripe React Native, react-native-maps, CometChat and OneSignal.</li>
            <li><strong>API:</strong> Node.js 22, TypeScript, Express, MongoDB with Mongoose, Stripe (payments, Connect payouts and webhooks), Google Cloud Tasks and Cloud Storage, Resend with React Email, and WebSockets.</li>
            <li><strong>Infrastructure:</strong> Cloudflare (Workers, WAF), Google Cloud Run, Cloud Build, MongoDB Atlas and GitHub Actions.</li>
        </ul>
    </>
);

export default HelpHive;
