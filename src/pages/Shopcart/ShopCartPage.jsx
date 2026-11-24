import { useState } from "react";
import MainCartLayout2Columns from "./components/MainCartLayout2Columns";
import PairsWellWithAddOnCarouselSection from "./components/PairsWellWithAddOnCarouselSection";
import placeholder0 from "/src/assets/Shopcart/placeholder0.png";

export default function ShopCartPage() {
    const [CartItems, setCartItems] = useState([
        {
            id: 0,
            image: placeholder0,
            tag: "ARCH-01 / FW24",
            name: "VEKTOR ASYMMETRIC MODULAR SHELL PARKA",
            size: "L",
            color: "Jet Black",
            price: 380.0,
            pieces: 1,
            extra: "LTD DROP",
        },

        {
            id: 1,
            image: placeholder0,
            tag: "SILHOUETTE // 04",
            name: "KURO WIDE-LEG PLEATED CARGO",
            size: "M",
            color: "Ghost Bone",
            price: 240.0,
            pieces: 1,
            extra: "JAPANESE RIPSTOP COTTON",
        },
        {
            id: 2,
            image: placeholder0,
            tag: "SEASON SPECIAL // ARCHIVE",
            name: "TACTICAL RIBBED ZIP KNIT",
            size: "L",
            color: "Pitch Black",
            price: 210.0,
            extra: "100% MERINO THERMAL WEAVE",
            pieces: 1,
        },
    ]);
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <MainCartLayout2Columns
                ShopCart={CartItems}
                setShopCart={setCartItems}
            />
            <PairsWellWithAddOnCarouselSection
                cartItems={CartItems}
                setItems={setCartItems}
            />
        </div>
    );
}
