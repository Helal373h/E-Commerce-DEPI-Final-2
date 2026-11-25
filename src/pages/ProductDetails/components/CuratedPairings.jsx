import placeholder0 from "/src/assets/Shopcart/placeholder0.png";
import { Link } from "react-router-dom";

const pairings = [
    {
        id: 1,
        name: "AERO MODULAR CARGO TROUSER",
        price: "$220"
    },
    {
        id: 2,
        name: "CYBER-TREAD ALL-TERRAIN RUNNER",
        price: "$360"
    }
];

export default function CuratedPairings() {
    return (
        <section
            aria-labelledby="pairings-title"
            className="mx-auto max-w-[1280px] border-t border-slate-200 px-5 py-16 md:px-12"
        >
            <div className="mb-7 flex items-end justify-between">
                <div>
                    <p className="font-mono text-[10px] font-extrabold tracking-[0.16em] text-blue-600">
                        TACTICAL ENSEMBLE // COMPLETE THE DROP
                    </p>
                    <h2
                        id="pairings-title"
                        className="mt-1 text-[22px] font-extrabold tracking-[-0.035em] text-slate-900"
                    >
                        CURATED PAIRINGS
                    </h2>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        aria-label="Previous"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500"
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {pairings.map((item) => (
                    <Link
                        to={`/products/${item.id}`}
                        key={item.name}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                        <div className="relative">
                            <img
                                src={placeholder0}
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
                                {item.price}
                            </span>
                        </div>
                        <h3 className="mt-2 text-[12px] font-extrabold text-slate-900">
                            {item.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
