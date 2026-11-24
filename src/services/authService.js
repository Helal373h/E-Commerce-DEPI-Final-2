// src/services/authService.js

// 1. Mock Data للتجربة لحد ما الـ API يجهز
export const MOCK_AUTH_DATA = {
  gatewayStatus: {
    status: "ACTIVE",
    protocol: "PROTOCOL [01]",
    node: "NODE: NYC_NORTH_EDGE_09",
    session: "SESSION: 30D_PERSISTENT",
    vaultStatus: "VAULT_LOCK // VERIFIED",
  },
  promoStats: {
    edition: "SPEC-NOCTURNE-24 // EDITION // 004",
    badge: "VAULT MEMBERSHIP PRIVILEGES ACTIVATED",
    manifestoTag: "MANIFESTO // 2024",
    headline: "“ENGINEERED SILHOUETTES FOR SUBTERRANEAN METROPOLITAN CLIMATES.”",
    description:
      "Every release is capped at physical unit ceilings. Verified operatives receive automatic reservation windows 48 hours prior to public index deployment.",
    operativeForce: "42.8K",
    dropClearance: "T-48H",
    archiveStatus: "SYNCHRONIZED",
  },
  demoUser: {
    email: "operative@nocturne.studio",
    password: "password123",
    token: "mock-jwt-token-urbanova-2026",
    user: {
      id: "UV-992-K",
      name: "Operative 01",
      email: "operative@nocturne.studio",
      tier: "NOCTURNE_VAULT",
    },
  },
};

// 2. دالة جلب بيانات الصفحة (لو الباك إند هيبعت الإحصائيات دي ديناميك)
export const getAuthPageConfig = async () => {
  // TODO: لما الـ API يجهز استبدل السطرين الجايين بـ axios.get('/api/auth-config')
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_AUTH_DATA;
};

// 3. دالة تسجيل الدخول (جاهزة للربط مع الـ API)
export const loginUser = async ({ email, password, rememberMe }) => {
  // TODO: لما الـ API يجهز، امسح الجزء ده واستبدله بـ:
  // const response = await axios.post('YOUR_API_URL/auth/login', { email, password, rememberMe });
  // return response.data;

  await new Promise((resolve) => setTimeout(resolve, 1000)); // محاكاة وقت التحميل

  if (!email || !password) {
    throw new Error("Please enter both communication identifier and passkey.");
  }

  // تجربة نجاح أو فشل وهمية
  if (password.length < 6) {
    throw new Error("ACCESS DENIED: Invalid cipher length (min 6 chars).");
  }

  return {
    success: true,
    token: MOCK_AUTH_DATA.demoUser.token,
    user: { ...MOCK_AUTH_DATA.demoUser.user, email },
    rememberMe,
  };
};