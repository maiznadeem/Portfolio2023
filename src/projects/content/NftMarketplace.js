import React from 'react';

const NftMarketplace = () => (
    <>
        <p>This repository contains the source code for a modern NFT Marketplace app built using React Native. The app allows users to explore and trade various digital assets as non-fungible tokens (NFTs).</p>

        <h2>Features</h2>
        <ul>
            <li>Browse and discover a wide range of NFTs from different artists and creators.</li>
            <li>Buy and sell NFTs securely using integrated cryptocurrency payments.</li>
            <li>Create and mint your own NFTs to showcase your digital creations.</li>
            <li>Connect with a vibrant community of artists, collectors, and enthusiasts.</li>
        </ul>

        <h2>Screenshots</h2>
        <div className="shot-grid phones">
            <img src="https://raw.githubusercontent.com/MaizNadeem/NFT-Marketplace/main/images/Image%201.jpg" alt="Home Page" />
            <img src="https://raw.githubusercontent.com/MaizNadeem/NFT-Marketplace/main/images/Image%202.jpg" alt="Details Page" loading="lazy" />
        </div>

        <h2>Download</h2>
        <p>You can download the Android build of the app from here: <a href="https://github.com/MaizNadeem/NFT-Marketplace.git" target="_blank" rel="noopener noreferrer">NFT Marketplace App (apk)</a></p>

        <h2>Technologies Used</h2>
        <ul>
            <li>React Native Expo</li>
            <li>Firebase Realtime Database</li>
            <li>React Navigation</li>
        </ul>
    </>
);

export default NftMarketplace;
