const colors = [
    { name: "Onyx Black", className: "bg-slate-900", selected: true },
    { name: "Ghost Bone", className: "bg-slate-200", selected: false },
    { name: "Forest", className: "bg-emerald-900", selected: false },
];

const sizes = ["S", "M", "L", "XL"];

const perks = [
    { title: "GLOBAL EXPRESS", text: "DHL On-Demand 2–4" },
    { title: "30-DAY RETURNS", text: "Prepaid return label" },
    { title: "CARBON NEUTRAL", text: "100% recycled fabric" },
];

export default function ProductInfo() {
    return (
        <section aria-labelledby="product-title" className="min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                {/* header */}
                <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] font-bold tracking-wide text-blue-600">
                        URBANOVA LAB // SS25 EDITION
                    </p>
                    <p className="font-mono text-[10px] text-slate-400">
                        LOT #AX-990
                    </p>
                </div>
                <h1
                    id="product-title"
                    className="mt-3 text-[26px] font-extrabold leading-[1.1] tracking-[-0.04em] text-slate-900"
                >
                    VEKTOR ASYMMETRIC MODULAR SHELL PARKA
                </h1>
                <div className="mt-3 flex items-center gap-2 text-[11px]">
                    <span className="tracking-widest text-amber-400">★★★★★</span>
                    <span className="font-bold text-slate-900">4.9</span>
                    <span className="text-slate-400 underline">
                        (128 verified reviews)
                    </span>
                </div>

                {/* price */}
                <div className="mt-5 border-t border-slate-200 pt-5">
                    <div className="flex items-center gap-3">
                        <span className="text-[30px] font-extrabold tracking-tight text-slate-900">
                            $380
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                            USD
                        </span>
                        <span className="ml-auto rounded bg-blue-50 px-2 py-1 text-[9px] font-bold text-blue-600">
                            COMPLIMENTARY EXPRESS DUTY-PAID
                        </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">
                        or 4 interest-free payments of{" "}
                        <strong className="text-slate-700">$95</strong> with
                        Klarna.
                    </p>
                </div>

                {/* color */}
                <div className="mt-6">
                    <div className="flex justify-between text-[10px] font-bold tracking-wide text-slate-400">
                        <span>
                            COLOR:{" "}
                            <span className="text-slate-700">
                                ONYX BLACK / ACID REFLECTIVE
                            </span>
                        </span>
                        <span>3 PALETTES</span>
                    </div>
                    <div className="mt-3 flex gap-3">
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                type="button"
                                aria-label={c.name}
                                className={`h-7 w-7 rounded-full border-2 ${c.className} ${
                                    c.selected
                                        ? "ring-2 ring-blue-600 ring-offset-2 border-white"
                                        : "border-slate-200"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* size */}
                <div className="mt-6">
                    <div className="flex justify-between text-[10px] font-bold tracking-wide text-slate-400">
                        <span>SELECT SIZE (GENDER-NEUTRAL)</span>
                        <button type="button" className="text-blue-600">
                            Size Guide
                        </button>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-2">
                        {sizes.map((s) => (
                            <button
                                key={s}
                                type="button"
                                className={`h-11 rounded-xl border text-[12px] font-bold ${
                                    s === "L"
                                        ? "border-blue-600 bg-blue-50 text-blue-600"
                                        : "border-slate-200 bg-white text-slate-700"
                                }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[10px]">
                        <span className="font-bold text-blue-600">
                            ONLY 3 LEFT IN SIZE L — HIGH DEMAND
                        </span>
                        <span className="text-slate-400">Ships in 24h</span>
                    </div>
                </div>

                {/* actions */}
                <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 text-[13px] font-semibold text-slate-700">
                        <button type="button" className="text-slate-400">
                            −
                        </button>
                        <span>1</span>
                        <button type="button" className="text-slate-400">
                            +
                        </button>
                    </div>
                    <button
                        type="button"
                        className="flex h-12 flex-1 items-center justify-center rounded-xl bg-blue-600 text-[11px] font-extrabold tracking-wide text-white"
                    >
                        ADD TO CART — $380
                    </button>
                    <button
                        type="button"
                        aria-label="Add to wishlist"
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500"
                    >
                        ♡
                    </button>
                </div>
                <button
                    type="button"
                    className="mt-3 flex h-12 w-full items-center justify-center rounded-xl bg-slate-900 text-[11px] font-extrabold tracking-wide text-white"
                >
                    BUY WITH PAY
                </button>
            </div>

            {/* perks */}
            <div className="mt-4 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                {perks.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-center"
                    >
                        <p className="text-[9px] font-extrabold tracking-wide text-slate-900">
                            {p.title}
                        </p>
                        <p className="mt-1 text-[9px] text-slate-400">
                            {p.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
