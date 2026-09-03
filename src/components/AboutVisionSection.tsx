import React, { useEffect, useRef } from 'react';
import { Target, Compass, Award, HeartHandshake, CheckCircle2, Lightbulb, Globe, BookMarked } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutVisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const slideLeftRef = useRef<HTMLDivElement>(null);
  const slideRightRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // ScrollTrigger Slide-in from Left for Mission Text container
      if (slideLeftRef.current) {
        gsap.fromTo(
          slideLeftRef.current,
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: slideLeftRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ScrollTrigger Slide-in from Right for Vision Highlights container
      if (slideRightRef.current) {
        gsap.fromTo(
          slideRightRef.current,
          { opacity: 0, x: 80 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: slideRightRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // ScrollTrigger Stagger for 4 Pillars Cards
      if (pillarsRef.current) {
        const cards = Array.from(pillarsRef.current.children);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: pillarsRef.current,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // ScrollTrigger Slide-in for Quote banner
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: 'back.out(1.1)',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: Lightbulb,
      title: 'Innovative Pedagogy',
      desc: 'Integrating hands-on inquiry, robotics, coding, and problem-solving into everyday learning.',
      color: 'border-[#d90429]',
    },
    {
      icon: Target,
      title: 'Academic Mastery',
      desc: 'Rigorous national and Cambridge standards ensuring outstanding intellectual competence.',
      color: 'border-[#07152b]',
    },
    {
      icon: HeartHandshake,
      title: 'Character & Ethics',
      desc: 'Instilling empathy, honesty, discipline, and societal responsibility in every student.',
      color: 'border-[#d90429]',
    },
    {
      icon: Globe,
      title: 'Global Citizenship',
      desc: 'Empowering students with cross-cultural fluency, leadership confidence, and environmental stewardship.',
      color: 'border-[#07152b]',
    },
  ];

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative bg-white text-[#07152b] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden scholastic-grid-light"
    >
      {/* Red vertical decorative accent stripe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#d90429] rounded-b-md" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#d90429]">
            <Compass className="w-4 h-4 text-[#d90429]" />
            <span>Our Guiding Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat'] tracking-tight text-[#07152b]">
            Nurturing Inquiring Minds, <br />
            <span className="text-[#d90429]">Inspiring Future Leaders.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            At American Lycetuff Scholastic Campus, Lahore, education transcends textbooks—it is an inspiring voyage of intellectual curiosity and human integrity.
          </p>
        </div>

        {/* 2-Column Split: ScrollTrigger Slide-in Left & Right Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Slide-in Left: Mission & Educational Philosophy */}
          <div
            ref={slideLeftRef}
            className="lg:col-span-7 bg-[#f8fafc] p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="p-3 bg-[#07152b] text-white rounded-xl shadow-md">
                  <Award className="w-6 h-6 text-[#ef233c]" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#07152b] font-['Montserrat']">
                    Our Scholastic Mission
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d90429]">
                    Shaping Tomorrow Since 1989
                  </span>
                </div>
              </div>

              <p className="text-[#07152b]/85 text-base sm:text-lg leading-relaxed">
                To create a dynamic, inclusive, and forward-thinking educational environment where students discover their unique potential, master 21st-century competencies, and develop steadfast ethical foundations to excel on the world stage.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d90429] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong className="text-[#07152b]">Holistic Student-Centric Pedagogy:</strong> Fostering creative thinking, collaborative problem-solving, and emotional resilience.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d90429] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong className="text-[#07152b]">Next-Gen Learning Infrastructure:</strong> Interactive smart classrooms, robotics labs, and comprehensive digital libraries.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d90429] shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-700">
                    <strong className="text-[#07152b]">Uncompromising Ethical Culture:</strong> Instilling universal values of honesty, respect, civic duty, and social empathy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#d90429]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#07152b]">
                  Lahore Military Accounts Campus
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Accredited Curriculum • Pre-School to O/A-Levels & Matric
              </span>
            </div>
          </div>

          {/* Slide-in Right: Vision Impact & Strategic Objectives */}
          <div
            ref={slideRightRef}
            className="lg:col-span-5 bg-[#07152b] text-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-[#07152b]/20 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Red Accent Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d90429]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-3">
                <span className="p-3 bg-[#d90429] text-white rounded-xl shadow-md">
                  <BookMarked className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-white">
                    Our 2030 Vision
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Excellence In Motion
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We envision American Lycetuff Scholastic Campus as the premier center of academic distinction in Lahore, renowned for producing visionary alumni who lead with intellectual clarity, empathy, and innovation.
              </p>

              {/* Stat highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-[#0e2448] p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ef233c] font-['Montserrat']">100%</div>
                  <div className="text-xs text-slate-300 font-medium mt-1">High-Tier University Placements</div>
                </div>
                <div className="bg-[#0e2448] p-4 rounded-xl border border-white/10">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Montserrat']">25+</div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Co-Curricular & Sports Clubs</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <p className="text-xs text-slate-400 italic">
                &ldquo;Education is not the learning of facts, but the training of the mind to think.&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards Grid */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-white border-2 ${pillar.color} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#07152b] text-[#ef233c] flex items-center justify-center mb-4 group-hover:bg-[#d90429] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#07152b] font-['Montserrat'] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#d90429]">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scholastic Campus Affirmation Banner */}
        <div
          ref={quoteRef}
          className="rounded-2xl bg-gradient-to-r from-[#07152b] via-[#0e2448] to-[#07152b] text-white p-8 sm:p-10 border border-[#d90429]/30 text-center relative overflow-hidden shadow-xl"
        >
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Montserrat']">
              Experience Education Redefined at <span className="text-[#ef233c]">Military Accounts, Lahore</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every classroom is an incubator of curiosity. Every student is recognized as a leader of tomorrow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
