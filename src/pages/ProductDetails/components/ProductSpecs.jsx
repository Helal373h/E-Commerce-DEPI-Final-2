
import { useState } from "react";

const stats = [
    {
        label: "WATERPROOF RATING",
        value: "20,000 mm",
        note: "JIS L 1092B Extreme Rain standard",
    },
    {
        label: "MOISTURE VAPOR RATING",
        value: "< 4.0 m²Pa/W",
        note: "Hyper-breathable active vapour release",
    },
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

const careInstructions = {
    care: "MACHINE WASH COLD / HANG DRY ONLY",
    made: "WHERE IS MADE",
};

// Fit & Dimensions
const sizes = [
    {
        size: "XS",
        chest: "102 cm",
        shoulder: "44 cm",
        length: "66 cm",
        sleeve: "60 cm",
    },
    {
        size: "S",
        chest: "108 cm",
        shoulder: "46 cm",
        length: "68 cm",
        sleeve: "62 cm",
    },
    {
        size: "M",
        chest: "114 cm",
        shoulder: "48 cm",
        length: "70 cm",
        sleeve: "64 cm",
    },
    {
        size: "L",
        chest: "120 cm",
        shoulder: "50 cm",
        length: "72 cm",
        sleeve: "66 cm",
    },
    {
        size: "XL",
        chest: "126 cm",
        shoulder: "52 cm",
        length: "74 cm",
        sleeve: "68 cm",
    },
    {
        size: "XXL",
        chest: "132 cm",
        shoulder: "54 cm",
        length: "76 cm",
        sleeve: "70 cm",
    },
];

export default function ProductSpecs() {
    const [activeTab, setActiveTab] = useState("specs");

    // Tabs Logic
    function selectSpecs() {
        setActiveTab("specs");
    }

    function selectFit() {
        setActiveTab("fit");
    }

    // Display Tabs
    function displayTabs() {
        return (
            <div className="flex gap-6 overflow-x-auto border-b border-slate-200">

                <button
                    type="button"
                    onClick={selectSpecs}
                    className={`whitespace-nowrap border-b-2 pb-4 font-mono text-[12px] font-bold tracking-wide ${
                        activeTab === "specs"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-slate-400"
                    }`}
                >
                    01 // SPECS & BLUEPRINT
                </button>

                <button
                    type="button"
                    onClick={selectFit}
                    className={`whitespace-nowrap border-b-2 pb-4 font-mono text-[12px] font-bold tracking-wide ${
                        activeTab === "fit"
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-slate-400"
                    }`}
                >
                    02 // FIT & DIMENSIONS
                </button>

            </div>
        );
    }

    // Display Stats
    function displayStats() {
        const result = [];

        for (let i = 0; i < stats.length; i++) {
            const s = stats[i];

            result.push(
                <div
                    key={s.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                    <p className="text-[12px] font-bold tracking-wide text-blue-600">
                        {s.label}
                    </p>

                    <p className="mt-2 text-[24px] font-extrabold text-slate-900">
                        {s.value}
                    </p>

                    <p className="mt-2 text-[12px] leading-relaxed text-slate-400">
                        {s.note}
                    </p>
                </div>
            );
        }

        return result;
    }

    // Display Features
    function displayFeatures() {
        const result = [];

        for (let i = 0; i < features.length; i++) {
            const f = features[i];

            result.push(
                <li
                    key={i}
                    className="flex gap-3 text-[14px] leading-relaxed text-slate-600"
                >
                    <span className="shrink-0 text-blue-600">
                        ✓
                    </span>

                    {f}
                </li>
            );
        }

        return result;
    }

    // Display Layers
    function displayLayers() {
        const result = [];

        for (let i = 0; i < layers.length; i++) {
            const l = layers[i];

            result.push(
                <div
                    key={l}
                    className={`rounded-md border bg-white px-4 py-3 font-mono text-[11px] leading-relaxed text-slate-600 ${
                        i === 1
                            ? "border-dashed border-blue-600"
                            : "border-slate-300"
                    }`}
                >
                    {l}
                </div>
            );
        }

        return result;
    }

    // Display Care Instructions
    function displayCareInstructions() {
        return (
            <>
                <span className="shrink-0">
                    {careInstructions.care}
                </span>

                <span className="shrink-0">
                    {careInstructions.made}
                </span>
            </>
        );
    }

    // SPECS TAB
    function displaySpecs() {
        return (
            <div className="mt-10 grid grid-cols-2 gap-10 max-md:grid-cols-1">

                {/* Left: Specifications */}
                <div>

                    <h2 className="text-[24px] font-extrabold tracking-[-0.03em] text-slate-900">
                        THE ARCHITECTURE OF PROTECTION
                    </h2>

                    <p className="mt-4 text-[14px] leading-relaxed text-slate-500">
                        Engineered for volatile atmospheric transitions,
                        the Vektor Asymmetric Parka harmonizes tactical
                        utility with post-industrial brutalism. Crafted
                        from high-density Japanese 3-layer micro-ripstop
                        nylon, this outer garment exhibits maximum
                        breathability while generating an impenetrable
                        barricade against horizontal rainfall and
                        gale-force city winds.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                        {displayStats()}
                    </div>

                    <ul className="mt-6 space-y-3">
                        {displayFeatures()}
                    </ul>

                </div>

                {/* Right: Blueprint */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">

                    <div className="flex justify-between gap-4 font-mono text-[12px] font-bold tracking-wide text-blue-600 max-sm:flex-col">

                        <span>
                            CROSS-SECTION SCHEMATIC // T-99
                        </span>

                        <span className="text-slate-400">
                            FABRIC WEIGHT: 165 GSM
                        </span>

                    </div>

                    <div className="mt-8 space-y-4">
                        {displayLayers()}
                    </div>

                    <p className="mt-8 text-center font-mono text-[11px] font-bold tracking-wide text-blue-600">
                        ZERO COMPROMISE WEATHER ARMOR
                    </p>

                    <div className="mt-8 flex justify-between gap-4 rounded-md border border-slate-200 bg-white px-4 py-3 font-mono text-[12px] leading-relaxed text-slate-400 max-sm:flex-col">
                        {displayCareInstructions()}
                    </div>

                </div>
            </div>
        );
    }

    // Display Size Table
    function displaySizes() {
        const result = [];

        for (let i = 0; i < sizes.length; i++) {
            const s = sizes[i];

            result.push(
                <tr
                    key={s.size}
                    className="border-b border-slate-200 transition-colors hover:bg-slate-50 text-[16px]"
                >
                    <td className="px-6 py-5 font-extrabold text-slate-900">
                        {s.size}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                        {s.chest}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                        {s.shoulder}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                        {s.length}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                        {s.sleeve}
                    </td>
                </tr>
            );
        }

        return result;
    }

    // FIT TAB
    function displayFit() {
        return (
            <div className="mt-10">

                <div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">

                    <div>
                        <h2 className="text-[24px] font-extrabold tracking-[-0.03em] text-slate-900">
                            SIZE & DIMENSIONS
                        </h2>

                        <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                            Detailed garment measurements for every size.
                        </p>
                    </div>

                    <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-2 font-mono text-[12px] font-bold text-blue-600">
                        CM // METRIC
                    </span>

                </div>

                
                <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">

                    <table className="w-full min-w-[700px] text-left">

                        <thead className="bg-slate-50 font-mono text-[16px] font-bold tracking-wide text-slate-500">

                            <tr>
                                <th className="px-6 py-5">SIZE</th>
                                <th className="px-6 py-5">CHEST</th>
                                <th className="px-6 py-5">SHOULDER</th>
                                <th className="px-6 py-5">BODY LENGTH</th>
                                <th className="px-6 py-5">SLEEVE</th>
                            </tr>

                        </thead>

                        <tbody>
                            {displaySizes()}
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }

    // Select Tab Content
    function displayTabContent() {
        if (activeTab === "specs") {
            return displaySpecs();
        }

        if (activeTab === "fit") {
            return displayFit();
        }
    }

    return (
        <section className="mx-auto w-full max-w-[1440px] px-5 pb-12 md:px-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">

                {displayTabs()}

                {displayTabContent()}

            </div>

        </section>
    );
}
