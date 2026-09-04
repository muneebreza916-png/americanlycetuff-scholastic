import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Sparkles,
  GraduationCap,
  Facebook,
  Instagram,
  Video,
  Cake,
  PartyPopper,
} from 'lucide-react';
import brandLogo from '../assets/images/logo 2.png';

interface NavbarProps {
  currentPage?: 'home' | 'campus-life';
  onNavigate?: (page: 'home' | 'campus-life', sectionId?: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', sectionId: 'hero', page: 'home' },
    { name: 'About Vision', href: '#vision', sectionId: 'vision', page: 'home' },
    { name: 'Leadership', href: '#leadership', sectionId: 'leadership', page: 'home' },
    { name: 'Campus Architecture', href: '#gallery', sectionId: 'gallery', page: 'home' },
    {
      name: 'Campus Life 🎉',
      href: '#campus-life',
      sectionId: 'campus-life',
      page: 'campus-life',
      isCelebration: true,
    },
    { name: 'Admissions', href: '#admissions', sectionId: 'admissions', page: 'home' },
    { name: 'Contact & Location', href: '#contact', sectionId: 'contact', page: 'home' },
  ];

  const handleLinkClick = (link: (typeof navLinks)[0], e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link.page as any, link.sectionId);
    }
  };

  return (
    <>
      {/* Top micro-bar for Campus announcements, location badge & social handles */}
      <div className="bg-[#040d1c] text-xs text-slate-300 border-b border-white/5 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="https://maps.app.goo.gl/DZt2dpwtpvsUemHw7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-300 hover:text-white transition-colors group"
              title="Open Campus Location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#d90429] mr-1.5 inline group-hover:scale-110 transition-transform" />
              <span className="group-hover:underline underline-offset-2">31 MB, Millitary Accounts, Lahore</span>
            </a>
            <span className="flex items-center text-slate-300 space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#d90429] mr-0.5 inline" />
              <a href="tel:+923099419999" className="hover:text-white transition-colors" title="Call Mobile / WhatsApp Helpline">
                +92 309 9419999
              </a>
              <span className="text-white/30">•</span>
              <a href="tel:+9242111257257" className="hover:text-white transition-colors" title="Call UAN Helpline">
                UAN: +92 42 111 257 257
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social handles quick bar */}
            <div className="flex items-center space-x-3 pr-2 border-r border-white/15">
              <a
                href="https://www.tiktok.com/@american.lycetuff.sc"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok: american.lycetuff.sc"
                className="flex items-center space-x-1 text-slate-300 hover:text-[#00f2fe] transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden lg:inline">american.lycetuff.sc</span>
              </a>
              <a
                href="https://www.instagram.com/american.lycetuff.sc"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram: american.lycetuff.sc"
                className="flex items-center space-x-1 text-slate-300 hover:text-[#e1306c] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden lg:inline">american.lycetuff.sc</span>
              </a>
              <a
                href="https://www.facebook.com/AmericanLycetuffSC"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook: American Lycetuff SC"
                className="flex items-center space-x-1 text-slate-300 hover:text-[#1877f2] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span className="text-[11px] hidden lg:inline">American Lycetuff SC</span>
              </a>
            </div>

            <button
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('campus-life');
                }
              }}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ffd700]/20 text-[#ffd700] border border-[#ffd700]/40 hover:bg-[#ffd700]/30 transition-colors cursor-pointer"
            >
              <Cake className="w-3 h-3 mr-1 text-[#ffd700]" /> Student Celebrations
            </button>

            <button
              id="topbar-portal-btn"
              onClick={onOpenInquiry}
              className="text-slate-200 hover:text-white font-medium transition-colors cursor-pointer text-[11px]"
            >
              Book Tour
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Glass-morphism Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? 'glass-nav-scrolled py-2.5' : 'glass-nav py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Brand: Official Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home', 'hero');
                }
              }}
              className="flex items-center space-x-3 group text-decoration-none cursor-pointer"
              id="nav-brand-link"
            >
              <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white shadow-md shadow-white/10 ring-2 ring-white/30 group-hover:ring-[#d90429] group-hover:shadow-lg group-hover:shadow-[#d90429]/20 transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d90429]/30 via-white/40 to-[#00205b]/30 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {logoError ? (
                  <div className="h-10 w-10 sm:h-11 sm:w-11 bg-[#00205b] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    ALS
                  </div>
                ) : (
                  <img
                    src={brandLogo}
                    alt="American Lycetuff Scholastic Campus Logo"
                    className="nav-logo h-10 sm:h-11 w-auto max-w-[130px] sm:max-w-[155px] object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== brandLogo) {
                        target.src = brandLogo;
                      } else if (!target.src.endsWith('logo 2.png')) {
                        target.src = 'logo 2.png';
                      } else {
                        setLogoError(true);
                      }
                    }}
                  />
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-['Montserrat'] font-extrabold text-base sm:text-lg tracking-tight text-white uppercase group-hover:text-[#ef233c] transition-colors">
                    American Lycetuff
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-300 uppercase flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d90429] mr-1.5 animate-pulse"></span>
                  Scholastic Campus • Lahore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  (link.page === 'campus-life' && currentPage === 'campus-life') ||
                  (link.page === 'home' && currentPage === 'home' && link.name === 'Home');

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link, e)}
                    id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      link.isCelebration
                        ? currentPage === 'campus-life'
                          ? 'bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white shadow-md shadow-[#d90429]/40 border border-[#ffd700] font-bold'
                          : 'bg-[#ffd700]/15 text-[#ffd700] hover:bg-[#ffd700]/25 border border-[#ffd700]/30 font-semibold'
                        : isActive
                        ? 'text-white bg-white/10 font-semibold'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                id="nav-inquiry-cta"
                onClick={onOpenInquiry}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white uppercase bg-[#d90429] hover:bg-[#b50220] rounded-xl shadow-md shadow-[#d90429]/25 hover:shadow-lg hover:shadow-[#d90429]/40 transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Enroll Now
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07152b] border-b border-[#d90429]/30 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLinkClick(link, e);
                }}
                className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  link.isCelebration
                    ? 'bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white font-bold border border-[#ffd700]'
                    : 'text-slate-200 hover:text-white hover:bg-[#0e2448]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="space-y-1.5 px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Follow Our Socials
                </span>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <a
                    href="https://www.tiktok.com/@american.lycetuff.sc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 py-1.5 px-2 rounded bg-[#0e2448] text-slate-300 hover:text-[#00f2fe]"
                  >
                    <Video className="w-3.5 h-3.5 text-[#00f2fe]" />
                    <span>TikTok: <strong className="text-white font-mono">american.lycetuff.sc</strong></span>
                  </a>
                  <a
                    href="https://www.instagram.com/american.lycetuff.sc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 py-1.5 px-2 rounded bg-[#0e2448] text-slate-300 hover:text-[#e1306c]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                    <span>Instagram: <strong className="text-white font-mono">american.lycetuff.sc</strong></span>
                  </a>
                  <a
                    href="https://www.facebook.com/AmericanLycetuffSC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 py-1.5 px-2 rounded bg-[#0e2448] text-slate-300 hover:text-[#1877f2]"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#1877f2]" />
                    <span>Facebook: <strong className="text-white">American Lycetuff SC</strong></span>
                  </a>
                </div>
              </div>

              {/* Mobile Phone & Helpline Numbers */}
              <div className="px-1 pt-1 grid grid-cols-2 gap-2">
                <a
                  href="tel:+923099419999"
                  className="flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg bg-[#0e2448] text-xs text-slate-200 hover:text-white border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ef233c] shrink-0" />
                  <span className="truncate">+92 309 9419999</span>
                </a>
                <a
                  href="tel:+9242111257257"
                  className="flex items-center justify-center space-x-1.5 py-2 px-2 rounded-lg bg-[#0e2448] text-xs text-slate-200 hover:text-white border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ef233c] shrink-0" />
                  <span className="truncate">UAN: 042-111-257</span>
                </a>
              </div>

              {/* Mobile Address & Map Link */}
              <div className="px-1 pt-1">
                <a
                  href="https://maps.app.goo.gl/DZt2dpwtpvsUemHw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-[#0e2448] text-xs text-slate-300 hover:text-white border border-white/10"
                >
                  <MapPin className="w-4 h-4 text-[#ef233c] shrink-0" />
                  <span className="truncate">31 MB, Millitary Accounts, Lahore</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#d90429] hover:bg-[#b50220] rounded-lg shadow"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Enroll Now / Book Tour
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
