// src/pages/Login/components/AuthPromoCard.jsx
import React from "react";

const AuthPromoCard = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#0a0d14] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[520px] lg:min-h-[620px] shadow-xl">
      {/* صورة الخلفية مع تدرج غامق */}
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
        alt="Urbanova Nocturne"
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/70 to-[#07090e]/40" />

      {/* المحتوى العلوي (Badges) */}
      <div className="relative z-10 flex flex-col items-start gap-2.5">
        <span className="inline-block bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono tracking-widest text-blue-400">
          {stats.edition}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono tracking-wider text-gray-300">
          <svg
            className="w-3.5 h-3.5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          {stats.badge}
        </span>
      </div>

      {/* المحتوى الأوسط (Manifesto) */}
      <div className="relative z-10 my-8">
        <p className="text-blue-400 font-mono text-xs tracking-widest mb-3">
          {stats.manifestoTag}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-tight tracking-tight uppercase mb-4">
          {stats.headline}
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md">
          {stats.description}
        </p>
      </div>

      {/* المحتوى السفلي (الإحصائيات) */}
      <div className="relative z-10 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {/* Box 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 sm:p-4">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
              OPERATIVE FORCE
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-white">
                {stats.operativeForce}
              </span>
              <span className="text-[10px] font-mono text-blue-400 font-semibold">
                +ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">
              Global Vault Holders
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 sm:p-4">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">
              DROP CLEARANCE
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-bold text-blue-400">
                {stats.dropClearance}
              </span>
              <span className="text-[10px] font-mono text-gray-300">EARLY</span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">
              Priority Allocation Pass
            </p>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between text-[10px] sm:text-xs font-mono">
          <span className="text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            DIGITAL ARCHIVE PASS: INTEGRATED
          </span>
          <span className="text-blue-400 font-semibold">
            {stats.archiveStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPromoCard;