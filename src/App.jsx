import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Activities from './assets/pages/Activities';
import News from './assets/pages/News';
import Partnerships from './assets/pages/Partnerships';
import Gallery from './assets/pages/Gallery';
import Testimonials from './assets/pages/Testimonials';
import Contact from './assets/pages/Contact';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <div className="flag-loader">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
                <h2>Les Amis de L'Allemagne</h2>
            </div>
        );
    }

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <ScrollToTop />
                <div className="app">
                    <Navbar />
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/activities" element={<Activities />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/partnerships" element={<Partnerships />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                </div>
            </Router>
        </I18nextProvider>
    );
}

export default App;
