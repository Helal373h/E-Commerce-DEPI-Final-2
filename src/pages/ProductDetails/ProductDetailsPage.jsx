import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecs from "./components/ProductSpecs";
import CuratedPairings from "./components/CuratedPairings";

// Static layout only: no state, no handlers. Navbar/Footer come from Layout.
export default function ProductDetailsPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <main className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.1fr)_minmax(340px,1fr)] gap-10 px-5 py-12 md:px-12 max-md:grid-cols-1">
                <ProductGallery />
                <ProductInfo />
            </main>
            <ProductSpecs />
            <CuratedPairings />
        </div>
    );
}
