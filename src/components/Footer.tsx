import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award, ChevronRight, Heart, Facebook, Instagram, Video, ExternalLink } from 'lucide-react';
import brandLogo from '../assets/images/logo 2.png';

interface FooterProps {
  currentPage?: 'home' | 'campus-life';
  onNavigate?: (page: 'home' | 'campus-life', sectionId?: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage = 'home',
  onNavigate,
  onOpenInquiry,
}) => {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  const socialLinks = [
    {
      platform: 'TikTok',
      username: 'american.lycetuff.sc',
      handleText: '@american.lycetuff.sc',
      url: 'https://www.tiktok.com/@american.lycetuff.sc',
      icon: Video,
      color: 'hover:border-[#00f2fe] hover:text-[#00f2fe]',
      bgBadge: 'bg-black/60 text-slate-200 border-white/10',
    },
    {
      platform: 'Instagram',
      username: 'american.lycetuff.sc',
      handleText: '@american.lycetuff.sc',
      url: 'https://www.instagram.com/american.lycetuff.sc',
      icon: Instagram,
      color: 'hover:border-[#e1306c] hover:text-[#e1306c]',
      bgBadge: 'bg-black/60 text-slate-200 border-white/10',
    },
    {
      platform: 'Facebook',
      username: 'American Lycetuff SC',
      handleText: 'American Lycetuff SC',
      url: 'https://www.facebook.com/AmericanLycetuffSC',
      icon: Facebook,
      color: 'hover:border-[#1877f2] hover:text-[#1877f2]',
      bgBadge: 'bg-black/60 text-slate-200 border-white/10',
    },
  ];

  return (
    <footer id="contact" className="bg-[#040d1c] text-white border-t border-[#d90429]/30 relative overflow-hidden">
      {/* Top Red Glow Ambient line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#d90429] via-[#ef233c] to-[#1e3a68]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative p-2 rounded-xl bg-white shadow-lg ring-2 ring-white/30 hover:ring-[#d90429] transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d90429]/40 via-white/50 to-[#00205b]/40 rounded-xl blur-sm opacity-60 pointer-events-none" />
                {logoError ? (
                  <div className="h-12 w-12 bg-[#00205b] text-white rounded-lg flex items-center justify-center font-bold text-base">
                    ALS
                  </div>
                ) : (
                  <img
                    src={brandLogo}
                    alt="American Lycetuff Scholastic Campus Logo"
                    className="h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain relative z-10"
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
              <div>
                <span className="font-['Montserrat'] font-extrabold text-lg sm:text-xl tracking-tight text-white uppercase block">
                  American Lycetuff
                </span>
                <span className="text-xs font-semibold text-[#ef233c] tracking-widest uppercase block">
                  Scholastic Campus • Lahore
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Empowering young scholars with academic excellence, ethical grounding, and future-ready innovation. Located at 31 MB, Millitary Accounts, Lahore.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#0e2448] text-slate-200 border border-white/10">
                <Award className="w-3.5 h-3.5 text-[#ef233c] mr-1" /> Cambridge Certified
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#0e2448] text-slate-200 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#ef233c] mr-1" /> Federal Board (FBISE)
              </span>
            </div>

            {/* Official Social Media Handles */}
            <div className="pt-3">
              <span className="text-xs font-bold font-['Montserrat'] uppercase tracking-wider text-slate-300 block mb-2.5">
                Official Social Media Handles
              </span>
              <div className="space-y-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-2 rounded-lg bg-[#07152b] border border-white/10 transition-all text-xs text-slate-200 ${social.color} hover:bg-[#0e2448] group`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <div className="p-1 rounded bg-white/5 group-hover:bg-white/10">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-white mr-1.5">{social.platform}:</span>
                          <span className="text-slate-300 font-mono">{social.username}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Location & Contact Details (Military Accounts Lahore - 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold font-['Montserrat'] uppercase tracking-wider text-white flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#d90429] mr-2"></span>
              Lahore Campus Location
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#d90429] mr-3 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-white block">Military Accounts Campus:</strong>
                  <span className="text-slate-300 block">31 MB, Millitary Accounts, Lahore</span>
                  <a
                    href="https://maps.app.goo.gl/DZt2dpwtpvsUemHw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#ef233c] hover:text-[#ff4d6d] font-semibold transition-colors mt-0.5 group"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Phone className="w-5 h-5 text-[#d90429] mr-3 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-x-3 text-white font-medium">
                    <a href="tel:+923099419999" className="hover:text-[#ef233c] transition-colors" title="Admissions & WhatsApp Helpline">
                      +92 309 9419999
                    </a>
                    <span className="text-slate-500">•</span>
                    <a href="tel:+9242111257257" className="hover:text-[#ef233c] transition-colors" title="UAN Helpline">
                      UAN: +92 42 111 257 257
                    </a>
                  </div>
                  <span className="text-xs text-slate-400 block">Admissions Helpline & WhatsApp: +92 309 9419999</span>
                </div>
              </li>

              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#d90429] mr-3 shrink-0" />
                <span className="text-slate-200 hover:text-white transition-colors">
                  scholastic.lahore@americanlycetuff.edu.pk
                </span>
              </li>

              <li className="flex items-start">
                <Clock className="w-5 h-5 text-[#d90429] mr-3 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Campus Working Hours:</span>
                  <span className="text-xs text-slate-300">Monday – Saturday: 7:30 AM – 3:30 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Action (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold font-['Montserrat'] uppercase tracking-wider text-white flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#d90429] mr-2"></span>
              Quick Access & Portals
            </h3>

            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <a
                href="#hero"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'hero');
                  }
                }}
                className="hover:text-[#ef233c] flex items-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#d90429]" /> Home
              </a>
              <a
                href="#vision"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'vision');
                  }
                }}
                className="hover:text-[#ef233c] flex items-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#d90429]" /> Our Vision
              </a>
              <a
                href="#leadership"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'leadership');
                  }
                }}
                className="hover:text-[#ef233c] flex items-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#d90429]" /> Leadership
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('home', 'gallery');
                  }
                }}
                className="hover:text-[#ef233c] flex items-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#d90429]" /> Architecture
              </a>
              <a
                href="#campus-life"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('campus-life');
                  }
                }}
                className="hover:text-[#ffd700] text-[#ffd700] flex items-center transition-colors cursor-pointer font-semibold col-span-2 mt-1"
              >
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#ffd700]" /> Campus Life & Celebrations 🎉
              </a>
            </div>

            <div className="pt-3">
              <div className="p-4 rounded-xl bg-[#07152b] border border-white/10 space-y-2">
                <div className="text-xs font-semibold text-white">Admissions Open 2026-2027</div>
                <p className="text-xs text-slate-300">
                  Book an individualized meeting with our academic counselors.
                </p>
                <button
                  id="footer-book-tour-btn"
                  onClick={onOpenInquiry}
                  className="w-full mt-2 py-2 px-3 bg-[#d90429] hover:bg-[#b50220] text-white text-xs font-bold uppercase rounded-lg tracking-wider transition-colors cursor-pointer shadow"
                >
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <strong>American Lycetuff, Scholastic Campus</strong> (Military Accounts, Lahore). All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Admission</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer flex items-center">
              Designed with <Heart className="w-3 h-3 text-[#ef233c] mx-1 fill-current" /> for ALS Scholastic
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

