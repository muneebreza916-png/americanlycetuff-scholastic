import React, { useEffect, useRef, useState } from 'react';
import {
  Camera,
  Sparkles,
  Eye,
  X,
  ZoomIn,
  Layers,
  School,
  Trophy,
  Gamepad2,
  Smile,
  Coffee,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import campusBuildingImg from '../assets/images/Campus_Building.jpeg';
import playAreaImg from '../assets/images/PlayArea.jpeg';
import playArea2Img from '../assets/images/PlayArea2.jpeg';
import dynamicRoomImg from '../assets/images/Dynamic Room.jpeg';
import ps5EsportsImg from '../assets/images/PS5 for esports.jpeg';
import cricketTurfImg from '../assets/images/Cricket Turf on Rooftop.jpeg';

gsap.registerPlugin(ScrollTrigger);

export interface CampusAreaItem {
  id: string;
  title: string;
  category: 'all' | 'architecture' | 'sports' | 'dynamic' | 'esports' | 'play';
  categoryLabel: string;
  image: string;
  badge: string;
  tag: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

interface GallerySectionProps {
  onOpenInquiry?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenInquiry }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const campusItems: CampusAreaItem[] = [
    {
      id: 'campus-building',
      title: 'State-of-the-Art Lahore Campus Building',
      category: 'architecture',
      categoryLabel: 'Campus Architecture',
      image: campusBuildingImg,
      badge: 'Main Facade',
      tag: 'Architectural Excellence',
      subtitle: '31 MB, Millitary Accounts, Lahore',
      description:
        'A magnificent, multi-story purpose-built academic structure located at 31 MB, Millitary Accounts, Lahore. Featuring modern educational architecture, climate-controlled corridors, secure entrance gates, and daylight-optimized smart classrooms designed for holistic student safety and excellence.',
      highlights: [
        'Multi-story modern purpose-built educational campus',
        'Secure 24/7 monitored perimeter & access-controlled entrance',
        'Spacious, climate-controlled, daylight-optimized facilities',
      ],
    },
    {
      id: 'dynamic-room',
      title: 'Dynamic Room & Student Relaxation Lounge',
      category: 'dynamic',
      categoryLabel: 'Campus Architecture & Student Wellness',
      image: dynamicRoomImg,
      badge: 'Student Lounge',
      tag: 'Relaxation & Quality Time',
      subtitle: 'Recharge, Unwind & Collaborate',
      description:
        'A dedicated vibrant and serene dynamic room where students can relax and enjoy quality time. Specially created to provide mental refreshment between rigorous academic periods, fostering peer camaraderie, creative brainstorms, and informal learning.',
      highlights: [
        'Ergonomic bean bags & modern collaborative lounge furniture',
        'Serene atmosphere for mental wellness and quality student time',
        'Creative breakout space for group projects and intellectual talks',
      ],
    },
    {
      id: 'cricket-turf',
      title: 'Rooftop Cricket & Football Sports Turf',
      category: 'sports',
      categoryLabel: 'Campus Architecture & Athletics',
      image: cricketTurfImg,
      badge: 'Rooftop Sports Arena',
      tag: 'Cricket & Football Turf',
      subtitle: 'High-Elevation Athletic Arena',
      description:
        'An open-air premium sports turf situated on the campus rooftop where students can focus on their sports as well. Engineered with high-grade synthetic turf, enclosed safety netting, and floodlights so scholars can play both football and cricket while developing athletic stamina.',
      highlights: [
        'Dual-purpose arena for competitive football and cricket net practice',
        'High-tension perimeter safety netting for secure rooftop sports',
        'All-weather shock-absorbing synthetic green turf',
      ],
    },
    {
      id: 'ps5-esports',
      title: 'PS5 Esports & Next-Gen Digital Hub',
      category: 'esports',
      categoryLabel: 'Campus Architecture & Esports',
      image: ps5EsportsImg,
      badge: 'Esports Hub',
      tag: 'PS5 Gaming Lounge',
      subtitle: 'Digital Strategy & Fast Reflexes',
      description:
        'A cutting-edge gaming setup featuring Sony PlayStation 5 consoles and high-definition gaming screens. Dedicated to nurturing digital dexterity, strategic decision-making, hand-eye coordination, and collegiate esports teamwork in a supervised modern setting.',
      highlights: [
        'Sony PlayStation 5 gaming stations with latest titles',
        'Ultra-low latency displays for competitive collegiate esports',
        'Cultivates strategic planning, team synergy, and fast reflexes',
      ],
    },
    {
      id: 'play-area-junior',
      title: 'Interactive Junior Play Area',
      category: 'play',
      categoryLabel: 'Campus Architecture & Early Years',
      image: playAreaImg,
      badge: 'Junior Play Zone',
      tag: 'Sensory & Motor Discovery',
      subtitle: 'Safe, Colorful Early Childhood Fun',
      description:
        'A bright, cushioned, and engaging early-years play zone featuring sensory play apparatus, obstacle slides, and interactive games. Fosters gross motor skills, physical balance, and joyous peer interaction in a completely child-safe environment.',
      highlights: [
        'Soft-padded child-safe flooring & impact-cushioned apparatus',
        'Age-appropriate slides, climbing structures & sensory activity stations',
        'Continuous adult supervision by trained early childhood facilitators',
      ],
    },
    {
      id: 'play-area-outdoor',
      title: 'Outdoor Recreation & Adventure Play Area',
      category: 'play',
      categoryLabel: 'Campus Architecture & Recreation',
      image: playArea2Img,
      badge: 'Outdoor Zone',
      tag: 'Active Recreation',
      subtitle: 'Supervised Recess & Outdoor Health',
      description:
        'An expansive outdoor play and recreation facility designed for energizing recess breaks, team building, and athletic agility. Allows scholars to enjoy fresh air, stay physically active, and develop healthy sportsmanship.',
      highlights: [
        'Spacious open-air playground for group sports & obstacle courses',
        'Promotes teamwork, agility, and balanced physical wellness',
        'Protected campus compound at Millitary Accounts, Lahore',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Campus Facilities', icon: Layers },
    { id: 'architecture', label: 'Campus Building', icon: School },
    { id: 'dynamic', label: 'Dynamic Room (Relaxation)', icon: Coffee },
    { id: 'sports', label: 'Rooftop Cricket & Football Turf', icon: Trophy },
    { id: 'esports', label: 'PS5 for Esports', icon: Gamepad2 },
    { id: 'play', label: 'Play Areas', icon: Smile },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? campusItems
      : campusItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (galleryGridRef.current) {
        const cards = galleryGridRef.current.querySelectorAll('.gallery-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              scale: 0.88,
              y: 35,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: galleryGridRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, [activeCategory]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-white text-[#07152b] py-24 px-4 sm:px-6 lg:px-8 scholastic-grid-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#d90429] bg-red-50 py-1.5 px-4 rounded-full border border-red-100 shadow-sm">
            <Camera className="w-4 h-4 text-[#d90429]" />
            <span>Campus Architecture & World-Class Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Montserrat'] tracking-tight text-[#07152b]">
            Explore Our <span className="text-[#d90429]">Campus Architecture</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Step inside our purpose-built campus in Lahore featuring the grand architectural facade, 
            interactive play areas, relaxing dynamic rooms, rooftop sports turf, and next-generation PS5 esports arenas.
          </p>
        </div>

        {/* Featured Campus Architecture Spotlight Card */}
        <div className="mb-12 bg-gradient-to-br from-[#07152b] via-[#0e2448] to-[#040d1c] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#d90429]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Preview with Zoom */}
            <div
              className="lg:col-span-7 relative group rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-white/15 cursor-pointer shadow-lg"
              onClick={() => {
                const idx = filteredItems.findIndex(
                  (i) => i.id === 'campus-building'
                );
                setLightboxIndex(idx >= 0 ? idx : 0);
              }}
            >
              <img
                src={campusBuildingImg}
                alt="American Lycetuff Scholastic Campus Building"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152b]/90 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d90429] text-white shadow-md flex items-center gap-1.5">
                  <School className="w-3.5 h-3.5" />
                  Main Campus Facade
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                <span className="flex items-center gap-1 text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ef233c]" />
                  31 MB, Millitary Accounts, Lahore
                </span>
                <span className="flex items-center gap-1 text-[#ef233c] font-semibold bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm group-hover:bg-[#d90429] group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5" /> Click to Enlarge
                </span>
              </div>
            </div>

            {/* Architectural Highlights Content */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ef233c] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Purpose-Built Infrastructure
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat'] text-white">
                American Lycetuff Scholastic Campus Building
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A state-of-the-art educational environment at 31 MB, Millitary Accounts, Lahore. 
                Purposefully constructed to harmonize academic rigor with holistic well-being—encompassing modern smart classrooms, 
                serene dynamic lounges, rooftop sports turfs, and creative discovery spaces.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ef233c] shrink-0" />
                  <span>Rooftop Cricket & Football Sports Turf for active athletic development</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ef233c] shrink-0" />
                  <span>Dedicated Dynamic Room for student relaxation and quality social time</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ef233c] shrink-0" />
                  <span>Supervised PS5 Esports Arena & safe Early-Years Play Areas</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const idx = filteredItems.findIndex(
                      (i) => i.id === 'campus-building'
                    );
                    setLightboxIndex(idx >= 0 ? idx : 0);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#d90429] hover:bg-[#b50220] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  View Building Gallery
                </button>
                {onOpenInquiry && (
                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-white/15"
                  >
                    <Calendar className="w-4 h-4 text-[#ef233c]" />
                    Book Campus Tour
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#07152b] text-white shadow-md shadow-[#07152b]/20 border-2 border-[#d90429]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-2 border-transparent'
                }`}
              >
                <Icon
                  className={`w-4 h-4 mr-2 ${
                    isActive ? 'text-[#ef233c]' : 'text-slate-500'
                  }`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with All Campus Architecture Areas */}
        <div
          ref={galleryGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card group relative bg-[#07152b] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/60 flex flex-col justify-between"
              onClick={() => setLightboxIndex(index)}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d90429] text-white shadow">
                    {item.badge}
                  </span>
                </div>

                {/* Tag Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-slate-200 backdrop-blur-sm border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-3.5 rounded-full bg-[#07152b]/90 text-white border border-[#d90429]/60 shadow-xl transform group-hover:scale-100 scale-75 transition-transform">
                    <ZoomIn className="w-6 h-6 text-[#ef233c]" />
                  </span>
                </div>
              </div>

              {/* Card Caption Details */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d90429] mb-1">
                    {item.categoryLabel}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-['Montserrat'] text-[#07152b] group-hover:text-[#d90429] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#07152b]">
                  <span className="flex items-center text-[#d90429]">
                    <Eye className="w-3.5 h-3.5 mr-1" />
                    Click to Enlarge
                  </span>
                  <span className="text-slate-400 font-normal">Lahore Campus</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-50 via-red-50/40 to-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-[#07152b] font-['Montserrat']">
              Want to experience our campus and facilities in person?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Guided tours of the building, rooftop turf, dynamic lounge, PS5 arena, and play areas available Monday to Saturday at 31 MB, Millitary Accounts, Lahore.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {onOpenInquiry ? (
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 rounded-xl bg-[#d90429] hover:bg-[#b50220] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book An In-Person Visit
              </button>
            ) : (
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#d90429] hover:bg-[#b50220] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-md"
              >
                Book An In-Person Visit
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal with Full-Screen Preview & Carousel Navigation */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#07152b] text-white rounded-2xl overflow-hidden border border-[#d90429]/50 shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#040d1c] border-b border-white/10">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#d90429]" />
                <span className="font-bold uppercase tracking-wider text-slate-300">
                  {activeLightboxItem.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 text-white hover:bg-[#d90429] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Stage with Previous & Next controls */}
            <div className="relative aspect-video sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain sm:object-cover"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#d90429] transition-colors shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#d90429] transition-colors shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Badge Overlay */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d90429] text-white shadow">
                  {activeLightboxItem.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-slate-200 backdrop-blur-sm border border-white/10">
                  {activeLightboxItem.tag}
                </span>
              </div>
            </div>

            {/* Lightbox Details & Highlights */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-white">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-[#ef233c] font-medium mt-0.5">
                  {activeLightboxItem.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.description}
              </p>

              {/* Key Facility Highlights */}
              <div className="bg-[#0e2448]/80 p-4 rounded-xl border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#ef233c] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Facility Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                  {activeLightboxItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ef233c] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span>American Lycetuff Scholastic Campus • 31 MB, Millitary Accounts, Lahore</span>
                <div className="flex items-center gap-3">
                  {onOpenInquiry && (
                    <button
                      onClick={() => {
                        setLightboxIndex(null);
                        onOpenInquiry();
                      }}
                      className="px-4 py-2 bg-[#d90429] hover:bg-[#b50220] text-white font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Schedule Campus Visit
                    </button>
                  )}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="text-white hover:text-[#ef233c] font-semibold px-2 py-1"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
