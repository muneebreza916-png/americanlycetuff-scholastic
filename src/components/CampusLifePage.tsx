import React, { useState } from 'react';
import {
  PartyPopper,
  Sparkles,
  Heart,
  Cake,
  Gift,
  Calendar,
  Smile,
  Award,
  Trophy,
  Palette,
  Cpu,
  Theater,
  Camera,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Users,
  Lightbulb,
  Eye,
  Bookmark,
  School,
  Layers,
  Sun,
} from 'lucide-react';

import birthday1Img from '../assets/images/Birthday.jpeg';
import birthday2Img from '../assets/images/Birthday 2.jpeg';
import birthday3Img from '../assets/images/Birthday 3.jpeg';
import birthday4Img from '../assets/images/Birthday 4.jpeg';
import birthday5Img from '../assets/images/Birthday 5.jpeg';

import classroom1Img from '../assets/images/Students_in_clasroom.jpeg';
import classroom2Img from '../assets/images/Students_in_clasroom 2.jpeg';
import classroom3Img from '../assets/images/Students_in_clasroom 3.jpeg';

import yellowDay1Img from '../assets/images/Yellow_ColorDay_1.jpeg';
import yellowDay2Img from '../assets/images/Yellow_ColorDay_2.jpeg';
import yellowDay3Img from '../assets/images/Yellow_ColorDay_3.jpeg';
import yellowDay4Img from '../assets/images/Yellow_ColorDay_4.jpeg';
import yellowDay5Img from '../assets/images/Yellow_ColorDay_5.jpeg';

interface CampusLifePageProps {
  onBackToHome: () => void;
  onOpenInquiry: () => void;
}

export interface ActivityPhotoItem {
  id: string;
  category: 'yellow-day' | 'birthdays' | 'classroom';
  categoryLabel: string;
  image: string;
  title: string;
  badge: string;
  tag: string;
  subtitle: string;
  description: string;
  highlights: string[];
  likes: number;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  onBackToHome,
  onOpenInquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'yellow-day' | 'birthdays' | 'classroom' | 'sports' | 'stem' | 'arts'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [confettiActive, setConfettiActive] = useState<boolean>(true);
  const [wishInput, setWishInput] = useState<{ name: string; message: string; grade: string }>({
    name: '',
    message: '',
    grade: 'Junior Years',
  });
  const [wishSubmitted, setWishSubmitted] = useState<boolean>(false);

