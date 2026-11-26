import { useState } from "react";
import placeholder0 from "/src/assets/Shopcart/placeholder0.png";
import { formatPrice } from "../functions";

export default function PairsWellWithAddOnCarouselSection({
    setItems,
    cartItems,
}) {
    const [recommendations, setRecommendations] = useState([
        {
            image: placeholder0,
            tag: "HARDWARE",
            name: "COBRA-LOCK TACTICAL LEATHER BELT",
            description: "Designed for modular loop anchoring on Kuro cargo.",
            price: 120,
            label: "COMPATIBLE",
            pieces: 1,
        },
        {
            image: placeholder0,
            tag: "ACCESSORIES",
            name: "MODULAR RIG POUCH 0.5L",
            description: "Clips directly onto Vektor Shell chest harness.",
            price: 85.0,
            label: "NEW COMPONENT",
            pieces: 1,
        },
        {
            image: placeholder0,
            tag: "HEADWEAR",
            name: "GHOST-STITCH RIBBED BEANIE",
            description: "Seamless temperature-regulating thermal headwear.",
            price: 65,
            label: "ESSENTIAL",
            pieces: 1,
        },
    ]);
    return (
        <section
            className="mx-auto max-w-[1280px] border-t border-slate-200 px-5 py-16 md:px-12"
            aria-labelledby="pairs-well-title"
        >
            <div className="mb-7 flex items-end justify-between">
                <div>
                    <p className="text-[10px] font-extrabold tracking-[0.16em] text-blue-600">
                        MODULAR INTEGRATION
                    </p>
                    <h2
                        id="pairs-well-title"
                        className="mt-1 text-[22px] font-extrabold tracking-[-0.035em] text-slate-900"
                    >
                        PAIRS WELL WITH
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                {recommendations.map((item, index) => {
                    if (index <= 2) {
                        return (
                            <article
                                key={item.name}
                                className="rounded-2xl border border-slate-200 bg-white p-4"
                            >
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="aspect-square w-full rounded-xl object-cover"
                                    />
                                    <span className="absolute left-3 top-3 rounded-md bg-slate-900/90 px-3 py-1 text-[9px] font-bold tracking-wide text-white">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="mt-5 flex justify-between gap-2">
                                    <span className="text-[10px] font-bold tracking-wide text-slate-400">
                                        {item.tag}
                                    </span>
                                    <span className="text-[12px] font-extrabold text-slate-900">
                                        {formatPrice(item.price)}
                                    </span>
                                </div>
                                <h3 className="mt-2 text-[12px] font-extrabold text-slate-900">
                                    {item.name}
                                </h3>
                                <p className="mt-2 min-h-8 text-[11px] leading-relaxed text-slate-500">
                                    {item.description}
                                </p>
                                <button
                                    className="w-full mt-3 flex h-11 items-center justify-center rounded-xl bg-slate-100 text-[10px] font-extrabold tracking-wide text-slate-700
                                          hover:scale-105 hover:cursor-pointer transition-all"
                                    onClick={() => {
                                        handleQuickAdd(
                                            item,
                                            setItems,
                                            cartItems,
                                        );
                                    }}
                                >
                                    ＋ QUICK ADD TO BAG
                                </button>
                            </article>
                        );
                    }
                })}
            </div>
        </section>
    );
}

function handleQuickAdd(item, setCartItems, cartitems) {
    setCartItems([...cartitems, item]);
}
