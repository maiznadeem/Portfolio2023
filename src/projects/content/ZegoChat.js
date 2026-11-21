import React from 'react';

const ZegoChat = () => (
    <>
        <h2>Integrate Zego Cloud In-App Chat Into Your React Native Application</h2>

        <p>This repository contains the code for the sample React Native application described in the article "How to Integrate Zego Cloud In-App Chat Into Your React Native Application". The application demonstrates how to integrate Zego Cloud In-App Chat into a React Native app for one-on-one messaging.</p>

        <p>Check out the <a href="https://maiznadeem.medium.com/how-to-integrate-zego-cloud-in-app-chat-into-your-react-native-application-b43d203c57e5" target="_blank" rel="noopener noreferrer">Medium article</a> associated with this project.</p>

        <h2>Prerequisites</h2>
        <ul>
            <li>React Native development environment set up</li>
            <li>Zego account with an app ID and key</li>
            <li>Zim-Engine-ReactNative installed in your project</li>
            <li>Basic knowledge of React Native and JavaScript</li>
        </ul>

        <h2>Getting Started</h2>
        <ol>
            <li>Clone this repository</li>
            <li>Install the dependencies by running <code>npm install</code> or <code>yarn install</code></li>
            <li>Update <code>src/assets/config.js</code> with your Zego app ID and key</li>
            <li>Run the app using <code>react-native run-android</code> or <code>react-native run-ios</code></li>
            <li>Enter your username and click "Connect" to join the chat</li>
            <li>Start a conversation with another user by selecting their name from the list</li>
        </ol>
    </>
);

export default ZegoChat;
