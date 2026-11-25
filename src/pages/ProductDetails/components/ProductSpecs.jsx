const tabs = [
    { label: "01 // SPECS & BLUEPRINT", active: true },
    { label: "02 // FIT & DIMENSIONS", active: false },
    { label: "03 // CUSTOMER FEEDBACK (128)", active: false },
];

const stats = [
    { label: "WATERPROOF RATING", value: "20,000 mm", note: "JIS L 1092B Extreme Rain standard" },
    { label: "MOISTURE VAPOR RATING", value: "< 4.0 m²Pa/W", note: "Hyper-breathable active vapour release" },
];

const features = [
    "Full perimeter heat-welded interior seams",
    "Dual-direction matte black YKK® AquaGuard waterproof zippers",
    "Six-pocket modular layout including concealed anti-theft RFID pass slot",
    "Acid-reactive micro-dots providing 360° nocturnal roadway visibility",
];

const layers = [
    "01. DWR RIPSTOP NYLON (EXTERIOR SHELL)",
    "02. MICRO-POROUS PTFE MEMBRANE (20K/20K)",
    "03. 150 ULTRA-LIGHT CIRCULAR KNIT WICKER",
];

export default function ProductSpecs() {
    return (
        <section
            aria-labelledby="specs-title"
            className="mx-auto max-w-[1280px] px-5 pb-12 md:px-12"
        >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
                {/* tabs */}
                <div className="flex gap-6 overflow-x-auto border-b border-slate-200">
                    {tabs.map((t) => (
                        <button
                            key={t.label}
                            type="button"
                            className={`whitespace-nowrap border-b-2 pb-3 font-mono text-[10px] font-bold tracking-wide ${
                                t.active
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-slate-400"
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-10 max-md:grid-cols-1">
                    {/* left: copy */}
                    <div>
                        <h2
                            id="specs-title"
                            className="text-[18px] font-extrabold tracking-[-0.03em] text-slate-900"
                        >
                            THE ARCHITECTURE OF PROTECTION
                        </h2>
                        <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
                            Engineered for volatile atmospheric transitions,
                            the Vektor Asymmetric Parka harmonizes tactical
                            utility with post-industrial brutalism. Crafted
                            from high-density Japanese 3-layer micro-ripstop
                            nylon, this outer garment exhibits maximum
                            breathability while generating an impenetrable
                            barricade against horizontal rainfall and
                            gale-force city winds.
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                                >
                                    <p className="text-[9px] font-bold tracking-wide text-blue-600">
                                        {s.label}
                                    </p>
                                    <p className="mt-1 text-[18px] font-extrabold text-slate-900">
                                        {s.value}
                                    </p>
                                    <p className="mt-1 text-[9px] text-slate-400">
                                        {s.note}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <ul className="mt-5 space-y-2">
                            {features.map((f) => (
                                <li
                                    key={f}
                                    className="flex gap-2 text-[11px] text-slate-600"
                                >
                                    <span className="text-blue-600">✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* right: blueprint */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <div className="flex justify-between font-mono text-[9px] font-bold tracking-wide text-blue-600">
                            <span>CROSS-SECTION SCHEMATIC // T-99</span>
                            <span className="text-slate-400">
                                FABRIC WEIGHT: 165 GSM
                            </span>
                        </div>

                        <div className="mt-6 space-y-3">
                            {layers.map((l, i) => (
                                <div
                                    key={l}
                                    className={`rounded-md border bg-white px-3 py-2 font-mono text-[9px] text-slate-600 ${
                                        i === 1
                                            ? "border-dashed border-blue-600"
                                            : "border-slate-300"
                                    }`}
                                >
                                    {l}
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 text-center font-mono text-[9px] font-bold tracking-wide text-blue-600">
                            ZERO COMPROMISE WEATHER ARMOR
                        </p>

                        <div className="mt-6 flex justify-between rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-[8px] text-slate-400 max-sm:flex-col max-sm:gap-1">
                            <span>
                                CARE: COLD WASH // HANG DRY // DO NOT IRON
                                TAPED SEAMS
                            </span>
                            <span>MADE IN OSAKA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
