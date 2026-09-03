import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'shield' | 'horizontal';
  showHighlight?: boolean;
}

export const AmericanLycetuffLogo: React.FC<LogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'full',
  showHighlight = false,
}) => {
  return (
    <div className={`inline-flex items-center select-none ${showHighlight ? 'relative group' : ''}`}>
      {showHighlight && (
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#d90429]/30 via-white/20 to-[#00205b]/40 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none" />
      )}
      
      <svg
        viewBox="0 0 760 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300`}
        role="img"
        aria-label="American Lycetuff Scholastic Campus Junior and Upper School Logo"
      >
        <defs>
          {/* Subtle gradients */}
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f4f7fb" />
            <stop offset="100%" stopColor="#dce5f2" />
          </linearGradient>
          <linearGradient id="bullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a3d7c" />
            <stop offset="100%" stopColor="#08204d" />
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#001a44" />
            <stop offset="50%" stopColor="#002b66" />
            <stop offset="100%" stopColor="#001438" />
          </linearGradient>
          <filter id="logoShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* ================= LEFT CREST / SHIELD ================= */}
        <g id="crest-shield" transform="translate(10, 8)" filter="url(#logoShadow)">
          {/* Outer Shield Frame */}
          <path
            d="M 50 20 L 220 20 C 220 20 220 150 220 180 C 220 240 145 285 135 290 C 125 285 50 240 50 180 Z"
            fill="url(#shieldGrad)"
            stroke="#00205b"
            strokeWidth="14"
            strokeLinejoin="round"
          />

          {/* Top Banner inside shield with LYCETUFF text */}
          <rect x="58" y="28" width="154" height="38" fill="#00205b" />
          <text
            x="135"
            y="54"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="3.5"
          >
            LYCETUFF
          </text>

          {/* Bull Silhouette */}
          <g id="bull" fill="url(#bullGrad)" transform="translate(75, 76)">
            {/* Horns & Head */}
            <path d="M 32 8 C 30 2 24 0 20 2 C 22 7 26 12 28 15 C 24 16 20 19 18 24 C 15 28 14 34 16 38 C 17 41 20 44 24 43 C 28 42 30 38 32 35 L 35 34 C 36 28 35 22 34 18 C 37 15 42 12 45 6 C 40 7 36 10 33 13 Z" />
            {/* Muscular Body & Shoulders */}
            <path d="M 28 26 C 35 22 45 20 56 22 C 68 24 82 32 94 36 C 104 38 112 36 116 38 C 114 42 110 46 106 48 C 100 52 95 62 90 70 L 85 70 C 86 64 88 56 86 52 C 80 54 70 56 58 56 C 46 56 38 52 34 46 C 30 52 28 62 26 70 L 21 70 C 22 62 24 50 23 42 C 20 38 18 34 22 28 Z" />
            {/* Front & Back Legs and Hooves */}
            <path d="M 38 48 L 44 75 L 49 75 L 46 49 Z" />
            {/* Powerful tail */}
            <path d="M 112 39 C 118 45 120 54 116 62 C 114 65 110 68 108 72 C 110 72 114 68 116 64 C 122 56 120 44 113 38 Z" />
          </g>

          {/* Ocean/Water Waves under bull */}
          <path
            d="M 64 175 Q 85 168 105 175 T 145 175 T 185 175 T 206 175"
            fill="none"
            stroke="#00205b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 66 195 Q 86 188 106 195 T 146 195 T 186 195 T 204 195"
            fill="none"
            stroke="#00205b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 72 215 Q 92 208 112 215 T 152 215 T 188 215"
            fill="none"
            stroke="#00205b"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Lower Ribbon Scroll "SUSTAIN TO PREVAIL" */}
          <g id="ribbon" transform="translate(0, 195)">
            {/* Left Scroll Curl */}
            <path
              d="M 28 20 C 18 15 8 28 14 42 C 18 52 30 54 40 48 L 46 36 Z"
              fill="#ffffff"
              stroke="#00205b"
              strokeWidth="6"
            />
            {/* Ribbon Body Banner */}
            <path
              d="M 32 40 Q 95 95 195 90 C 205 89 218 85 228 78 L 222 55 Q 135 70 42 22 Z"
              fill="#00205b"
            />
            {/* Motto Text Along Path / Angled */}
            <text
              transform="translate(48, 56) rotate(18)"
              fill="#ffffff"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="800"
              fontSize="12"
              letterSpacing="1.8"
            >
              SUSTAIN TO PREVAIL
            </text>
          </g>
        </g>

        {/* ================= RIGHT TYPOGRAPHY ================= */}
        {variant !== 'shield' && (
          <g id="logo-text" transform="translate(195, 0)">
            {/* "AMERICAN" */}
            <text
              x="30"
              y="112"
              fill="#00205b"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              fontWeight="900"
              fontSize="126"
              letterSpacing="-2"
            >
              AMERICAN
            </text>

            {/* "LYCETUFF" */}
            <text
              x="30"
              y="232"
              fill="#00205b"
              fontFamily="'Montserrat', 'Arial Black', sans-serif"
              fontWeight="900"
              fontSize="126"
              letterSpacing="-2"
            >
              LYCETUFF
            </text>

            {/* "SCHOLASTIC CAMPUS" */}
            <text
              x="42"
              y="282"
              fill="#00205b"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="800"
              fontSize="34"
              letterSpacing="2.5"
            >
              SCHOLASTIC CAMPUS
            </text>

            {/* Bottom Dark Navy Ribbon / Angled Banner */}
            <polygon
              points="20,300 540,300 520,352 5,352"
              fill="#00205b"
            />
            <text
              x="265"
              y="337"
              textAnchor="middle"
              fill="#ffffff"
              fontFamily="'Montserrat', sans-serif"
              fontWeight="800"
              fontSize="27"
              letterSpacing="3"
            >
              JUNIOR AND UPPER SCHOOL
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
