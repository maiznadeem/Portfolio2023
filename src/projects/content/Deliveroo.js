import React from 'react';

import start from '../../assets/screens/deliveroo/start.webp';
import loginDark from '../../assets/screens/deliveroo/login-dark.webp';
import dashboard from '../../assets/screens/deliveroo/dashboard.webp';
import dashboardDark from '../../assets/screens/deliveroo/dashboard-dark.webp';
import restaurant from '../../assets/screens/deliveroo/restaurant.webp';
import basketDark from '../../assets/screens/deliveroo/basket-dark.webp';
import delivery from '../../assets/screens/deliveroo/delivery.webp';
import profileDark from '../../assets/screens/deliveroo/profile-dark.webp';

const RELEASES = "https://github.com/MaizNadeem/Deliveroo-2.0/releases/latest";

const Deliveroo = () => (
    <>
        <h2>About</h2>
        <p>
            A Deliveroo-inspired food delivery app for Android. You browse categories and featured restaurants, open a menu, fill a basket and place an order, then follow the rider on a live map. Version 2.0 rebuilds the original 2023 project on current tooling, with a redesigned look in light and dark mode.
        </p>

        <h2>Try It</h2>
        <p>
            Download the APK from the <a href={RELEASES} target="_blank" rel="noopener noreferrer">latest release</a> (Android 7.0 or later, on an ARM phone). Tap <strong>Try the demo</strong> to look around without an account, or create one with your email.
        </p>

        <h2>Features</h2>
        <ul>
            <li><strong>Browse:</strong> categories, featured restaurants and nearby offers, with search.</li>
            <li><strong>Order:</strong> restaurant menus, a basket you can edit, and an order summary with fees.</li>
            <li><strong>Live delivery map:</strong> the restaurant, your location and a route line that follows real roads.</li>
            <li><strong>Accounts:</strong> email sign-up and sign-in with password reset, plus a one-tap demo that needs no account.</li>
            <li><strong>Light and dark mode:</strong> follows the system until you tap the toggle, and remembers your choice.</li>
            <li><strong>Fast start:</strong> the dashboard shows content about twice as fast on a cold start, and images are cached on the phone.</li>
        </ul>

        <h2>Screenshots</h2>
        <div className="shot-grid phones">
            <img src={start} alt="Start screen" />
            <img src={loginDark} alt="Log in, dark mode" loading="lazy" />
            <img src={dashboard} alt="Dashboard" loading="lazy" />
            <img src={dashboardDark} alt="Dashboard, dark mode" loading="lazy" />
            <img src={restaurant} alt="Restaurant menu with a dish in the basket" loading="lazy" />
            <img src={basketDark} alt="Basket, dark mode" loading="lazy" />
            <img src={delivery} alt="Live delivery map" loading="lazy" />
            <img src={profileDark} alt="Profile, dark mode" loading="lazy" />
        </div>

        <h2>Secure by Default</h2>
        <ul>
            <li>Firestore data and Storage images are served only to signed-in users, and the app never writes to them.</li>
            <li>Firebase App Check with Play Integrity means only genuine installs of the app get through.</li>
            <li>Images have no public download links. The app fetches them with the user's sign-in and App Check tokens.</li>
            <li>Every Google key is restricted to the app's package and signing certificate, and usage is capped to stay at no cost.</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
            <li><strong>App:</strong> React Native 0.88 and Expo SDK 58 on the New Architecture, React Navigation 7, Redux Toolkit and NativeWind 4.</li>
            <li><strong>Media:</strong> expo-image for cached images and expo-video for the order animation.</li>
            <li><strong>Firebase:</strong> React Native Firebase with Authentication, Firestore, Cloud Storage and App Check.</li>
            <li><strong>Maps:</strong> the Maps SDK for Android and the Routes API.</li>
            <li><strong>Releases:</strong> signed APKs for ARM phones, published on GitHub Releases with a SHA-256 checksum.</li>
        </ul>
    </>
);

export default Deliveroo;
