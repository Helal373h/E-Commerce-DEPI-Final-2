import { useState } from "react";
import { Link } from "react-router-dom";
import placeholder0 from "/src/assets/Shopcart/placeholder0.png";

const pairings = [
    {
        id: 1,
        name: "AERO MODULAR CARGO TROUSER",
        price: "$220",
        category: "PANTS // SS25",
        tag: "IN STOCK",
    },
    {
        id: 2,
        name: "STRATA HYPER-TRACTION SHOE",
        price: "$295",
        category: "FOOTWEAR // LAB",
        tag: "LIMITED DROP",
    },
    {
        id: 3,
        name: "ECHO DISTORTION HEAVY TEE",
        price: "$95",
        category: "TOPS // 300GSM",
        tag: "ORGANIC COTTON",
    },
    {
        id: 4,
        name: "VECTOR MODULAR HOLSTER SLING",
        price: "$140",
        category: "ACCESSORIES // GEAR",
        tag: "FIDLOCK® SPEC",
    },
    {
        id: 5,
        name: "TACTICAL OVERSIZED JACKET",
        price: "$340",
        category: "OUTERWEAR // SS25",
        tag: "NEW ARRIVAL",
    },
    {
        id: 6,
        name: "URBAN TECH CARGO SHORTS",
        price: "$180",
        category: "BOTTOMS // TECH",
        tag: "LIMITED DROP",
    },
];

const VISIBLE = 4;

export default function CuratedPairings() {
    const [start, setStart] = useState(0);

    const canPrev = start > 0;
    const canNext = start + VISIBLE < pairings.length;

    function handlePrev() {
        if (canPrev) {
            setStart(start - 1);
        }
    }

    function handleNext() {
        if (canNext) {
            setStart(start + 1);
        }
    }

    const end = Math.min(start + VISIBLE, pairings.length);

    function displayPairings() {
        const result = [];

        for (let i = start; i < end; i++) {
            const item = pairings[i];

            result.push(
                <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                    {/* Product Image */}
                    <div className="relative">
                        <img
                            src={placeholder0}
                            alt={item.name || "Product"}
                            className="aspect-[3/4] w-full object-cover"
                        />

                        {/* Product Tag */}
                        {item.tag && (
                            <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-700">
                                {item.tag}
                            </span>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="p-4">

                        {/* Category */}
                        {item.category && (
                            <p className="text-[11px] font-bold tracking-wide text-slate-400">
                                {item.category}
                            </p>
                        )}

                        {/* Product Name */}
                        {item.name && (
                            <h3 className="mt-2 text-[20px] font-extrabold leading-snug text-slate-900">
                                {item.name}
                            </h3>
                        )}

                        {/* Price */}
                        {item.price && (
                            <div className="mt-4 text-[28px] font-extrabold text-slate-900">
                                {item.price}
                            </div>
                        )}
                    </div>
                </Link>
            );
        }

        return result;
    }

    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-8">

            {/* Heading + Navigation */}
            <div className="mb-8 flex items-end justify-between">

                <div>
                    <p className="font-mono text-[12px] font-extrabold tracking-[0.16em] text-blue-600">
                        TACTICAL ENSEMBLE // COMPLETE THE DROP
                    </p>

                    <h2 className="mt-1 text-[30px] font-extrabold tracking-[-0.035em] text-slate-900">
                        CURATED PAIRINGS
                    </h2>
                </div>

                {/* Carousel Buttons */}
                <div className="flex gap-2">
                    <button
                        type="button"
                        aria-label="Previous"
                        onClick={handlePrev}
                        disabled={!canPrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:cursor-pointer hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-500"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        aria-label="Next"
                        onClick={handleNext}
                        disabled={!canNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:cursor-pointer hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-500"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {displayPairings()}
            </div>

        </section>
    );
}