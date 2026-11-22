import React from 'react';

import { loadImages, SIZES } from '../../utils/images';

const shots = loadImages(require.context('../../assets/screens/nft', false, /\.webp$/));

const RELEASES = "https://github.com/maiznadeem/NFTMarketplace/releases/latest";

const NftMarketplace = () => (
    <>
        <h2>About</h2>
        <p>
            NFT Marketplace is a native Android app for browsing curated digital art. You can search the collection, open any piece to see its artwork, creator, price, description and full bid history, and switch between handcrafted light and dark themes.
        </p>

        <h2>Features</h2>
        <ul>
            <li><strong>Live collection:</strong> NFTs stream from the Firebase Realtime Database and update instantly.</li>
            <li><strong>Instant search:</strong> filter the collection by name as you type.</li>
            <li><strong>Rich details:</strong> artwork, creator, price, description and every bid for each piece.</li>
            <li><strong>Light and dark themes:</strong> follows the system by default, with a one-tap toggle that's remembered.</li>
            <li><strong>Native feel:</strong> edge-to-edge layout, an adaptive themed app icon and a branded splash screen.</li>
        </ul>

        <h2>Screenshots</h2>
        <div className="shot-grid phones framed">
            <img {...shots.homeLight} width="360" height="768" sizes={SIZES.phone} alt="Home, light theme" />
            <img {...shots.detailsLight} width="360" height="768" sizes={SIZES.phone} alt="Details, light theme" loading="lazy" />
            <img {...shots.homeDark} width="360" height="768" sizes={SIZES.phone} alt="Home, dark theme" loading="lazy" />
            <img {...shots.detailsDark} width="360" height="768" sizes={SIZES.phone} alt="Details, dark theme" loading="lazy" />
        </div>

        <h2>Locked-Down Backend</h2>
        <p>The backend serves this app and nothing else:</p>
        <ul>
            <li><strong>App Check with Play Integrity:</strong> every database request must prove it comes from the genuine, signed app on a genuine device. Anything else gets refused.</li>
            <li><strong>Database rules:</strong> only the NFT collection can be read, and all writes are denied.</li>
            <li><strong>Restricted API key:</strong> it only works for this app's package and release certificate.</li>
            <li><strong>No public files:</strong> the artwork lives in the database itself, so the same checks protect it.</li>
        </ul>

        <h2>Install</h2>
        <ol>
            <li>Open the <a href={RELEASES} target="_blank" rel="noopener noreferrer">latest release</a> on your Android phone (Android 7.0 or later) and download the APK.</li>
            <li>Open it and allow your browser to install apps when Android asks.</li>
            <li>Updates install over the previous version. Each APK ships with a SHA-256 checksum.</li>
        </ol>
        <p>Rooted phones, custom ROMs and emulators can't pass the device check, so they can't load the collection.</p>

        <h2>Tech Stack</h2>
        <ul>
            <li><strong>App:</strong> React Native 0.88 and Expo SDK 58 with React 19 and React Navigation 7.</li>
            <li><strong>Backend:</strong> React Native Firebase with the Realtime Database and App Check.</li>
            <li><strong>Builds:</strong> signed release APKs built locally with Gradle, published on GitHub Releases.</li>
        </ul>
    </>
);

export default NftMarketplace;
