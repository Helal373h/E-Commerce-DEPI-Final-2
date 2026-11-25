import placeholder0 from "/src/assets/Shopcart/placeholder0.png";

const thumbs = ["01", "02", "03", "04"];

export default function ProductGallery() {
    return (
        <section
            aria-label="Product gallery"
            className="grid grid-cols-[72px_minmax(0,1fr)] gap-4 max-sm:grid-cols-1"
        >
            {/* thumbnails */}
            <div className="flex flex-col gap-3 max-sm:order-2 max-sm:flex-row">
                {thumbs.map((n, i) => (
                    <button
                        key={n}
                        type="button"
                        className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl border-2 bg-white ${
                            i === 0 ? "border-blue-600" : "border-slate-200"
                        }`}
                    >
                        <img
                            src={placeholder0}
                            alt={`Product view ${n}`}
                            className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 rounded bg-slate-900/80 px-1 font-mono text-[8px] font-bold text-white">
                            {n}
                        </span>
                    </button>
                ))}
            </div>

            {/* main image */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3">
                <img
                    src={placeholder0}
                    alt="Vektor Asymmetric Modular Shell Parka"
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                />
                <span className="absolute left-6 top-6 rounded-md bg-slate-900/90 px-3 py-1 font-mono text-[9px] font-bold tracking-wide text-white">
                    3-LAYER WATERPROOF // JAPANESE NYLON
                </span>
                <span className="absolute bottom-6 left-6 rounded-md bg-white/90 px-3 py-1 font-mono text-[9px] font-bold tracking-wide text-slate-700">
                    SPEC 20K/20K RET // 1.0
                </span>
                <span className="absolute bottom-6 right-6 rounded-md bg-blue-600 px-3 py-1 font-mono text-[9px] font-bold tracking-wide text-white">
                    SERIAL #VN-9942
                </span>
            </div>
        </section>
    );
}
