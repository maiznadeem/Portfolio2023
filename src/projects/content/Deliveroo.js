import React from 'react';

const Deliveroo = () => (
    <>
        <p>Deliveroo Clone with React Native Expo (React Navigation, Redux, Tailwind CSS & Firebase)</p>

        <h2>Installation</h2>
        <p>To install the Deliveroo app on your Android device, follow these steps:</p>
        <ol>
            <li>Download the APK file from the following link: <a href="https://drive.google.com/file/d/1yGeEmzMSG1cvEjTx2Am3kkB4xIG3apDv/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download APK</a></li>
            <li>Once the APK is downloaded, open it on your Android device.</li>
            <li>If prompted, allow the installation of apps from unknown sources in your device settings.</li>
            <li>Follow the on-screen instructions to install the app.</li>
            <li>Once the installation is complete, you can open the app and start using the Deliveroo Clone with React Native!</li>
        </ol>
        <p>Please note that this installation method is for Android devices only.</p>

        <h2>About the Project</h2>
        <p>The "Deliveroo" app is a React Native Expo application for food delivery. It utilizes a variety of technologies to create a comprehensive solution. Here's an overview of the project:</p>

        <h3>Project Description</h3>
        <p>The "Deliveroo" app aims to provide a seamless food delivery experience to users. It offers a range of screens to facilitate different functionalities, including:</p>
        <ul>
            <li><strong>Splash Screen:</strong> Initial screen with branding and loading indicators.</li>
            <li><strong>Login and Signup Screens:</strong> Enable users to create accounts or authenticate for personalized features.</li>
            <li><strong>Dashboard Screen:</strong> Main screen to browse, search restaurants, explore menus, and place orders.</li>
            <li><strong>Basket Screen:</strong> Display items in the user's basket for order review and modification.</li>
            <li><strong>Profile Screen:</strong> Manage personal info, view order history, and customize preferences.</li>
            <li><strong>Restaurant Screen:</strong> Detailed info about a specific restaurant, including menu, reviews, and location.</li>
            <li><strong>Delivery Screen:</strong> Track the status and progress of ongoing food delivery, including estimated arrival time.</li>
        </ul>

        <h2>Screenshots</h2>
        <div className="shot-grid phones">
            <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/4.jpg" alt="Deliveroo screenshot 1" />
            <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/5.jpg" alt="Deliveroo screenshot 2" loading="lazy" />
            <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/6.jpg" alt="Deliveroo screenshot 3" loading="lazy" />
            <img src="https://raw.githubusercontent.com/MaizNadeem/Deliveroo-2.0/main/Screenshots/7.jpg" alt="Deliveroo screenshot 4" loading="lazy" />
        </div>

        <h2>Technologies</h2>

        <h3>Front-end</h3>
        <ul>
            <li><strong>React Native:</strong> A popular JavaScript framework for building native mobile applications.</li>
            <li><strong>Redux:</strong> A state management library that helps manage the app's global state and facilitates data flow between components.</li>
            <li><strong>React Navigation:</strong> A routing and navigation library for React Native that allows seamless navigation between different screens.</li>
            <li><strong>Tailwind CSS:</strong> A utility-first CSS framework used for styling the app's user interface.</li>
        </ul>

        <h3>API</h3>
        <ul>
            <li><strong>Google Maps (Cloud API):</strong> An API provided by Google Maps that enables integration with maps and location-based services.</li>
        </ul>

        <h3>Back-end (Firebase)</h3>
        <ul>
            <li><strong>Firestore:</strong> A NoSQL database provided by Firebase for storing and syncing data in real-time.</li>
            <li><strong>Firebase Authentication:</strong> Firebase service for user authentication, enabling users to sign up and log in securely.</li>
            <li><strong>Storage Bucket:</strong> Firebase's storage service for storing and serving user-generated content like images and videos.</li>
            <li><strong>Cloud Functions:</strong> Serverless functions that run in response to events in Firebase, allowing custom server-side logic.</li>
            <li><strong>GraphQL:</strong> A query language and runtime that enables efficient communication between the client and server, reducing unnecessary data transfers and improving performance.</li>
            <li><strong>Node JS:</strong> A server-side JavaScript runtime that powers the backend server of the app, handling authentication, data retrieval, and server-side operations.</li>
        </ul>
    </>
);

export default Deliveroo;
