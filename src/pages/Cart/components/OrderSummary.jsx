// src/pages/Cart/components/OrderSummary.jsx
import React, { useState } from "react";

const OrderSummary = ({
  vaultRef,
  totalPieces,
  subtotal,
  taxRate,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
  onCheckout,
}) => {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [applying, setApplying] = useState(false);

  const estimatedTax = subtotal * taxRate;
  const discountAmount = appliedCoupon
    ? subtotal * (appliedCoupon.discountPercent / 100)
    : 0;
  const totalAllocation = Math.max(0, subtotal + estimatedTax - discountAmount);

  const handlePromoSubmit = async (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;
    setApplying(true);
    setPromoError("");
    const result = await onApplyCoupon(promoCode);
    setApplying(false);
    if (result.valid) {
      setPromoCode("");
      setShowPromoInput(false);
    } else {
      setPromoError(result.message);
    }
  };

  return (
    <div className="space-y-4">
      {/* الكارت الرئيسي لملخص الطلب */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        {/* الشريط الأزرق العلوي */}
        <div className="h-1.5 w-full bg-[#2563eb]" />

        <div className="p-6">
          {/* العنوان ورقم المرجع */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-extrabold tracking-tight text-slate-900 uppercase">
              ORDER SUMMARY
            </h2>
            <span className="text-[10px] font-mono text-slate-400">
              VAULT REF: {vaultRef}
            </span>
          </div>

          {/* تفاصيل الحساب */}
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span>Subtotal ({totalPieces} pieces)</span>
              <span className="font-bold text-slate-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-500">
              <span className="flex items-center gap-1">
                Estimated Shipping
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-slate-300 text-[9px] text-slate-400"
                  title="Complimentary carbon-neutral shipping"
                >
                  ?
                </span>
              </span>
              <span className="font-bold text-[#16a34a] bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                FREE ($0.00)
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-500">
              <span>Estimated Sales Tax ({Math.round(taxRate * 100)}%)</span>
              <span className="font-bold text-slate-900">
                ${estimatedTax.toFixed(2)}
              </span>
            </div>

            {/* شارة الكوبون المطبق */}
            {appliedCoupon && (
              <div className="flex items-center justify-between bg-blue-50/70 border border-dashed border-blue-300 rounded-lg px-3 py-2 text-[#2563eb]">
                <div className="flex items-center gap-1.5 font-bold text-[11px]">
                  <span>🏷️</span>
                  <span>{appliedCoupon.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold">
                    -${discountAmount.toFixed(2)}
                  </span>
                  <button
                    type="button"
                    onClick={onRemoveCoupon}
                    className="text-blue-400 hover:text-red-500 text-xs cursor-pointer"
                    title="Remove coupon"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>

          <hr className="my-5 border-slate-100" />

          {/* Accordion إدخال كود خصم */}
          <div>
            <button
              type="button"
              onClick={() => setShowPromoInput((prev) => !prev)}
              className="w-full flex items-center justify-between text-[11px] font-bold tracking-wider uppercase text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <span>HAVE AN ACCESS CODE / GIFT CARD?</span>
              <span className="text-slate-400 text-xs">
                {showPromoInput ? "▴" : "▾"}
              </span>
            </button>

            {showPromoInput && (
              <form onSubmit={handlePromoSubmit} className="mt-3 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code (e.g. NOVA24)"
                    className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-[#2563eb] uppercase"
                  />
                  <button
                    type="submit"
                    disabled={applying}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase px-3.5 py-2 rounded-lg cursor-pointer disabled:opacity-50"
                  >
                    {applying ? "..." : "APPLY"}
                  </button>
                </div>
                {promoError && (
                  <p className="text-[11px] text-red-500">{promoError}</p>
                )}
              </form>
            )}
          </div>

          <hr className="my-5 border-slate-100" />

          {/* الإجمالي النهائي */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-extrabold tracking-wide text-slate-900 uppercase">
                TOTAL ALLOCATION
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Includes duty and standard duties
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                ${totalAllocation.toFixed(2)}
              </p>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">
                USD NET
              </p>
            </div>
          </div>

          {/* زرار إتمام الطلب */}
          <button
            type="button"
            onClick={onCheckout}
            disabled={totalPieces === 0}
            className="w-full bg-[#2563eb] hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🔒</span>
            <span>PROCEED TO CHECKOUT</span>
            <span>→</span>
          </button>

          {/* شارات الأمان السفلية */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-slate-100 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[#2563eb] text-sm">🛡️</span>
              <span className="text-[9px] font-bold text-slate-400 leading-tight uppercase">
                256-BIT SSL
                <br />
                ENCRYPTED
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[#2563eb] text-sm">↻</span>
              <span className="text-[9px] font-bold text-slate-400 leading-tight uppercase">
                30-DAY FREE
                <br />
                RETURNS
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[#2563eb] text-sm">🏅</span>
              <span className="text-[9px] font-bold text-slate-400 leading-tight uppercase">
                100% AUTHENTIC
                <br />
                VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* بانر تنبيه الحجز أسفل الملخص */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 flex items-start gap-2.5 text-[11px] text-slate-600 leading-relaxed">
        <span className="text-[#2563eb] mt-0.5">⚡</span>
        <p>
          High volume capsule drop pieces are reserved for 15 minutes. Dispatch
          begins within 24h with carbon-neutral transit.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;