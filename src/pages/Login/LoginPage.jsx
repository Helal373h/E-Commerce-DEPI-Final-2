// src/pages/Login/LoginPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getAuthPageConfig } from "../../services/authService";
import StatusStrip from "./components/StatusStrip";
import AuthPromoCard from "./components/AuthPromoCard";
import AuthFormCard from "./components/AuthFormCard";

const LoginPage = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAuthPageConfig();
      setPageData(data);
    };
    loadData();
  }, []);

  const handleLoginSuccess = (userData) => {
    console.log("Logged in user:", userData);
    // TODO: احفظ التوكن هنا بعد ربط الـ API
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">


      {/* الشريط العلوي لحالة السيرفر */}
      <div className="relative z-10">
        <StatusStrip data={pageData?.gatewayStatus} />
      </div>

      {/* المحتوى الرئيسي يتحرك طبيعي تحت النافبار */}
      <main className="relative z-10 flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* الكارت الأسود على الشمال */}
          <div className="lg:col-span-5">
            <AuthPromoCard stats={pageData?.promoStats} />
          </div>

          {/* فورم تسجيل الدخول على اليمين */}
          <div className="lg:col-span-7">
            <AuthFormCard onLoginSuccess={handleLoginSuccess} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;