  // All Campus Life Activity Photos (Yellow Color Day + Birthday Celebrations + Classroom Study Environment)
  const [allActivityPhotos, setAllActivityPhotos] = useState<ActivityPhotoItem[]>([
    // 💛 Yellow Color Day & Mango Shake Celebrations Photos
    {
      id: 'yellow-1',
      category: 'yellow-day',
      categoryLabel: 'Yellow Color Day & Celebrations',
      image: yellowDay1Img,
      title: 'Vibrant Yellow Outfits & Sunny Celebrations',
      badge: 'Yellow Day Fun',
      tag: 'Yellow Attire',
      subtitle: 'Radiant Outfits & Cheerful Smiles',
      description:
        'Students arriving at American Lycetuff Scholastic Campus dressed in delightful sunny yellow outfits, creating a vibrant, cheerful, and sunny atmosphere across campus.',
      highlights: [
        'Dressed in radiant yellow outfits celebrating color harmony',
        'Festive classroom decorations with yellow balloons and ribbons',
        'Promotes sensory learning, self-expression, and campus joy',
      ],
      likes: 89,
    },
    {
      id: 'yellow-2',
      category: 'yellow-day',
      categoryLabel: 'Yellow Color Day & Celebrations',
      image: yellowDay2Img,
      title: 'Delicious Mango Shake Party & Refreshing Treats',
      badge: 'Mango Shake Party',
      tag: 'Mango Shake Treat',
      subtitle: 'Sweet Mango Delights & Healthy Nutrition',
      description:
        'Young scholars joyfully sipping freshly prepared, delicious mango shakes—celebrating the King of Fruits and learning about healthy summer fruits with classmates.',
      highlights: [
        'Freshly blended sweet mango shakes for every young scholar',
        'Interactive lessons on summer fruits, vitamins, and healthy nutrition',
        'Sharing joyful sips, laughter, and friendships in class',
      ],
      likes: 104,
    },
    {
      id: 'yellow-3',
      category: 'yellow-day',
      categoryLabel: 'Yellow Color Day & Celebrations',
      image: yellowDay3Img,
      title: 'Yellow Theme Activities & Creative Discovery',
      badge: 'Creative Discovery',
      tag: 'Hands-On Crafts',
      subtitle: 'Sensory Learning & Interactive Play',
      description:
        'Engaging in yellow-themed artistic crafts, painting activities, and sensory discovery stations fostering early childhood cognitive development and creativity.',
      highlights: [
        'Tactile arts, crafts, and yellow object identification',
        'Interactive teacher-led storytelling, songs, and poems',
        'Cultivates fine motor skills, teamwork, and imagination',
      ],
      likes: 76,
    },
    {
      id: 'yellow-4',
      category: 'yellow-day',
      categoryLabel: 'Yellow Color Day & Celebrations',
      image: yellowDay4Img,
      title: 'Cherished Peer Moments & Festive Poses',
      badge: 'Sunny Friendship',
      tag: 'Peer Bonding',
      subtitle: 'Golden Memories & Childhood Laughter',
      description:
        'Capturing golden childhood moments as friends pose together in their vibrant yellow attire, sharing laughter and building fond memories that last a lifetime.',
      highlights: [
        'Warm social bonding and cheerful peer encouragement',
        'Celebratory photo keepsakes shared with parents',
        'Positive, uplifting, and caring school culture',
      ],
      likes: 95,
    },
    {
      id: 'yellow-5',
      category: 'yellow-day',
      categoryLabel: 'Yellow Color Day & Celebrations',
      image: yellowDay5Img,
      title: 'Classroom Joy & Teacher-Mentored Festivities',
      badge: 'Joyous Campus',
      tag: 'Faculty Mentorship',
      subtitle: 'Dedicated Mentors & Golden Celebrations',
      description:
        'Dedicated faculty members guiding students through joyful celebrations, distributing mango treats, and ensuring every child feels cherished and happy.',
      highlights: [
        'Caring teacher guidance and enthusiastic participation',
        'Inclusive celebration engaging every single student',
        'Golden memories at American Lycetuff Scholastic Campus, Lahore',
      ],
      likes: 82,
    },

    // 🎂 Student Birthday Celebrations Photos
    {
      id: 'bday-1',
      category: 'birthdays',
      categoryLabel: 'Celebrations & Milestones',
      image: birthday1Img,
      title: 'Joyful Classroom Birthday Cake Cutting',
      badge: 'Cherished Milestone',
      tag: 'Classroom Birthday',
      subtitle: 'Sharing Smiles & Celebrating Milestones',
      description:
        'Young scholars gathering together with radiant smiles, colorful party hats, and festive cheers as they cut a celebratory birthday cake alongside caring faculty mentors and dear classmates.',
      highlights: [
        'Custom classroom cake cutting with peers and class teachers',
        'Festive party hats, balloons, and sweet birthday songs',
        'Creates treasured lifelong childhood memories on campus',
      ],
      likes: 85,
    },
    {
      id: 'bday-2',
      category: 'birthdays',
      categoryLabel: 'Celebrations & Milestones',
      image: birthday2Img,
      title: 'Milestone Birthday Smiles & Peer Friendship',
      badge: 'Birthday Cheer',
      tag: 'Peer Camaraderie',
      subtitle: 'Joyful Bonds & Warm Hugs',
      description:
        'Capturing pure childhood delight as classmates celebrate their friend’s special day with warm birthday hugs, thoughtful wishes, and memorable photo poses at our Lahore campus.',
      highlights: [
        'Warm peer bonding and genuine childhood encouragement',
        'Dedicated celebration time balancing academics with joy',
        'Photographic keepsakes shared with parents and families',
      ],
      likes: 92,
    },
    {
      id: 'bday-3',
      category: 'birthdays',
      categoryLabel: 'Celebrations & Milestones',
      image: birthday3Img,
      title: 'Festive Classroom Celebration & Sweet Moments',
      badge: 'Sweet Memories',
      tag: 'Festive Vibes',
      subtitle: 'Joyous School Community',
      description:
        'A vibrant celebration adorned with balloons, festive treats, and enthusiastic applause. Fostering a warm school environment where every child feels loved, valued, and special.',
      highlights: [
        'Nurtures emotional security, confidence, and happiness',
        'Classroom party decorations and sweet treat distributions',
        'Teacher-led blessings and celebratory applause',
      ],
      likes: 77,
    },
    {
      id: 'bday-4',
      category: 'birthdays',
      categoryLabel: 'Celebrations & Milestones',
      image: birthday4Img,
      title: 'Celebratory Cake Ceremony with Mentors',
      badge: 'Joyous Day',
      tag: 'Mentor Guidance',
      subtitle: 'Teacher Guidance & Heartfelt Blessings',
      description:
        'Dedicated teachers and educational mentors joining young scholars in celebrating their personal growth and another wonderful year of learning, creativity, and discovery.',
      highlights: [
        'Faculty mentors sharing warm encouragement and blessings',
        'Encourages personal reflection, gratitude, and goal setting',
        'Warm, familial school community at Millitary Accounts, Lahore',
      ],
      likes: 68,
    },
    {
      id: 'bday-5',
      category: 'birthdays',
      categoryLabel: 'Celebrations & Milestones',
      image: birthday5Img,
      title: 'Delightful Sweet Treats & Shared Smiles',
      badge: 'Pure Joy',
      tag: 'Happy Scholars',
      subtitle: 'Sweet Treats & Lifelong Memories',
      description:
        'Special birthday traditions including delicious cake distributions, festive birthday songs, and colorful snapshots that become lifelong childhood keepsakes.',
      highlights: [
        'Celebratory music and group sing-along birthday cheer',
        'Delightful treats shared among classmates',
        'Vibrant memories that students treasure forever',
      ],
      likes: 83,
    },

    // 📚 Classroom Study Environment Photos
    {
      id: 'classroom-1',
      category: 'classroom',
      categoryLabel: 'Study Environment & Academics',
      image: classroom1Img,
      title: 'Interactive Classroom Instruction & Guided Mentorship',
      badge: 'Academic Excellence',
      tag: 'Interactive Learning',
      subtitle: 'Dynamic Inquiry & Dedicated Mentorship',
      description:
        'Students actively engaged in stimulating curriculum coursework, concept discussions, and interactive learning under the close mentorship of experienced faculty at American Lycetuff Scholastic Campus.',
      highlights: [
        'Dedicated individual attention with 1:15 teacher-student ratio',
        'Dynamic questioning fostering curiosity and conceptual clarity',
        'Spacious, climate-controlled classrooms with ergonomic furniture',
      ],
      likes: 64,
    },
    {
      id: 'classroom-2',
      category: 'classroom',
      categoryLabel: 'Study Environment & Academics',
      image: classroom2Img,
      title: 'Focused Scholastic Study & Conceptual Mastery',
      badge: 'Study Environment',
      tag: 'Focused Learning',
      subtitle: 'Disciplined Study Habits & Academic Rigor',
      description:
        'Scholars immersed in focused academic study, structured problem-solving, and analytical development in well-lit, distraction-free modern classroom settings.',
      highlights: [
        'Ergonomic seating arrangements promoting comfort & long focus',
        'Curriculum aligned with Cambridge & Federal Board standards',
        'Seamless blend of theoretical foundations and practical exercises',
      ],
      likes: 71,
    },
    {
      id: 'classroom-3',
      category: 'classroom',
      categoryLabel: 'Study Environment & Academics',
      image: classroom3Img,
      title: 'Collaborative Group Learning & Peer Engagement',
      badge: 'Collaborative Growth',
      tag: 'Peer Collaboration',
      subtitle: 'Teamwork, Discussion & Confidence',
      description:
        'Fostering peer collaboration, respectful intellectual debate, and communicative confidence through small-group problem solving and structured project-based modules.',
      highlights: [
        'Interactive team assignments enhancing critical thinking',
        'Builds communicative poise and mutual scholastic respect',
        'Continuous teacher facilitation and positive encouragement',
      ],
      likes: 58,
    },
  ]);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAllActivityPhotos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
    triggerConfettiBurst();
  };

  const [burstConfetti, setBurstConfetti] = useState<boolean>(false);

  const triggerConfettiBurst = () => {
    setBurstConfetti(true);
    setTimeout(() => setBurstConfetti(false), 2000);
  };

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishInput.name || !wishInput.message) return;
    setWishSubmitted(true);
    triggerConfettiBurst();
    setTimeout(() => {
      setWishInput({ name: '', message: '', grade: 'Junior Years' });
    }, 4000);
  };

  const activityCategories = [
    { id: 'all', label: 'All Activities', icon: Layers, count: '13 Photos', active: true },
    { id: 'yellow-day', label: 'Yellow Color Day 💛🥭', icon: Sun, count: '5 Photos', active: true },
    { id: 'birthdays', label: 'Birthday Celebrations 🎂', icon: Cake, count: '5 Photos', active: true },
    { id: 'classroom', label: 'Classroom Study 📚', icon: BookOpen, count: '3 Photos', active: true },
    { id: 'sports', label: 'Sports Gala', icon: Trophy, count: 'Coming Soon', active: false },
    { id: 'stem', label: 'STEM Expo', icon: Cpu, count: 'Coming Soon', active: false },
    { id: 'arts', label: 'Art Festival', icon: Palette, count: 'Coming Soon', active: false },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? allActivityPhotos
      : allActivityPhotos.filter((item) => item.category === activeCategory);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredPhotos.length - 1
    );
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! < filteredPhotos.length - 1 ? prev! + 1 : 0
    );
  };

  const confettiColors = [
    '#ffd700',
    '#ffb703',
    '#ef233c',
    '#00f2fe',
    '#4cc9f0',
    '#7209b7',
    '#f72585',
    '#ffffff',
  ];

  return (
    <div className="min-h-screen bg-[#040d1c] text-white font-['Poppins',sans-serif] relative overflow-hidden pb-24">
      
      {/* 🎊 Hanging Festive Party Bunting Garland at the very top */}
      <div className="w-full overflow-hidden flex justify-center items-start absolute top-0 left-0 z-30 pointer-events-none opacity-90">
        <svg className="w-full max-w-7xl h-12 sm:h-16" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,0 Q300,45 600,10 Q900,45 1200,0"
            fill="none"
            stroke="#ffffff33"
            strokeWidth="2"
          />
          {[
            { x: 30, color: '#ffd166' },
            { x: 90, color: '#ef233c' },
            { x: 150, color: '#ffd700' },
            { x: 210, color: '#118ab2' },
            { x: 270, color: '#f72585' },
            { x: 330, color: '#ffb703' },
            { x: 390, color: '#ffd166' },
            { x: 450, color: '#4cc9f0' },
            { x: 510, color: '#7209b7' },
            { x: 570, color: '#ffd166' },
            { x: 630, color: '#ef233c' },
            { x: 690, color: '#ffd700' },
            { x: 750, color: '#118ab2' },
            { x: 810, color: '#f72585' },
            { x: 870, color: '#ffd166' },
            { x: 930, color: '#ffb703' },
            { x: 990, color: '#4cc9f0' },
            { x: 1050, color: '#ef233c' },
            { x: 1110, color: '#ffd700' },
            { x: 1170, color: '#ffd166' },
          ].map((flag, idx) => (
            <polygon
              key={idx}
              points={`${flag.x},0 ${flag.x + 40},0 ${flag.x + 20},36`}
              fill={flag.color}
              opacity="0.9"
            />
          ))}
        </svg>
      </div>

      {/* 🎈 Floating 3D Celebratory Balloons in the Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {/* Yellow Balloon */}
        <div className="absolute top-24 left-4 sm:left-12 animate-balloon-slow opacity-90">
          <div className="w-14 h-18 sm:w-18 sm:h-24 rounded-full bg-gradient-to-tr from-[#b8860b] via-[#ffd700] to-[#fff3b0] shadow-lg shadow-[#ffd700]/35 relative">
            <div className="w-4 h-6 bg-white/50 rounded-full absolute top-2.5 left-3.5 blur-[1px]" />
            <div className="w-1.5 h-1.5 bg-[#b8860b] absolute -bottom-1 left-1/2 -translate-x-1/2" />
            <div className="w-0.5 h-20 bg-white/30 absolute top-full left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Red Balloon */}
        <div className="absolute top-40 right-6 sm:right-16 animate-balloon-fast opacity-85">
          <div className="w-12 h-16 sm:w-16 sm:h-20 rounded-full bg-gradient-to-tr from-[#9b001a] via-[#ef233c] to-[#ff758f] shadow-lg shadow-[#ef233c]/40 relative">
            <div className="w-3 h-5 bg-white/40 rounded-full absolute top-2 left-3 blur-[1px]" />
            <div className="w-1.5 h-1.5 bg-[#9b001a] absolute -bottom-1 left-1/2 -translate-x-1/2" />
            <div className="w-0.5 h-16 bg-white/30 absolute top-full left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Cyan Balloon */}
        <div className="absolute top-[600px] left-8 sm:left-24 animate-balloon-fast opacity-75 hidden md:block">
          <div className="w-12 h-16 rounded-full bg-gradient-to-tr from-[#005f73] via-[#00f2fe] to-[#a0e426] shadow-lg shadow-[#00f2fe]/30 relative">
            <div className="w-3 h-5 bg-white/40 rounded-full absolute top-2 left-3 blur-[1px]" />
            <div className="w-0.5 h-16 bg-white/30 absolute top-full left-1/2 -translate-x-1/2" />
          </div>
        </div>

        {/* Sunny Gold Balloon */}
        <div className="absolute top-[750px] right-10 animate-balloon-slow opacity-85 hidden lg:block">
          <div className="w-14 h-18 rounded-full bg-gradient-to-tr from-[#d4a373] via-[#ffd166] to-[#fff3b0] shadow-lg shadow-[#ffd166]/30 relative">
            <div className="w-3.5 h-5 bg-white/50 rounded-full absolute top-2.5 left-3 blur-[1px]" />
            <div className="w-0.5 h-18 bg-white/30 absolute top-full left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>

      {/* ✨ Drifting Confetti Particles System */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {Array.from({ length: 32 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 4 + Math.random() * 5;
            const size = 6 + Math.random() * 8;
            const color = confettiColors[i % confettiColors.length];
            const isCircle = i % 3 === 0;
            return (
              <div
                key={i}
                className="confetti-piece"
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size * (isCircle ? 1 : 1.6)}px`,
                  backgroundColor: color,
                  borderRadius: isCircle ? '50%' : '2px',
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Top Breadcrumb & Controls */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            id="back-to-home-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0e2448]/90 hover:bg-[#d90429] text-white text-xs sm:text-sm font-semibold transition-all shadow-md border border-white/15 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Homepage</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setConfettiActive(!confettiActive)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Toggle Confetti"
            >
              {confettiActive ? (
                <>
                  <PartyPopper className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span className="hidden sm:inline">Confetti ON</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Confetti OFF</span>
                </>
              )}
            </button>

            <button
              onClick={triggerConfettiBurst}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white text-xs font-bold shadow-md hover:shadow-[#d90429]/50 transition-all flex items-center gap-1.5 cursor-pointer animate-celebration-pulse"
            >
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Shower Cheer! 🎊</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 z-20">
        
        {/* 🎉 Main Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ffd700]/30 via-[#d90429]/20 to-[#ffd700]/30 border border-[#ffd700]/40 shadow-lg text-xs sm:text-sm font-bold tracking-widest text-[#ffd700] uppercase">
            <Sun className="w-4 h-4 text-[#ffd700] animate-spin" style={{ animationDuration: '10s' }} />
            <span>Campus Life • Activities & Celebrations</span>
            <Cake className="w-4 h-4 text-[#ef233c]" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] tracking-tight text-white leading-tight">
            Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ef233c] to-[#ffffff]">American Lycetuff</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Experience our vibrant campus activities: from sunny <strong className="text-[#ffd700]">Yellow Color Day & Mango Shake parties</strong> and joyful <strong className="text-[#ef233c]">birthday celebrations</strong> to our disciplined, interactive <strong className="text-[#00f2fe]">classroom study environment</strong>.
          </p>

          {/* Key Activity Tags */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-[#0e2448]/90 border border-[#ffd700]/50 text-slate-200 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-[#ffd700]" />
              Yellow Color Day & Mango Shake Party
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#0e2448]/90 border border-[#ef233c]/50 text-slate-200 flex items-center gap-1.5">
              <Cake className="w-3.5 h-3.5 text-[#ef233c]" />
              Student Birthday Celebrations
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#0e2448]/90 border border-[#00f2fe]/50 text-slate-200 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#00f2fe]" />
              1:15 Low Teacher-Student Ratio
            </span>
          </div>
        </div>

        {/* 💛 🎂 📚 Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {activityCategories.map((cat) => {
            const Icon = cat.icon;
            const isCurrent = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.active) {
                    setActiveCategory(cat.id as any);
                  }
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? cat.id === 'yellow-day'
                      ? 'bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#ffb703] text-slate-950 shadow-lg shadow-[#ffd700]/40 border-2 border-white font-bold'
                      : 'bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white shadow-lg shadow-[#d90429]/40 border-2 border-[#ffd700]'
                    : cat.active
                    ? 'bg-[#0e2448]/90 text-slate-300 hover:text-white hover:bg-[#122b56] border border-white/10'
                    : 'bg-[#0e2448]/40 text-slate-500 border border-white/5 cursor-not-allowed opacity-60'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isCurrent
                      ? cat.id === 'yellow-day'
                        ? 'text-slate-950'
                        : 'text-[#ffd700]'
                      : 'text-slate-400'
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isCurrent
                      ? cat.id === 'yellow-day'
                        ? 'bg-black/20 text-slate-950 font-bold'
                        : 'bg-black/30 text-white font-bold'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 💛 Yellow Color Day & Mango Shake Spotlight Banner */}
        {activeCategory === 'yellow-day' || activeCategory === 'all' ? (
          <div className="mb-12 bg-gradient-to-br from-[#1a1400] via-[#2d2200] to-[#07152b] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#ffd700]/50 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#ffd700]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#ffb703]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffd700] uppercase tracking-wider bg-[#ffd700]/15 px-3 py-1 rounded-lg border border-[#ffd700]/40">
                  <Sun className="w-4 h-4 text-[#ffd700]" />
                  Yellow Color Day & Mango Shake Celebrations 💛🥭
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Montserrat'] text-white">
                  Sunny Yellow Outfits & Delicious Mango Shake Treats! 🥭
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  A golden celebration filled with sunshine and joy! Young scholars arrived in radiant yellow attire, 
                  participated in sensory yellow-themed art and storytelling, and relished fresh, delicious mango shakes 
                  while celebrating summer’s sweetest fruit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Children dressed in vibrant, cheerful yellow outfits</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Freshly blended sweet mango shakes for all students</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Interactive color recognition & sensory art activities</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Fosters peer warmth, campus happiness & memorable traditions</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      const idx = filteredPhotos.findIndex((p) => p.category === 'yellow-day');
                      setLightboxIndex(idx >= 0 ? idx : 0);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ffb703] text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-[#ffd700]/50 flex items-center gap-2 cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                    View Yellow Color Day Album (5 Photos)
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-white/15"
                  >
                    <Calendar className="w-4 h-4 text-[#ffd700]" />
                    Join Our Joyful Campus
                  </button>
                </div>
              </div>

              {/* Right Yellow Day Highlight Preview */}
              <div
                className="lg:col-span-5 relative group rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border-2 border-[#ffd700]/50 shadow-2xl cursor-pointer"
                onClick={() => {
                  const idx = filteredPhotos.findIndex((p) => p.category === 'yellow-day');
                  setLightboxIndex(idx >= 0 ? idx : 0);
                }}
              >
                <img
                  src={yellowDay1Img}
                  alt="American Lycetuff Yellow Color Day Celebrations"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1c]/90 via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd700] text-slate-950 text-xs font-bold shadow-md">
                  <Sun className="w-3.5 h-3.5 text-slate-950" />
                  <span>Yellow Color Day Showcase</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">5 Celebration Photos</span>
                  <span className="text-[#ffd700] font-bold bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm group-hover:bg-[#ffd700] group-hover:text-slate-950 transition-colors">
                    Click to Enlarge 💛
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* 📚 Classroom Study Environment Spotlight (When classroom tab or all is active) */}
        {activeCategory === 'classroom' ? (
          <div className="mb-12 bg-gradient-to-br from-[#07152b] via-[#0e2448] to-[#040d1c] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#00f2fe]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#d90429]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00f2fe] uppercase tracking-wider bg-[#00f2fe]/10 px-3 py-1 rounded-lg border border-[#00f2fe]/30">
                  <BookOpen className="w-4 h-4 text-[#00f2fe]" />
                  Study Environment & Pedagogy
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Montserrat'] text-white">
                  Inspiring Classroom Study Environment 📚
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Our purposeful classroom study environment is designed to stimulate intellectual curiosity, 
                  disciplined focus, and collaborative discovery. With low teacher-student ratios, ergonomic furnishings, 
                  and interactive smart boards, every scholar receives individualized mentorship.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                    <span>1:15 Teacher-Student ratio ensuring individual academic attention</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                    <span>Engaging group discussions & critical thinking exercises</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                    <span>Daylight-optimized, climate-controlled study chambers</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                    <span>Cambridge & Federal Board FBISE rigorous curriculum</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      const idx = filteredPhotos.findIndex((p) => p.category === 'classroom');
                      setLightboxIndex(idx >= 0 ? idx : 0);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f2fe]/80 to-[#118ab2] text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-[#00f2fe]/40 flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    View Classroom Photo Album
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-white/15"
                  >
                    <Calendar className="w-4 h-4 text-[#00f2fe]" />
                    Book Classroom Walkthrough
                  </button>
                </div>
              </div>

              <div
                className="lg:col-span-5 relative group rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border-2 border-[#00f2fe]/40 shadow-xl cursor-pointer"
                onClick={() => {
                  const idx = filteredPhotos.findIndex((p) => p.category === 'classroom');
                  setLightboxIndex(idx >= 0 ? idx : 0);
                }}
              >
                <img
                  src={classroom1Img}
                  alt="American Lycetuff Classroom Study Environment"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1c]/90 via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f2fe] text-slate-950 text-xs font-bold shadow-md">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Classroom Study Showcase</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">3 Classroom Study Photos</span>
                  <span className="text-[#00f2fe] font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm group-hover:bg-[#00f2fe] group-hover:text-slate-950 transition-colors">
                    Click to Enlarge 📚
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* 🎂 Birthday Celebrations Spotlight (When birthdays tab is active) */}
        {activeCategory === 'birthdays' ? (
          <div className="mb-12 bg-gradient-to-br from-[#07152b] via-[#122b56] to-[#040d1c] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#ffd700]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ffd700]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#d90429]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffd700] uppercase tracking-wider bg-[#ffd700]/10 px-3 py-1 rounded-lg border border-[#ffd700]/30">
                  <Cake className="w-4 h-4 text-[#ffd700]" />
                  Student Birthday Traditions
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Montserrat'] text-white">
                  Celebrating Every Child&apos;s Special Day with Happiness & Smiles 🎂
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  At American Lycetuff Scholastic Campus, we believe a joyful school environment 
                  nurtures emotional intelligence and confidence. Birthdays are celebrated with 
                  cake cuttings, heartfelt faculty blessings, cheerful songs from classmates, and joyful photo sessions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Classroom cake cutting with classmates & class teachers</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Festive birthday party hats, balloons, and sweet treats</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Dedicated photo memories shared with parents and family</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700] shrink-0 mt-0.5" />
                    <span>Nurtures self-esteem, peer belonging, and happy school memories</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      const idx = filteredPhotos.findIndex((p) => p.category === 'birthdays');
                      setLightboxIndex(idx >= 0 ? idx : 0);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d90429] to-[#ef233c] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-[#d90429]/50 flex items-center gap-2 cursor-pointer"
                  >
                    <Camera className="w-4 h-4" />
                    View Birthday Album (5 Photos)
                  </button>
                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer border border-white/15"
                  >
                    <Calendar className="w-4 h-4 text-[#ffd700]" />
                    Join Our Joyful Campus
                  </button>
                </div>
              </div>

              <div
                className="lg:col-span-5 relative group rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border-2 border-[#ffd700]/40 shadow-xl cursor-pointer"
                onClick={() => {
                  const idx = filteredPhotos.findIndex((p) => p.category === 'birthdays');
                  setLightboxIndex(idx >= 0 ? idx : 0);
                }}
              >
                <img
                  src={birthday1Img}
                  alt="American Lycetuff Birthday Celebration"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1c]/90 via-transparent to-black/20" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d90429] text-white text-xs font-bold shadow-md">
                  <PartyPopper className="w-3.5 h-3.5" />
                  <span>Birthday Cheer Gallery</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-semibold text-white">5 Celebration Photos</span>
                  <span className="text-[#ffd700] font-bold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm group-hover:bg-[#ffd700] group-hover:text-[#07152b] transition-colors">
                    Click to Explore 🎂
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* 📸 Comprehensive Photo Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-white flex items-center gap-2">
                <span>Campus Life Activities Gallery</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#ffd700]/20 text-[#ffd700] border border-[#ffd700]/40 font-normal">
                  {filteredPhotos.length} Photos
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Click any photo to view full resolution, read event / study notes, or send love!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo, index) => {
              const isYellow = photo.category === 'yellow-day';
              const isClassroom = photo.category === 'classroom';
              return (
                <div
                  key={photo.id}
                  className={`group relative bg-[#07152b] rounded-3xl overflow-hidden border shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isYellow
                      ? 'border-white/10 hover:border-[#ffd700]/80 hover:shadow-[#ffd700]/20'
                      : isClassroom
                      ? 'border-white/10 hover:border-[#00f2fe]/60 hover:shadow-[#00f2fe]/10'
                      : 'border-white/10 hover:border-[#ef233c]/60 hover:shadow-[#ef233c]/10'
                  }`}
                  onClick={() => setLightboxIndex(index)}
                >
                  {/* Image Container with Ribbon Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/15 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow flex items-center gap-1.5 ${
                          isYellow
                            ? 'bg-[#b8860b] text-white border border-[#ffd700]/50'
                            : isClassroom
                            ? 'bg-[#118ab2] text-white'
                            : 'bg-[#d90429] text-white'
                        }`}
                      >
                        {isYellow ? (
                          <Sun className="w-3 h-3 text-[#ffd700]" />
                        ) : isClassroom ? (
                          <BookOpen className="w-3 h-3 text-[#00f2fe]" />
                        ) : (
                          <Cake className="w-3 h-3 text-[#ffd700]" />
                        )}
                        {photo.badge}
                      </span>
                    </div>

                    {/* Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-slate-200 backdrop-blur-sm border border-white/10">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Hover Zoom & Action Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className={`p-3 rounded-full bg-[#07152b]/90 shadow-xl transform group-hover:scale-100 scale-75 transition-transform flex items-center gap-1.5 text-xs font-bold ${
                          isYellow
                            ? 'text-[#ffd700] border border-[#ffd700]/60'
                            : isClassroom
                            ? 'text-[#00f2fe] border border-[#00f2fe]/60'
                            : 'text-[#ffd700] border border-[#ffd700]/60'
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Enlarge Photo</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Information */}
                  <div className="p-5 sm:p-6 bg-[#07152b] border-t border-white/10 flex flex-col justify-between flex-grow">
                    <div>
                      <div
                        className={`text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center justify-between ${
                          isYellow
                            ? 'text-[#ffd700]'
                            : isClassroom
                            ? 'text-[#00f2fe]'
                            : 'text-[#ef233c]'
                        }`}
                      >
                        <span>{photo.categoryLabel}</span>
                        <span className="text-slate-400 font-normal">ALS Lahore</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold font-['Montserrat'] text-white group-hover:text-[#ffd700] transition-colors line-clamp-1 mb-1.5">
                        {photo.title}
                      </h4>

                      <p className="text-xs text-slate-400 font-medium mb-2">
                        {photo.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                        {photo.description}
                      </p>
                    </div>

                    {/* Card Bottom Interaction */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <button
                        onClick={(e) => handleLike(photo.id, e)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#ef233c]/20 hover:text-[#ef233c] text-slate-300 font-semibold transition-all border border-white/10 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 text-[#ef233c] fill-current" />
                        <span>{photo.likes} Likes</span>
                      </button>

                      <span
                        className={`font-semibold flex items-center gap-1 ${
                          isYellow
                            ? 'text-[#ffd700]'
                            : isClassroom
                            ? 'text-[#00f2fe]'
                            : 'text-[#ffd700]'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        {isYellow ? 'Yellow Color Day' : isClassroom ? 'Academic Excellence' : 'Celebration'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 💌 Community Wish & Encouragement Wall */}
        <div className="mb-14 bg-gradient-to-r from-[#0e2448] via-[#122b56] to-[#07152b] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd700]/10 text-[#ffd700] border border-[#ffd700]/30 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              Community & Celebration Board
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat'] text-white">
              Send an Encouraging Note to Our Scholars! 💌
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              Share an encouraging study blessing, Yellow Day cheer, or birthday wish for our hardworking students and teachers at American Lycetuff Scholastic Campus.
            </p>

            {wishSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#07152b] border border-[#ffd700]/50 text-center space-y-2 animate-fade-in">
                <div className="text-3xl">🎉💛📚🎂</div>
                <div className="text-base font-bold text-[#ffd700]">Thank you for your warm message!</div>
                <p className="text-xs text-slate-300">
                  Your heartfelt words have been posted to our campus celebration board!
                </p>
              </div>
            ) : (
              <form onSubmit={handleWishSubmit} className="space-y-4 text-left pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name / Relation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Parent, Alumni, Mentor"
                      value={wishInput.name}
                      onChange={(e) => setWishInput({ ...wishInput, name: e.target.value })}
                      className="w-full bg-[#040d1c] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffd700]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Grade Section
                    </label>
                    <select
                      value={wishInput.grade}
                      onChange={(e) => setWishInput({ ...wishInput, grade: e.target.value })}
                      className="w-full bg-[#040d1c] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffd700]"
                    >
                      <option value="Early Years / Playgroup">Early Years / Playgroup</option>
                      <option value="Primary Section">Primary Section</option>
                      <option value="Middle School">Middle School</option>
                      <option value="Senior / Cambridge O & A Levels">Senior / Cambridge O & A Levels</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message or Warm Blessing *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Wishing all our wonderful students continuous academic growth, joyful discoveries, and happy milestone celebrations! 💛🎂"
                    value={wishInput.message}
                    onChange={(e) => setWishInput({ ...wishInput, message: e.target.value })}
                    className="w-full bg-[#040d1c] border border-white/20 rounded-xl py-2.5 px-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffd700]"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#d90429] via-[#ef233c] to-[#ffd700] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-[#ffd700]/30 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <PartyPopper className="w-4 h-4" />
                    Post Message 🎈
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 🏫 Campus Tour CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e2448]/60 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              Experience American Lycetuff Scholastic Campus in Person
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an individualized campus walkthrough at 31 MB, Millitary Accounts, Lahore to experience our classrooms, rooftop sports turf, and vibrant facilities.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 rounded-xl bg-[#d90429] hover:bg-[#b50220] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-md shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule Campus Visit
          </button>
        </div>

      </div>

      {/* 🖼️ Full-Screen Lightbox Modal with Carousel Navigation */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className={`relative w-full max-w-4xl bg-[#07152b] text-white rounded-3xl overflow-hidden border-2 shadow-2xl max-h-[92vh] flex flex-col ${
              activeLightboxItem.category === 'yellow-day'
                ? 'border-[#ffd700]/80'
                : activeLightboxItem.category === 'classroom'
                ? 'border-[#00f2fe]/60'
                : 'border-[#ef233c]/60'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-[#040d1c] border-b border-white/10">
              <div className="flex items-center gap-2 text-xs">
                {activeLightboxItem.category === 'yellow-day' ? (
                  <Sun className="w-4 h-4 text-[#ffd700]" />
                ) : activeLightboxItem.category === 'classroom' ? (
                  <BookOpen className="w-4 h-4 text-[#00f2fe]" />
                ) : (
                  <Cake className="w-4 h-4 text-[#ffd700]" />
                )}
                <span
                  className={`font-bold uppercase tracking-wider ${
                    activeLightboxItem.category === 'yellow-day'
                      ? 'text-[#ffd700]'
                      : activeLightboxItem.category === 'classroom'
                      ? 'text-[#00f2fe]'
                      : 'text-[#ef233c]'
                  }`}
                >
                  {activeLightboxItem.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-full bg-white/10 text-white hover:bg-[#d90429] transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Stage with Next / Prev */}
            <div className="relative aspect-video sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain sm:object-cover"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#d90429] transition-colors shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#d90429] transition-colors shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Badge Overlays */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow flex items-center gap-1.5 ${
                    activeLightboxItem.category === 'yellow-day'
                      ? 'bg-[#b8860b] text-white border border-[#ffd700]/50'
                      : activeLightboxItem.category === 'classroom'
                      ? 'bg-[#118ab2] text-white'
                      : 'bg-[#d90429] text-white'
                  }`}
                >
                  {activeLightboxItem.badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-slate-200 backdrop-blur-sm border border-white/10">
                  {activeLightboxItem.tag}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat'] text-white">
                    {activeLightboxItem.title}
                  </h3>
                  <p
                    className={`text-xs font-medium mt-0.5 ${
                      activeLightboxItem.category === 'yellow-day'
                        ? 'text-[#ffd700]'
                        : activeLightboxItem.category === 'classroom'
                        ? 'text-[#00f2fe]'
                        : 'text-[#ef233c]'
                    }`}
                  >
                    {activeLightboxItem.subtitle} • American Lycetuff Scholastic Campus, Lahore
                  </p>
                </div>

                <button
                  onClick={(e) => handleLike(activeLightboxItem.id, e)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#d90429] hover:bg-[#b50220] text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Send Love ({activeLightboxItem.likes})</span>
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.description}
              </p>

              {/* Highlights Box */}
              <div className="bg-[#0e2448]/80 p-4 rounded-xl border border-white/10 space-y-2">
                <div
                  className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    activeLightboxItem.category === 'yellow-day'
                      ? 'text-[#ffd700]'
                      : activeLightboxItem.category === 'classroom'
                      ? 'text-[#00f2fe]'
                      : 'text-[#ef233c]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" /> Key Event Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-200">
                  {activeLightboxItem.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          activeLightboxItem.category === 'yellow-day'
                            ? 'text-[#ffd700]'
                            : activeLightboxItem.category === 'classroom'
                            ? 'text-[#00f2fe]'
                            : 'text-[#ef233c]'
                        }`}
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span>31 MB, Millitary Accounts, Lahore</span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="text-white hover:text-[#ffd700] font-semibold"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
