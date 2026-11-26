// src/pages/Cart/CartPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getCartData, validatePromoCode } from "../../services/cartService";
import CartItemCard from "./components/CartItemCard";
import OrderSummary from "./components/OrderSummary";
import PairsWellWith from "./components/PairsWellWith";

const CartPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [vaultRef, setVaultRef] = useState("#URB-8492");
  const [taxRate, setTaxRate] = useState(0.08);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      const data = await getCartData();
      setItems(data.items);
      setRecommendations(data.recommendations);
      setVaultRef(data.vaultRef);
      setTaxRate(data.taxRate);
      setAppliedCoupon(data.defaultCoupon);
      setLoading(false);
    };
    fetchCart();
  }, []);

  // تعديل كمية منتج
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // حذف منتج من السلة
  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // إضافة منتج مقترح إلى السلة
  const handleQuickAdd = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          collectionTag: product.collectionTag,
          title: product.title,
          size: product.size,
          color: product.color,
          materialBadge: null,
          imageBadge: product.badge,
          imageBadgeColor: product.badgeStyle,
          price: product.price,
          originalPrice: null,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  };

  // تطبيق كوبون خصم
  const handleApplyCoupon = async (code) => {
    const res = await validatePromoCode(code);
    if (res.valid) {
      setAppliedCoupon(res.coupon);
    }
    return res;
  };

  // الحسابات الكلية
  const totalPieces = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    // TODO: ربط التوجيه لصفحة الـ Checkout لما زميلك يخلصها
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
     

      {/* المحتوى الرئيسي */}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* عنوان الصفحة */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
              SHOPPING BAG
            </h1>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#2563eb] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
              [{totalPieces} {totalPieces === 1 ? "ITEM" : "ITEMS"}]
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review drop selections prior to vault checkout reservation.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm text-slate-400">
            Loading vault bag...
          </div>
        ) : (
          <>
            {/* تقسيمة العمودين: المنتجات على الشمال + ملخص الطلب على اليمين */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* عمود المنتجات */}
              <div className="lg:col-span-8">
                {/* عناوين الجدول على الديسكتوب */}
                <div className="hidden sm:grid grid-cols-12 text-[10px] font-bold tracking-widest uppercase text-slate-400 px-2 mb-3">
                  <div className="col-span-7">PRICE SPECIFICATION</div>
                  <div className="col-span-3 text-center">ALLOCATION</div>
                  <div className="col-span-2 text-right">SUBTOTAL</div>
                </div>

                {items.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
                    <p className="text-sm font-bold text-slate-700 mb-2">
                      Your shopping bag is currently empty.
                    </p>
                    <p className="text-xs text-slate-400 mb-5">
                      Add items from our modular recommendations below or browse the collection.
                    </p>
                    <Link
                      to="/"
                      className="inline-block bg-slate-900 text-white text-xs font-bold uppercase px-5 py-2.5 rounded-xl"
                    >
                      EXPLORE DROPS
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <CartItemCard
                        key={item.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemoveItem}
                      />
                    ))}
                  </div>
                )}

                {/* رابط العودة للتسوق */}
                <div className="mt-6">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-wider uppercase text-slate-700 hover:text-[#2563eb] transition-colors"
                  >
                    <span>←</span>
                    <span>CONTINUE SHOPPING</span>
                  </Link>
                </div>
              </div>

              {/* عمود ملخص الطلب */}
              <div className="lg:col-span-4">
                <OrderSummary
                  vaultRef={vaultRef}
                  totalPieces={totalPieces}
                  subtotal={subtotal}
                  taxRate={taxRate}
                  appliedCoupon={appliedCoupon}
                  onApplyCoupon={handleApplyCoupon}
                  onRemoveCoupon={() => setAppliedCoupon(null)}
                  onCheckout={handleCheckout}
                />
              </div>
            </div>

            {/* سكشن المنتجات المقترحة بالأسفل */}
            <PairsWellWith
              products={recommendations}
              onQuickAdd={handleQuickAdd}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;