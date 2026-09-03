import React, { useEffect, useRef, useState } from 'react';
import { Quote, Sparkles, Award, ArrowUpRight, CheckCircle, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import chairmanImg from '../assets/images/chairman.png';
import ceoImg from '../assets/images/Ceo.png';
import directorImg from '../assets/images/director.png';

gsap.registerPlugin(ScrollTrigger);

interface LeaderData {
  id: string;
  name: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  subtitle: string;
  quote: string;
  fullMessage: string[];
  keyInitiatives: string[];
  badge: string;
}

export const LeadershipSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [selectedLeader, setSelectedLeader] = useState<LeaderData | null>(null);

  const leaders: LeaderData[] = [
    {
      id: 'chairman',
      name: 'Mr. Moazzam Ghaffar',
      title: 'Chairman',
      imgSrc: chairmanImg,
      imgAlt: 'Chairman Mr. Moazzam Ghaffar',
      subtitle: 'Visionary Founder & Educational Pioneer',
      badge: 'Founding Visionary',
      quote:
        'Our founding commitment is unwavering: to empower every learner with exceptional intellect, courageous character, and unconditional pursuit of excellence.',
      fullMessage: [
        'Welcome to American Lycetuff Scholastic Campus, Lahore. Over the past three decades, our journey has been defined by one foundational truth: great education transforms humanity.',
        'At our Lahore Scholastic Campus in Military Accounts, we have designed a sanctuary for ambitious minds where rigorous academic traditions harmonize with futuristic pedagogical methodologies.',
        'We do not merely prepare students for examinations; we prepare them to illuminate society, champion ethical leadership, and navigate tomorrow’s challenges with unyielding confidence.',
      ],
      keyInitiatives: [
        '35+ Years of Educational Leadership',
        'Visionary Curricular Frameworks',
        'Philanthropic Scholarships & Community Outreach',
      ],
    },
    {
      id: 'ceo',
      name: 'Syed Aitzaz Shah',
      title: 'CEO',
      imgSrc: ceoImg,
      imgAlt: 'CEO Syed Aitzaz Shah',
      subtitle: 'Executive Strategist & Modernizer',
      badge: 'Strategic Leadership',
      quote:
        'We are building a revolutionary academic ecosystem where 21st-century technology, STEM innovation, and global benchmarks ignite student passion.',
      fullMessage: [
        'In an era accelerated by artificial intelligence, globalization, and rapid societal change, schools must lead the vanguard of innovation.',
        'As Chief Executive Officer, my mission is to equip American Lycetuff Scholastic Campus with world-class facilities: from high-performance robotics and computing suites to experiential learning spaces.',
        'Our students develop agile problem-solving capabilities, entrepreneurial mindsets, and digital mastery while remaining anchored in strong moral compasses.',
      ],
      keyInitiatives: [
        'Digital Campus Transformation & STEM Hubs',
        'International Academic Partnerships',
        'Student Leadership Incubation & Sports Arenas',
      ],
    },
    {
      id: 'director',
      name: 'Madam Maha Ali',
      title: 'Director',
      imgSrc: directorImg,
      imgAlt: 'Director Madam Maha Ali',
      subtitle: 'Pedagogical Director & Student Advocate',
      badge: 'Academic & Well-being',
      quote:
        'Every child is uniquely gifted. Our pedagogical philosophy ensures individual mentorship, holistic wellness, and an inspiring standard of scholastic achievement.',
      fullMessage: [
        'Education is deeply personal. It begins with creating an emotionally safe, intellectually vibrant environment where young learners feel celebrated and challenged.',
        'At our Military Accounts Lahore campus, our hand-selected faculty members are mentors who ignite curiosity, foster critical expression, and guide each child towards mastery.',
        'By integrating fine arts, public discourse, physical vitality, and scientific rigor, we nurture resilient, empathetic individuals who leave an indelible positive mark on our world.',
      ],
      keyInitiatives: [
        'Personalized Student Mentorship Pathways',
        'Inclusive & Holistic Child Development',
        'Continuous Faculty Excellence Programs',
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Stagger entrance on scroll for leadership cards
      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 70, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.2,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadership"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#07152b] via-[#091b38] to-[#040d1c] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-[#d90429]/20"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#d90429]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 scholastic-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d90429]/20 border border-[#d90429]/40 text-xs font-bold uppercase tracking-widest text-[#ef233c]">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            <span>Guiding Visionaries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat'] tracking-tight text-white">
            Leadership & Visionaries
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Meet the distinguished educational pioneers orchestrating excellence, integrity, and future-forward learning at American Lycetuff Scholastic Campus, Lahore.
          </p>
        </div>

        {/* 3-Column Dedicated Leadership Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {leaders.map((leader) => (
            <div
              key={leader.id}
              id={`leader-card-${leader.id}`}
              className="leadership-card group relative bg-[#0e2448]/90 rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 sm:p-7 shadow-xl hover:border-[#d90429]/50 transition-all duration-300 backdrop-blur-md"
            >
              {/* Top Card Badge & Accent Line */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#07152b] border border-white/10 text-slate-200">
                  <Shield className="w-3.5 h-3.5 text-[#d90429] mr-1.5" />
                  {leader.badge}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#ef233c]">
                  ALS Lahore
                </span>
              </div>

              {/* Leader Image Container with exact required tag */}
              <div className="relative mb-6 rounded-xl overflow-hidden bg-[#07152b] border border-white/10 group-hover:border-[#d90429]/40 transition-colors shadow-inner flex items-center justify-center min-h-[260px]">
                <img
                  src={leader.imgSrc}
                  alt={leader.imgAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (leader.id === 'chairman' && target.src !== chairmanImg) {
                      target.src = chairmanImg;
                    } else if (leader.id === 'ceo' && target.src !== ceoImg) {
                      target.src = ceoImg;
                    } else if (leader.id === 'director' && target.src !== directorImg) {
                      target.src = directorImg;
                    }
                  }}
                />

                {/* Subtle gradient vignette over photo base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2448] via-transparent to-transparent opacity-80" />

                {/* Hover Quote Floating Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#07152b]/90 border border-white/15 backdrop-blur-md text-xs text-slate-200 opacity-95 flex items-center justify-between">
                  <span className="font-semibold text-white truncate mr-2">{leader.name}</span>
                  <span className="text-[#ef233c] font-bold text-[11px] uppercase tracking-wider">{leader.title}</span>
                </div>
              </div>

              {/* Leader Information */}
              <div className="space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-2xl font-bold font-['Montserrat'] text-white group-hover:text-[#ef233c] transition-colors">
                      {leader.name}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-[#d90429] uppercase tracking-wider mb-2">
                    {leader.title} • <span className="text-slate-300 font-normal text-xs">{leader.subtitle}</span>
                  </div>

                  {/* Inspiring Words / Quote */}
                  <div className="relative bg-[#07152b]/80 p-4 rounded-xl border border-white/5 my-3">
                    <Quote className="w-5 h-5 text-[#d90429] opacity-70 mb-1" />
                    <p className="text-sm text-slate-200 italic leading-relaxed">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Key Initiatives tags */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {leader.keyInitiatives.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#ef233c] mr-2 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Read Full Vision Action Button */}
                <button
                  id={`btn-read-vision-${leader.id}`}
                  onClick={() => setSelectedLeader(leader)}
                  className="w-full mt-4 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-[#d90429] border border-white/10 hover:border-[#d90429] text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer group/btn shadow"
                >
                  <span>Read Full Vision & Message</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholastic Leadership Commitment Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-[#0e2448]/60 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-300 font-medium">
            <Award className="w-5 h-5 text-[#ef233c]" />
            <span>Under the stewardship of our visionaries, ALS Scholastic Campus sets the benchmark for education in Lahore.</span>
          </div>
        </div>

      </div>

      {/* Leadership Full Message Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#07152b] border border-[#d90429]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close message modal"
            >
              ✕
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#d90429]/40 bg-[#0e2448] shrink-0">
                <img
                  src={selectedLeader.imgSrc}
                  alt={selectedLeader.imgAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedLeader.id === 'chairman' && target.src !== chairmanImg) {
                      target.src = chairmanImg;
                    } else if (selectedLeader.id === 'ceo' && target.src !== ceoImg) {
                      target.src = ceoImg;
                    } else if (selectedLeader.id === 'director' && target.src !== directorImg) {
                      target.src = directorImg;
                    }
                  }}
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#ef233c] uppercase tracking-wider">
                  {selectedLeader.title} Message
                </span>
                <h3 className="text-2xl font-bold font-['Montserrat']">{selectedLeader.name}</h3>
                <p className="text-xs text-slate-300">{selectedLeader.subtitle}</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed border-t border-b border-white/10 py-5">
              {selectedLeader.fullMessage.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                American Lycetuff Scholastic Campus • Military Accounts, Lahore
              </div>
              <button
                onClick={() => setSelectedLeader(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#d90429] hover:bg-[#b50220] text-white font-semibold text-sm transition-colors"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
