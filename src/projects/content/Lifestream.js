import React from 'react';

import { loadImages, SIZES } from '../../utils/images';

const shots = loadImages(require.context('../../assets/screens/lifestream', false, /\.webp$/));

const REPO = "https://github.com/maiznadeem/Lifestream";

const VIEWS = [
    [shots.donors, "Donors"],
    [shots.patients, "Patients"],
    [shots.appointments, "Appointments"],
    [shots.requests, "Requests"],
    [shots.stock, "Stock"],
    [shots.receipts, "Receipts"],
    [shots.staff, "Staff"],
    [shots.profile, "Profile"],
];

const Lifestream = () => (
    <>
        <h2>About</h2>
        <p>
            Lifestream is a blood bank management desktop app for Windows. Staff use it to manage donors, patients, appointments, blood requests, stock and receipts, with a dashboard that puts what needs attention first. Version 2 is a ground-up rewrite of my original Database Systems course project on .NET 11: everything the first version did is still there, and how it works, how fast it is and how it looks are new.
        </p>

        <h2>Highlights</h2>
        <ul>
            <li><strong>Secure by design:</strong> The desktop app never talks to the database. It calls a web service over HTTPS, and only that service reaches the database, using a managed identity instead of a password. Sign-in uses short-lived tokens, passwords are stored only as salted hashes, and the server checks what each person may do on every action.</li>
            <li><strong>Built for the PC it runs on:</strong> A calm light look with a matching dark theme that follows Windows, the Mica material on Windows 11, and the Google Sans Flex typeface.</li>
            <li><strong>Needs attention first:</strong> The dashboard lists requests stock can't cover, bags about to expire and blood groups below their minimum, each with the button that deals with it, alongside today's appointments, stock by group and a 12-month chart.</li>
            <li><strong>Fast from the keyboard:</strong> Ctrl+K searches donors, patients and requests, opens any screen or runs an action. Search finds part of a name or phone number, or a record code such as D-0041.</li>
            <li><strong>One pattern on every screen:</strong> Paged lists with a details panel beside them. Requests show whether stock can cover them and which bags to issue, oldest first. Each donation can be traced to the patient it went to.</li>
            <li><strong>Automatic updates:</strong> The app checks for a newer version when it starts and installs it with a restart.</li>
        </ul>
        <p>Every change is listed in the <a href={`${REPO}/blob/master/CHANGELOG.md`} target="_blank" rel="noopener noreferrer">changelog</a>.</p>

        <h2>Installation Instructions</h2>
        <ol>
            <li>Open the <a href={`${REPO}/releases/latest`} target="_blank" rel="noopener noreferrer">latest release</a> and download <code>Lifestream-win-Setup.exe</code>. It needs Windows 10 or 11, 64-bit.</li>
            <li>Optionally, check the download against <code>SHA256SUMS.txt</code> from the same release. The steps are in the <a href={`${REPO}#install`} target="_blank" rel="noopener noreferrer">README</a>.</li>
            <li>Run the installer. It is not code-signed, so Windows SmartScreen may say "Windows protected your PC": choose "More info", then "Run anyway".</li>
            <li>The app installs for your user only and needs no administrator rights.</li>
        </ol>

        <h2>Try the Demo</h2>
        <p>
            Start Lifestream and press "Try the demo" on the sign-in screen. No account, username or password is needed. The demo clinic uses made-up people only and is reset every day. After a quiet period the server takes about a minute and a half to wake up, and the sign-in window shows its progress.
        </p>

        <h2>Screenshots</h2>
        <p>These screenshots are taken through the real app, using the demo data:</p>

        <h3>Sign In</h3>
        <figure className="shot">
            <img {...shots.login} width="1366" height="768" sizes={SIZES.shot} alt="Sign In Screen" />
        </figure>

        <h3>Dashboard</h3>
        <figure className="shot">
            <img {...shots.dashboard} width="1366" height="768" sizes={SIZES.shot} alt="Dashboard" loading="lazy" />
        </figure>

        <h3>Other Views</h3>
        <div className="shot-grid">
            {VIEWS.map(([shot, label]) => (
                <img key={label} {...shot} width="1366" height="768" sizes={SIZES.half} alt={`${label} View`} loading="lazy" />
            ))}
        </div>

        <p>You can find all the application screenshots <a href={`${REPO}/tree/master/docs/screenshots`} target="_blank" rel="noopener noreferrer">here</a>.</p>

        <h2>Architecture</h2>
        <p>
            The WPF desktop client talks to an ASP.NET Core API over HTTPS with JWT sign-in. The API runs on Azure Container Apps behind a Cloudflare Worker, with ingress limited to Cloudflare, and is the only code that reaches the Azure SQL database, through EF Core and a managed identity.
        </p>
        <ul>
            <li><strong>Lifestream.Domain:</strong> Blood types, statuses and the rules for donor eligibility and shelf life.</li>
            <li><strong>Lifestream.Contracts:</strong> Every request, response and route shared by the API and the client.</li>
            <li><strong>Lifestream.Data:</strong> The EF Core context, migrations and the demo data generator.</li>
            <li><strong>Lifestream.Api:</strong> A minimal API with one folder per feature.</li>
            <li><strong>Lifestream.Client:</strong> View models, services and the API client, with no WPF or database reference.</li>
            <li><strong>Lifestream.Desktop:</strong> WPF views, the design system, the app host and the updater.</li>
        </ul>
        <p>
            The entity relationship diagram is in the <a href={`${REPO}/blob/master/docs/database.md`} target="_blank" rel="noopener noreferrer">database documentation</a>, and the full requirements are in <a href={`${REPO}/blob/master/docs/requirements.md`} target="_blank" rel="noopener noreferrer">requirements.md</a>.
        </p>

        <h2>Technologies Used</h2>
        <p>
            Lifestream 2 is built using the following technologies:
        </p>
        <ul>
            <li><strong>.NET 11:</strong> The desktop client, the API and the shared libraries all target .NET 11.</li>
            <li><strong>WPF (Windows Presentation Foundation):</strong> The user interface is built using WPF with the MVVM pattern.</li>
            <li><strong>ASP.NET Core:</strong> A minimal API with JWT bearer authentication, hosted on Azure Container Apps behind a Cloudflare Worker and Cloudflare's WAF.</li>
            <li><strong>Entity Framework Core and Azure SQL:</strong> The schema exists only as versioned EF Core migrations, and the API connects with a managed identity.</li>
            <li><strong>GitHub Actions and Bicep:</strong> Workflows for CI, the API deployment and secret scanning, with the Azure infrastructure defined in Bicep.</li>
            <li><strong>NuGet Packages:</strong>
                <ul>
                    <li><strong>WPF-UI (Lepoco):</strong> Used for the window, the Mica backdrop and the base controls.</li>
                    <li><strong>LiveCharts 2:</strong> Used for the dashboard chart of donations and issues.</li>
                    <li><strong>CommunityToolkit.Mvvm:</strong> Used for the view models and commands.</li>
                    <li><strong>Velopack:</strong> Used for the installer and automatic updates.</li>
                    <li><strong>xUnit:</strong> One test project for each source project, plus off-screen UI render tests.</li>
                </ul>
            </li>
        </ul>
    </>
);

export default Lifestream;
