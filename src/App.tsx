import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import { APP_NAME } from './constants';

// Import pages
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import CookiePolicy from './pages/CookiePolicy';

// HomePage component for the main landing page
const HomePage = () => {
  useEffect(() => {
    // Update document title
    document.title = `${APP_NAME} - Buy & Sell Anything, Anywhere`;
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <DownloadCTA />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-16 xs:pt-20"> {/* Add padding to account for fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/refunds" element={<RefundPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;