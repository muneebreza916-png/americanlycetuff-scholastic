import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutVisionSection } from './components/AboutVisionSection';
import { LeadershipSection } from './components/LeadershipSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { CampusLifePage } from './components/CampusLifePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'campus-life'>('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#campus-life') {
        setCurrentPage('campus-life');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'campus-life', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'campus-life') {
      window.location.hash = '#campus-life';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = sectionId ? `#${sectionId}` : '#';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07152b] text-slate-100 font-['Poppins',sans-serif] selection:bg-[#d90429] selection:text-white flex flex-col justify-between">
      {/* 1. Glass-morphism Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {currentPage === 'campus-life' ? (
          <CampusLifePage
            onBackToHome={() => handleNavigate('home', 'hero')}
            onOpenInquiry={handleOpenInquiry}
          />
        ) : (
          <>
            {/* 2. Revolutionary Hero Section with GSAP Text Reveal & Student Animation */}
            <HeroSection onOpenInquiry={handleOpenInquiry} />

            {/* 3. About Our Vision with Scroll-Triggered Slide-In Text */}
            <AboutVisionSection />

            {/* 4. Leadership & Visionaries (3-Column Grid with GSAP Hover Lift) */}
            <LeadershipSection />

            {/* 5. Campus Architecture & Facilities Showcase */}
            <GallerySection onOpenInquiry={handleOpenInquiry} />

            {/* Admissions Roadmap & Next Steps */}
            <AdmissionsSection onOpenInquiry={handleOpenInquiry} />
          </>
        )}
      </main>

      {/* 6. Navy Blue Footer with Lahore Military Accounts Details */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Admission Inquiry & Campus Tour Modal */}
      <AdmissionModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </div>
  );
}
