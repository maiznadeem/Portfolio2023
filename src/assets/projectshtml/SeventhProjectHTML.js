import React from 'react';

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

import webLanding from '../screens/helphive/web-landing.webp';
import webBookingForm from '../screens/helphive/web-booking-form.webp';
import webBookings from '../screens/helphive/web-bookings.webp';
import webDark from '../screens/helphive/web-dark-booking-form.webp';
import webProviderHome from '../screens/helphive/web-provider-home.webp';
import webProviderOrders from '../screens/helphive/web-provider-orders.webp';
import webProviderEarnings from '../screens/helphive/web-provider-earnings.webp';
import adminOverview from '../screens/helphive/admin-overview.webp';
import adminApplication from '../screens/helphive/admin-application.webp';
import appBookService from '../screens/helphive/app-book-service.webp';
import appBookings from '../screens/helphive/app-bookings.webp';
import appProviderMap from '../screens/helphive/app-provider-map.webp';
import appDarkBookService from '../screens/helphive/app-dark-book-service.webp';
import appDarkEarnings from '../screens/helphive/app-dark-earnings.webp';

const ORG = "https://github.com/Helphive";
const WEB = "https://helphive.himaiz.com";
const ADMIN = "https://admin.helphive.himaiz.com";
const APK = "https://github.com/Helphive/helphive-app/releases/latest";

const SeventhProjectHTML = () => {
    return (
        <div className="html-container">

            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open(WEB, "_blank")}>
                    <span>Open the Web App</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open(APK, "_blank")}>
                    <AiOutlineLink />
                    <>Download the Android App</>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open(ORG, "_blank")}>
                    <AiOutlineLink />
                    <>Go to Source</>
                </Button>
            </div>

            <h2>About</h2>
            <p>
                HelpHive is a staffing marketplace where hotels book room attendants, public area attendants and linen porters by the shift, and nearby providers accept the job, work it and get paid. It runs as a web app, an Android app and an admin console on one API, with card payments and payouts through Stripe, in-app chat and push notifications.
            </p>

            <h2>Try the Demo</h2>
            <p>
                The sign-in pages have one-tap <strong>Demo customer</strong> and <strong>Demo provider</strong> buttons on the <a href={WEB}>web app</a> and the Android app, and a read-only <strong>Demo admin</strong> button on the <a href={ADMIN}>admin console</a>. No password is needed. The demo accounts are shared, so don't enter real personal or payment details. Payments run in Stripe test mode, so the card <code>4242 4242 4242 4242</code> works.
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
            <div className='main-screen'>
                <img src={webLanding} alt="HelpHive landing page" />
            </div>
            <div className='screenshot-grid'>
                <img src={webBookingForm} alt="Booking form" loading="lazy" />
                <img src={webBookings} alt="Customer bookings" loading="lazy" />
                <img src={webProviderHome} alt="Provider home" loading="lazy" />
                <img src={webProviderOrders} alt="Provider orders" loading="lazy" />
                <img src={webProviderEarnings} alt="Provider earnings" loading="lazy" />
                <img src={webDark} alt="Booking form in dark mode" loading="lazy" />
            </div>

            <h3>Android App</h3>
            <div className='screenshot-grid phones'>
                <img src={appBookService} alt="Book a service" loading="lazy" />
                <img src={appBookings} alt="Bookings" loading="lazy" />
                <img src={appProviderMap} alt="Provider home with location" loading="lazy" />
                <img src={appDarkBookService} alt="Book a service in dark mode" loading="lazy" />
                <img src={appDarkEarnings} alt="Provider earnings in dark mode" loading="lazy" />
            </div>

            <h3>Admin Console</h3>
            <div className='screenshot-grid'>
                <img src={adminOverview} alt="Admin overview" loading="lazy" />
                <img src={adminApplication} alt="Provider application review" loading="lazy" />
            </div>

            <h2>Architecture</h2>
            <p>
                HelpHive is four repositories on one API. The web app and the admin console are hosted on Firebase Hosting and deployed by GitHub Actions. The API runs on Google Cloud Run from a Docker image that Cloud Build makes on every push to main, with MongoDB Atlas as the database. Google Cloud Tasks runs the scheduled jobs (booking expiry, earning release, chat windows), and Google Cloud Storage holds documents and photos.
            </p>
            <ul>
                <li><strong><a href={`${ORG}/helphive-web`}>helphive-web</a>:</strong> The customer and provider web app, a progressive web app with web push.</li>
                <li><strong><a href={`${ORG}/helphive-app`}>helphive-app</a>:</strong> The Android app, built and signed locally and published as GitHub Releases.</li>
                <li><strong><a href={`${ORG}/helphive-admin`}>helphive-admin</a>:</strong> The operations console.</li>
                <li><strong><a href={`${ORG}/helphive-backend`}>helphive-backend</a>:</strong> The API, with about 400 tests and WebSockets for live provider availability.</li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
                <li><strong>Web app:</strong> React 18, TypeScript, Vite, MUI 6, Redux Toolkit with RTK Query, React Router 7, Stripe Elements, Google Maps, CometChat and OneSignal web push.</li>
                <li><strong>Admin console:</strong> React 18, TypeScript, Vite, MUI 6, Redux Toolkit with RTK Query, React Router 7 and ECharts.</li>
                <li><strong>Mobile app:</strong> Expo SDK 58, React Native 0.88 on the New Architecture, React 19, TypeScript, React Navigation 7, Redux Toolkit, Stripe React Native, react-native-maps, CometChat and OneSignal.</li>
                <li><strong>API:</strong> Node.js 22, TypeScript, Express, MongoDB with Mongoose, Stripe (payments, Connect payouts and webhooks), Google Cloud Tasks and Cloud Storage, Resend with React Email, and WebSockets.</li>
                <li><strong>Infrastructure:</strong> Google Cloud Run, Cloud Build, Firebase Hosting, MongoDB Atlas, GitHub Actions and Cloudflare DNS.</li>
            </ul>

            <hr />

            <h4 align="center">© M. Maiz Nadeem</h4>
        </div>
    );
}

export default SeventhProjectHTML;
