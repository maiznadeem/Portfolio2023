import React from 'react';

import './projects.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

import home from '../screens/greatread/home.webp';
import category from '../screens/greatread/category-leadership.webp';
import quotesSearch from '../screens/greatread/book-quotes-search.webp';
import readingList from '../screens/greatread/reading-list.webp';
import readingListPdf from '../screens/greatread/reading-list-pdf-preview.webp';
import notesPricing from '../screens/greatread/notes-pricing.webp';
import notesSelection from '../screens/greatread/notes-book-selection.webp';
import adminBooks from '../screens/greatread/admin-books.webp';
import adminEditor from '../screens/greatread/admin-book-editor.webp';
import mobileHome from '../screens/greatread/mobile-home.webp';

const REPO = "https://github.com/maiznadeem/great-read";
const SITE = "https://greatread.himaiz.com";

const EighthProjectHTML = () => {
    return (
        <div className="html-container">

            <div className="button-container-modal">
                <Button className="custom-button text-only-modal" onClick={() => window.open(SITE, "_blank")}>
                    <span>Visit Great Read</span>
                </Button>
                <Button className="custom-button icon-and-text-modal" onClick={() => window.open(REPO, "_blank")}>
                    <AiOutlineLink />
                    <>Go to Source</>
                </Button>
            </div>

            <h2>About</h2>
            <p>
                Great Read is a book-discovery site for non-fiction readers. It pairs a library of over 2,100 books across 40 categories with standout quotes, monthly top picks and a reading-list builder. Readers can also buy personalised study notes: the key ideas from 10 or 30 books of their choice, delivered as Word and PDF files.
            </p>

            <h2>Try It</h2>
            <ul>
                <li>Browse and search the whole library, filter by category, and read every book's quote.</li>
                <li>Build a reading list, or let the site fill the shelf from the categories you choose, then download it as a PDF or share it on LinkedIn.</li>
                <li>On the <a href={`${SITE}/notes`}>notes page</a>, compare the bundles, pick books and go through to checkout. Stripe runs in test mode, so the card <code>4242 4242 4242 4242</code> completes a test purchase and unlocks the generated DOCX and PDF downloads.</li>
            </ul>

            <h2>Features</h2>
            <h3>For readers</h3>
            <ul>
                <li>A library of book covers, each with a highlighted quote, its category icons and links to buy it on Amazon or read it on Perlego.</li>
                <li>Filtering by category, search by title or author, and paging.</li>
                <li>Three top picks for each month.</li>
                <li>A reading-list builder: a short wizard asks for your name, a time period from one week to one year, and how many books, then lets you pick them or fills the shelf for you. The list downloads as a branded PDF made in the browser.</li>
                <li>Paid notes with 5 to 8 key insights per book, in three bundles, with optional space for your own thoughts. After payment the server builds the document and offers DOCX and PDF downloads through short-lived signed links.</li>
                <li>A responsive layout for phones.</li>
            </ul>
            <h3>For admins</h3>
            <ul>
                <li>A separate admin console with password sign-in, password-reset email and secure cookie sessions.</li>
                <li>A dashboard with library counts and the current top picks.</li>
                <li>Book management: search, sort, add, edit and delete books, with cover upload, categories, buy links, quotes and notes. Uploaded covers are re-compressed automatically.</li>
                <li>Category management with icon upload, and the monthly top picks.</li>
            </ul>

            <h2>Screenshots</h2>

            <h3>Home</h3>
            <div className='main-screen'>
                <img src={home} alt="Great Read home page" />
            </div>

            <h3>Library, Reading List and Notes</h3>
            <div className='screenshot-grid'>
                <img src={category} alt="Library filtered to the Leadership category" loading="lazy" />
                <img src={quotesSearch} alt="Search results with quotes and buy links" loading="lazy" />
                <img src={readingList} alt="A finished reading list" loading="lazy" />
                <img src={readingListPdf} alt="Reading list PDF export" loading="lazy" />
                <img src={notesPricing} alt="Notes bundles and page preview" loading="lazy" />
                <img src={notesSelection} alt="Choosing books for notes" loading="lazy" />
            </div>

            <h3>Admin Console and Mobile</h3>
            <div className='screenshot-grid'>
                <img src={adminBooks} alt="Admin books list" loading="lazy" />
                <img src={adminEditor} alt="Admin book editor" loading="lazy" />
            </div>
            <div className='screenshot-grid phones'>
                <img src={mobileHome} alt="Home page on a phone" loading="lazy" />
            </div>

            <h2>Architecture</h2>
            <p>
                The reader site and the admin console are two Vercel projects that deploy from main, each with its own security headers. The API is a Docker container on Google Cloud Run that scales to zero, built and deployed by a Cloud Build trigger on every push. It runs as its own keyless service account, scoped to two Cloud Storage buckets: a public one for covers and icons, and a private one for purchased documents, which are served through signed URLs and deleted after a day. GitHub Actions lints and builds every push and pull request.
            </p>

            <h2>Technologies Used</h2>
            <ul>
                <li><strong>Reader site:</strong> React 19, Vite, Tailwind CSS, Material UI, React Router, Motion, and @react-pdf/renderer for the reading-list PDF.</li>
                <li><strong>Admin console:</strong> React 19, Vite, Tailwind CSS and React Router.</li>
                <li><strong>API:</strong> Node.js with Express 5 and MongoDB through Mongoose, with sessions stored in MongoDB, shared rate limiting and Helmet security headers.</li>
                <li><strong>Payments and documents:</strong> Stripe Checkout with a webhook for fulfilment, docx to generate the notes, headless LibreOffice for the PDF conversion, and sharp for image compression.</li>
                <li><strong>Infrastructure:</strong> Google Cloud Run, Cloud Build, Cloud Storage, MongoDB Atlas, Vercel, GitHub Actions and Cloudflare DNS.</li>
            </ul>

            <hr />

            <h4 align="center">© M. Maiz Nadeem</h4>
        </div>
    );
}

export default EighthProjectHTML;
