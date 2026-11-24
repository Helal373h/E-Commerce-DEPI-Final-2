// src/pages/Login/components/AuthFormCard.jsx
import React, { useState } from "react";
import { loginUser } from "../../../services/authService";

const AuthFormCard = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("operative@nocturne.studio");
  const [password, setPassword] = useState("************");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const result = await loginUser({ email, password, rememberMe });
      setSuccessMsg("VAULT ACCESS GRANTED // REDIRECTING...");
      if (onLoginSuccess) {
        onLoginSuccess(result);
      }
    } catch (err) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
      {/* الزرار العلوي */}
      <div className="flex justify-center mb-8">
        <div className="bg-blue-50/80 p-1.5 rounded-xl border border-blue-100">
          <span className="inline-block bg-blue-600 text-white text-xs font-mono font-semibold tracking-wider px-5 py-2.5 rounded-lg shadow-sm">
            [01] SIGN IN // VAULT ACCESS
          </span>
        </div>
      </div>

      {/* العناوين */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider mb-2">
          <span className="text-blue-600 font-bold">
            VAULT CLEARANCE PROTOCOL
          </span>
          <span className="text-gray-300">///</span>
          <span className="text-gray-400">TERM_ID: #UV-992-K</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          AUTHENTICATE CREDENTIALS
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Access your private drop reservations, order telemetry, and nocturnal
          tier access via verified credentials.
        </p>
      </div>

      {/* الفاصل */}
      <div className="relative flex py-3 items-center mb-5">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-3 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
          PROCEED WITH ENCRYPTED IDENTIFIER
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* رسائل الخطأ أو النجاح */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-mono">
          {error}
        </div>
      )}
      {successMsg && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono">
          {successMsg}
        </div>
      )}

      {/* الفورم */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* حقل الإيميل */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
            <label className="text-gray-600 font-semibold">
              COMMUNICATION IDENTIFIER // EMAIL
            </label>
            <span className="text-gray-400">[KEY-01]</span>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 font-mono text-sm">
              @
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operative@nocturne.studio"
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
            />
          </div>
        </div>

        {/* حقل الباسورد */}
        <div>
          <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
            <label className="text-gray-600 font-semibold">
              ACCESS PASSKEY // CIPHER
            </label>
            <button
              type="button"
              onClick={() => alert("Password reset flow coming soon!")}
              className="text-blue-600 hover:underline font-semibold"
            >
              FORGOT PASSKEY?
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Remember this terminal // 30-Day Session</span>
          </label>
          <span className="text-[11px] text-gray-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Passkey / Touch ID Enabled
          </span>
        </div>

        {/* زرار الإرسال */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-mono font-semibold text-xs sm:text-sm tracking-wider py-3.5 rounded-xl shadow-md shadow-blue-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <span>AUTHENTICATING...</span>
          ) : (
            <>
              <span>ACCESS VAULT // SIGN IN</span>
              <span>→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AuthFormCard;