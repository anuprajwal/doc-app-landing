import React from 'react';

export default function EcgDivider() {
  // SVG Path definition: Left line -> Up Peak -> Down Trough -> Recovery -> Right line
  const pathD = "M 0 45 L 230 45 L 260 10 L 310 80 L 350 45 L 800 45";

  return (
    <div className="w-full flex justify-center items-center py-6 overflow-hidden">
      <svg
        viewBox="0 0 800 90"
        className="w-full max-w-4xl h-16 md:h-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          /* Static faint background line */
          .ecg-base {
            stroke: rgba(255, 255, 255, 0.25);
            stroke-width: 4.5;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          /* Animated traveling bright white dash */
          .ecg-pulse {
            stroke: #ffffff;
            stroke-width: 4.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 90 800;
            animation: travelPulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.8));
          }

          /* Pulsating glowing white dot */
          .ecg-dot {
            fill: rgba(255, 255, 255, 0.7);
            transform-origin: 430px 45px;
            animation: dotThrob 3s ease-in-out infinite;
          }

          @keyframes travelPulse {
            0% {
              stroke-dashoffset: 890;
            }
            100% {
              stroke-dashoffset: -800;
            }
          }

          @keyframes dotThrob {
            0%, 100% {
              transform: scale(0.8);
              opacity: 0.5;
              filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.4));
            }
            50% {
              transform: scale(1.8);
              opacity: 1;
              filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
            }
          }
        `}</style>

        {/* 1. Base dim ECG trace */}
        <path d={pathD} className="ecg-base" />

        {/* 2. Bright moving white line traveling across the path */}
        <path d={pathD} className="ecg-pulse" />

        {/* 3. Enlarging & shrinking white dot in the middle */}
        <circle cx="430" cy="45" r="5" className="ecg-dot" />
      </svg>
    </div>
  );
}