import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// New page: start at the top. Link to a section (/#projects): scroll to it once rendered,
// smoothly within a page, instantly when arriving from another page.
const ScrollManager = () => {
    const { pathname, hash, key } = useLocation();
    const lastPath = useRef(pathname);

    useEffect(() => {
        const samePage = lastPath.current === pathname;
        lastPath.current = pathname;
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
            return undefined;
        }
        const frame = requestAnimationFrame(() => {
            document.getElementById(decodeURIComponent(hash.slice(1)))
                ?.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' });
        });
        return () => cancelAnimationFrame(frame);
    }, [pathname, hash, key]);

    return null;
};

const Home = () => (
    <>
        <Banner />
        <Skills />
        <Projects />
        <Info />
        <Contact />
    </>
);

function App() {
    return (
        <div className="App">
            <a className="skip-link" href="#main">Skip to content</a>
            <ScrollManager />
            <NavigationBar />
            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:slug" element={<ProjectPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
