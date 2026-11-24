// src/pages/Login/components/StatusStrip.jsx
import React from "react";

const StatusStrip = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-white border-b border-gray-200 px-4 sm:px-8 py-2.5 text-[10px] sm:text-xs font-mono tracking-wider text-gray-500">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* الجزء الشمال */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="flex items-center gap-1.5 font-semibold text-gray-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            GATEWAY_STATUS: {data.status}
          </span>
          <span className="hidden sm:inline text-gray-300">/</span>
          <span className="hidden sm:inline">{data.protocol}</span>
          <span className="hidden md:inline text-gray-300">/</span>
          <span className="hidden md:inline">{data.node}</span>
        </div>

        {/* الجزء اليمين */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden lg:inline">{data.session}</span>
          <span className="hidden lg:inline text-gray-300">/</span>
          <span className="text-blue-600 font-semibold">
            {data.vaultStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusStrip;