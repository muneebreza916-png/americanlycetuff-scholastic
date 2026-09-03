import React, { useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Compass,
  GraduationCap,
  CheckCircle2,
  Star,
  School,
} from 'lucide-react';
import gsap from 'gsap';
import brandLogo from '../assets/images/logo 2.png';
import studentsImg from '../assets/images/2_Students.png';

interface HeroSectionProps {
  onOpenInquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const floatBg1Ref = useRef<HTMLDivElement>(null);
  const floatBg2Ref = useRef<HTMLDivElement>(null);
  const studentsContainerRef = useRef<HTMLDivElement>(null);
  const studentsCardRef = useRef<HTMLDivElement>(null);
  const floatBadge1Ref = useRef<HTMLDivElement>(null);
  const floatBadge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      // Background subtle floating parallax
      if (floatBg1Ref.current) {
        gsap.to(floatBg1Ref.current, {
          y: -30,
          x: 15,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (floatBg2Ref.current) {
        gsap.to(floatBg2Ref.current, {
          y: 25,
          x: -20,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Master Hero Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Badge entry
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.1 }
        );
      }

      // 2. Title Text Reveal
      if (titleContainerRef.current) {
        const words = titleContainerRef.current.querySelectorAll('.reveal-word');
        if (words.length > 0) {
          tl.fromTo(
            words,
            { opacity: 0, y: 40, rotateX: -20 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              stagger: 0.035,
              duration: 1.0,
              ease: 'back.out(1.2)',
            },
            '-=0.4'
          );
        }
      }

      // 3. Subtitle fade-in
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      // 4. CTA buttons stagger
      if (ctaGroupRef.current) {
        const ctaChildren = Array.from(ctaGroupRef.current.children);
        if (ctaChildren.length > 0) {
          tl.fromTo(
            ctaChildren,
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.7 },
            '-=0.5'
          );
        }
      }

      // 5. Right-Side Students Image Animation (Slide in + Scale + Glow)
      if (studentsContainerRef.current) {
        tl.fromTo(
          studentsContainerRef.current,
          { opacity: 0, x: 70, scale: 0.9, rotate: 2 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.8'
        );
      }

      // 6. Floating badges reveal
      if (floatBadge1Ref.current && floatBadge2Ref.current) {
        tl.fromTo(
          [floatBadge1Ref.current, floatBadge2Ref.current],
          { opacity: 0, scale: 0.7, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.5)',
          },
          '-=0.4'
        );
      }

      // 7. Continuous Gentle Floating / Breathing Animation for Student Visual
      if (studentsCardRef.current) {
        gsap.to(studentsCardRef.current, {
          y: -10,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      if (floatBadge1Ref.current) {
        gsap.to(floatBadge1Ref.current, {
          y: -8,
          x: 4,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        });
      }

      if (floatBadge2Ref.current) {
        gsap.to(floatBadge2Ref.current, {
          y: 8,
          x: -5,
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
      }

      // 8. Stat cards reveal
      if (statsRef.current) {
        const statChildren = Array.from(statsRef.current.children);
        if (statChildren.length > 0) {
          tl.fromTo(
            statChildren,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.8 },
            '-=0.4'
          );
        }
      }
    }, heroRef.current);

    return () => ctx.revert();
  }, []);

  const titlePart1 = 'Welcome to the Future of Learning:';
  const titlePart2 = 'American Lycetuff Scholastic Campus.';

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-center bg-gradient-to-b from-[#040d1c] via-[#07152b] to-[#0a1b38] overflow-hidden pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#d90429]/20"
    >
      {/* Dynamic Animated Ambient Background Glows */}
      <div
        ref={floatBg1Ref}
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-[#d90429]/15 blur-[120px] pointer-events-none"
      />
      <div
        ref={floatBg2Ref}
        className="absolute bottom-10 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#1e3a68]/35 blur-[140px] pointer-events-none"
      />
      <div className="absolute inset-0 scholastic-grid-pattern opacity-35 pointer-events-none" />

      {/* Decorative Red & Navy Top Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-1 bg-gradient-to-l from-[#d90429] via-[#ef233c] to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-1 bg-gradient-to-r from-[#1e3a68] to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Main 2-Column Hero Grid: Left Content + Right Animated Student Picture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2">
          
          {/* Left Column: Mission, Headlines, CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Campus Credential & Official Logo Highlight Badge */}
            <div
              ref={badgeRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <div className="relative group inline-flex items-center p-1.5 sm:p-2 rounded-2xl bg-white shadow-xl ring-2 ring-white/40 hover:ring-[#d90429] transition-all duration-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d90429]/40 via-white/50 to-[#00205b]/40 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <img
                  src={brandLogo}
                  alt="American Lycetuff Official Emblem"
                  className="h-9 sm:h-11 w-auto max-w-[160px] sm:max-w-[190px] object-contain relative z-10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== brandLogo) {
                      target.src = brandLogo;
                    } else if (!target.src.endsWith('logo 2.png')) {
                      target.src = 'logo 2.png';
                    }
                  }}
                />
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#0e2448]/90 border border-[#d90429]/40 shadow-lg shadow-[#d90429]/10 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d90429] animate-ping" />
                <ShieldCheck className="w-4 h-4 text-[#ef233c]" />
                <span className="text-white font-semibold">Lahore Scholastic Campus</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-300">31 MB, Millitary Accounts</span>
              </div>
            </div>

            {/* Revolutionary GSAP Text Reveal Title */}
            <h1
              ref={titleContainerRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.15] font-['Montserrat']"
              style={{ perspective: '1000px' }}
            >
              <span className="block text-slate-100 mb-1">
                {titlePart1.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2 sm:mr-2.5 overflow-hidden">
                    <span className="reveal-word inline-block transform-gpu text-slate-100">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#ef233c]">
                {titlePart2.split(' ').map((word, i) => {
                  const isHighlight =
                    word.includes('American') ||
                    word.includes('Lycetuff') ||
                    word.includes('Scholastic');
                  return (
                    <span key={i} className="inline-block mr-2 sm:mr-2.5 overflow-hidden">
                      <span
                        className={`reveal-word inline-block transform-gpu ${
                          isHighlight ? 'text-[#ef233c]' : 'text-white'
                        }`}
                      >
                        {word}
                      </span>
                    </span>
                  );
                })}
              </span>
            </h1>

            {/* Subtitle with scholastic mission statement */}
            <p
              ref={subtitleRef}
              className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Pioneering academic brilliance, leadership character, and world-class innovation at our purpose-built Lahore campus. 
              We nurture confident scholars, compassionate visionaries, and future global leaders.
            </p>

            {/* Interactive CTAs Group */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Required CTA with Pulse on Hover */}
              <a
                href="#vision"
                id="hero-discover-cta"
                className="pulse-on-hover w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#d90429] hover:bg-[#b50220] rounded-xl shadow-xl shadow-[#d90429]/30 transition-all duration-300 border border-[#ef233c]/50 group cursor-pointer"
              >
                <span>Discover Campus</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              {/* Secondary CTA: Inquiry Modal */}
              <button
                onClick={onOpenInquiry}
                id="hero-inquiry-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-[#0e2448]/80 hover:bg-[#122b56] rounded-xl border border-white/15 hover:border-[#d90429]/50 transition-all duration-300 backdrop-blur-md cursor-pointer group"
              >
                <Compass className="w-4 h-4 mr-2 text-[#ef233c] group-hover:rotate-45 transition-transform" />
                <span>Schedule Visit</span>
              </button>

              <a
                href="#leadership"
                id="hero-leadership-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:underline transition-all"
              >
                <span>Leadership &darr;</span>
              </a>
            </div>

            {/* Quick trust checklist */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ef233c]" />
                Cambridge & FBISE Affiliated
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ef233c]" />
                Playgroup to A-Levels / Matric
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ef233c]" />
                Rooftop Turf & PS5 Esports
              </span>
            </div>

          </div>

          {/* Right Column: Animated Two Students Visual Presentation (5 Cols) */}
          <div
            ref={studentsContainerRef}
            className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
          >
            {/* Ambient Background Aura Glow behind students */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d90429]/20 via-[#00f2fe]/10 to-[#d90429]/25 rounded-3xl blur-2xl transform scale-105 pointer-events-none" />

            {/* Main Animated Card containing the Two Students */}
            <div
              ref={studentsCardRef}
              className="relative w-full max-w-md lg:max-w-none rounded-3xl p-3 bg-gradient-to-b from-white/10 via-[#0e2448]/80 to-[#07152b] border border-white/20 shadow-2xl backdrop-blur-md group hover:border-[#d90429]/60 transition-all duration-500"
            >
              {/* Image Container with Rounded Frame and subtle inner vignette */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e2448] to-[#040d1c] shadow-inner">
                <img
                  src={studentsImg}
                  alt="American Lycetuff Scholastic Campus Students"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('2_Students.png')) {
                      target.src = '2_Students.png';
                    }
                  }}
                />

                {/* Subtle bottom gradient to blend cleanly with card details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#040d1c]/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white font-['Montserrat'] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#ef233c]" />
                      Scholastic Student Scholars
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Nurturing academic excellence & future leadership
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#d90429] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">
                    ALS Lahore
                  </span>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div
                ref={floatBadge1Ref}
                className="absolute -top-4 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#07152b]/95 border border-[#d90429]/50 shadow-xl backdrop-blur-md text-white text-xs flex items-center gap-2 z-20"
              >
                <div className="p-1 rounded-full bg-[#d90429] text-white">
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-[11px] leading-tight">35+ Years of Legacy</div>
                  <div className="text-[10px] text-slate-300">Inspiring Tomorrow's Leaders</div>
                </div>
              </div>

              {/* Floating Bottom Badge */}
              <div
                ref={floatBadge2Ref}
                className="absolute -bottom-4 -right-2 sm:-right-5 px-3.5 py-2 rounded-2xl bg-[#0e2448]/95 border border-white/20 shadow-xl backdrop-blur-md text-white text-xs flex items-center gap-2 z-20"
              >
                <div className="p-1 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[11px] leading-tight">Holistic Growth</div>
                  <div className="text-[10px] text-slate-300">Academics, Esports & Sports</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Key Campus Quick Indicators & Stats */}
        <div
          ref={statsRef}
          className="mt-12 pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 border-t border-white/10"
        >
          <div className="bg-[#0e2448]/50 p-3.5 sm:p-4 rounded-xl border border-white/5 backdrop-blur-sm text-center hover:border-[#d90429]/40 transition-colors">
            <div className="flex items-center justify-center text-[#ef233c] mb-1">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Montserrat']">35+</div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Years of Legacy</div>
          </div>

          <div className="bg-[#0e2448]/50 p-3.5 sm:p-4 rounded-xl border border-white/5 backdrop-blur-sm text-center hover:border-[#d90429]/40 transition-colors">
            <div className="flex items-center justify-center text-[#ef233c] mb-1">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Montserrat']">1:15</div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Teacher-Student Ratio</div>
          </div>

          <div className="bg-[#0e2448]/50 p-3.5 sm:p-4 rounded-xl border border-white/5 backdrop-blur-sm text-center hover:border-[#d90429]/40 transition-colors">
            <div className="flex items-center justify-center text-[#ef233c] mb-1">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Montserrat']">100%</div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Exam Excellence</div>
          </div>

          <div className="bg-[#0e2448]/50 p-3.5 sm:p-4 rounded-xl border border-white/5 backdrop-blur-sm text-center hover:border-[#d90429]/40 transition-colors">
            <div className="flex items-center justify-center text-[#ef233c] mb-1">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-['Montserrat']">STEM+</div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider mt-0.5">Robotics & AI Labs</div>
          </div>
        </div>

      </div>
    </section>
  );
};
