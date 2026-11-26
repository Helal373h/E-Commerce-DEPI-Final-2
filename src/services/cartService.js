// src/services/cartService.js

const MOCK_CART_ITEMS = [
  {
    id: "prod-1",
    collectionTag: "ARCH-01 // FW24",
    title: "VEKTOR ASYMMETRIC MODULAR SHELL PARKA",
    size: "L",
    color: null,
    materialBadge: null,
    imageBadge: "LTD DROP",
    imageBadgeColor: "bg-[#0f172a] text-white",
    price: 380.0,
    originalPrice: null,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "prod-2",
    collectionTag: "SILHOUETTE // 04",
    title: "KURO WIDE-LEG PLEATED CARGO",
    size: "M",
    color: "Ghost Bone",
    materialBadge: "JAPANESE RIPSTOP COTTON",
    imageBadge: null,
    imageBadgeColor: "",
    price: 240.0,
    originalPrice: null,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "prod-3",
    collectionTag: "SEASON SPECIAL // ARCHIVE",
    title: "TACTICAL RIBBED ZIP KNIT",
    size: "L",
    color: "Pitch Black",
    materialBadge: "100% MERINO THERMAL WEAVE",
    imageBadge: "SAVE $50",
    imageBadgeColor: "bg-[#16a34a] text-white",
    price: 210.0,
    originalPrice: 260.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
  },
];

const MOCK_RECOMMENDATIONS = [
  {
    id: "rec-1",
    badge: "COMPATIBLE",
    badgeStyle: "bg-[#0f172a] text-white",
    category: "HARDWARE",
    title: "COBRA-LOCK TACTICAL LEATHER BELT",
    description: "Designed for modular loop-anchoring on Kuro cargo.",
    price: 120.0,
    size: "ONE SIZE",
    color: "Matte Black",
    collectionTag: "HARDWARE // MOD-01",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "rec-2",
    badge: "NEW COMPONENT",
    badgeStyle: "bg-[#2563eb] text-white",
    category: "ACCESSORIES",
    title: "MODULAR RIG POUCH 0.5L",
    description: "Clips directly onto Vektor Shell chest harness.",
    price: 85.0,
    size: "0.5L",
    color: "Obsidian",
    collectionTag: "ACCESSORIES // MOD-02",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "rec-3",
    badge: "ESSENTIAL",
    badgeStyle: "bg-[#0f172a] text-white",
    category: "HEADWEAR",
    title: "GHOST-STITCH RIBBED BEANIE",
    description: "Seamless temperature-regulating thermal headwear.",
    price: 65.0,
    size: "ONE SIZE",
    color: "Charcoal",
    collectionTag: "ESSENTIALS // HW-01",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80",
  },
];

const VALID_COUPONS = {
  NOVA24: { code: "NOVA24", discountPercent: 10, label: "COUPON: NOVA24 (10% OFF)" },
  URBAN15: { code: "URBAN15", discountPercent: 15, label: "COUPON: URBAN15 (15% OFF)" },
};

// TODO: استبدل الدوال دي بطلبات Axios للـ Backend API لما يجهز
export const getCartData = async () => {
  await new Promise((res) => setTimeout(res, 250));
  return {
    vaultRef: "#URB-8492",
    taxRate: 0.08, // 8%
    defaultCoupon: VALID_COUPONS.NOVA24,
    items: MOCK_CART_ITEMS,
    recommendations: MOCK_RECOMMENDATIONS,
  };
};

export const validatePromoCode = async (code) => {
  await new Promise((res) => setTimeout(res, 200));
  const normalized = code.trim().toUpperCase();
  if (VALID_COUPONS[normalized]) {
    return { valid: true, coupon: VALID_COUPONS[normalized] };
  }
  return { valid: false, message: "Invalid or expired access code." };
};