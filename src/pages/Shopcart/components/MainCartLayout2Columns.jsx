import { useEffect, useState } from "react";
import placeholder0 from "../../../assets/Shopcart/placeholder0.png";
import { formatPrice } from "../functions";
// search for continueShopping and change it to React Router Link and proceed to check out also

export default function MainCartLayout2Columns({
    ShopCart = undefined,
    setShopCart,
}) {
    const ShippingPrice = 20;
    const [total, setTotal] = useState(0);

    // calculates the total each time items change
    useEffect(() => {
        calculateTotal(ShopCart, setTotal);
    }, [ShopCart]);

    return (
        <main className="mx-auto grid max-w-[1280px] grid-cols-[minmax(0,1.65fr)_minmax(340px,1fr)] gap-10 px-5 py-12 md:px-12 max-md:grid-cols-1">
            <LeftColumnCartItemManifest
                items={ShopCart}
                setItems={setShopCart}
            />
            <RightColumnStickyOrderSummaryExpressShipping
                total={total}
                items={ShopCart}
                ShippingPrice={ShippingPrice}
            />
        </main>
    );
}

function ItemRow({ item, index = 0, itemsList, setItems }) {
    return (
        <article className="grid min-h-40.5 grid-cols-[94px_minmax(0,1fr)_88px_86px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 max-sm:grid-cols-[76px_minmax(0,1fr)]">
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-23.5 rounded-xl object-cover max-sm:h-28 max-sm:w-19"
                />
                {item.extra === "LTD DROP" && (
                    <span className="absolute bottom-2 left-2 rounded bg-slate-900/90 px-2 py-1 text-[8px] font-bold text-white">
                        LTD DROP
                    </span>
                )}
                {item.sale && (
                    <span className="absolute bottom-2 left-1 rounded bg-emerald-500 px-1.5 py-1 text-[8px] font-bold text-white">
                        {item.sale}
                    </span>
                )}
            </div>
            <div className="min-w-0 self-center">
                <p className="mb-2 text-[10px] font-bold tracking-wide text-blue-600">
                    {item.tag}
                </p>
                <h3 className="text-[15px] font-extrabold leading-[1.18] tracking-[-0.02em] text-slate-900">
                    {item.name}
                </h3>
                <p className="mt-2 text-[11px] text-slate-500">
                    Size: {item.size} <span className="mx-1">·</span> Color:{" "}
                    <strong className="font-semibold text-slate-700">
                        {item.color}
                    </strong>
                </p>
                <span className="mt-2 inline-block rounded bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
                    {item.extra === "LTD DROP" ? "LIMITED RELEASE" : item.extra}
                </span>
            </div>
            <div
                className="flex h-10 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 text-[13px] font-semibold text-slate-700 max-sm:hidden"
                aria-label="Quantity: 1"
            >
                <button
                    className="text-slate-400
                                hover:cursor-pointer hover:scale-120 transition-all hover:text-red-600"
                    onClick={() => {
                        handleDecreasePieces(index, itemsList, setItems);
                    }}
                >
                    −
                </button>
                <span>{item.pieces}</span>
                <button
                    onClick={() => {
                        handleIncreasePieces(index, itemsList, setItems);
                    }}
                    className="text-slate-400
                                hover:cursor-pointer hover:scale-120 transition-all hover:text-red-600"
                >
                    +
                </button>
            </div>
            <div className="self-center text-right max-sm:col-start-2 max-sm:row-start-2">
                <p
                    className={`text-[16px] font-extrabold tracking-tight ${item.oldPrice ? "text-blue-600" : "text-slate-900"}`}
                >
                    {formatPrice(item.price * item.pieces)}
                </p>
                {item.oldPrice && (
                    <p className="text-[10px] text-slate-400 line-through">
                        {formatPrice(item.oldPrice * item.pieces)}
                    </p>
                )}
                <button
                    className="mt-2  text-slate-400 
                              hover:cursor-pointer hover:scale-120 transition-all hover:text-red-600
                    "
                    onClick={() => {
                        handleRemoveItem(index, itemsList, setItems);
                    }}
                >
                    ×
                </button>
            </div>
        </article>
    );
}

function LeftColumnCartItemManifest({ items, setItems }) {
    return (
        <section aria-labelledby="shopping-bag-title" className="min-w-0">
            <div className="mb-8 border-b border-slate-200 pb-6">
                <h1
                    id="shopping-bag-title"
                    className="text-[34px] font-extrabold leading-none tracking-[-0.045em] text-slate-900"
                >
                    SHOPPING BAG{" "}
                    <span className="ml-2 rounded-md bg-blue-50 px-2 py-1 align-middle text-[11px] font-bold tracking-normal text-blue-600">
                        [ 3 ITEMS ]
                    </span>
                </h1>
                <p className="mt-3 text-[13px] text-slate-500">
                    Review drop selections prior to vault checkout reservation.
                </p>
            </div>
            <div className="mb-4 grid grid-cols-[1fr_88px_86px] px-1 text-[10px] font-bold tracking-wide text-slate-400 max-sm:hidden">
                <span>PIECE SPECIFICATION</span>
                <span className="text-center">ALLOCATION</span>
                <span className="text-right">SUBTOTAL</span>
            </div>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <ItemRow
                        item={item}
                        key={item.tag}
                        index={index}
                        itemsList={items}
                        setItems={setItems}
                    />
                ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-[11px] font-bold tracking-wide">
                <a href="#" className="text-slate-600">
                    ← CONTINUE SHOPPING
                </a>
            </div>
        </section>
    );
}

function RightColumnStickyOrderSummaryExpressShipping({
    items,
    total,
    ShippingPrice,
}) {
    return (
        <aside
            className="min-w-0 space-y-4"
            aria-label="Order summary and express shipping"
        >
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="h-1.5 bg-linear-to-r from-blue-600 to-sky-400" />
                <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-[19px] font-extrabold tracking-[-0.03em] text-slate-900">
                            ORDER SUMMARY
                        </h2>
                        <span className="text-[9px] font-semibold text-slate-400">
                            VAULT REF: {"#URB-8492"}
                        </span>
                    </div>
                    <div className="mt-5 space-y-4 text-[13px]">
                        <div className="flex justify-between text-slate-500">
                            <span>Subtotal ({countTotalPieces(items)})</span>
                            <strong className="text-slate-800">
                                {formatPrice(total)}
                            </strong>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Estimated Shipping </span>
                            <strong className="rounded-full bg-emerald-50 px-2 text-emerald-600">
                                {formatPrice(ShippingPrice)}
                            </strong>
                        </div>
                    </div>

                    <div className="flex items-end justify-between py-6">
                        <div>
                            <p className="text-[11px] font-bold tracking-wide text-slate-400">
                                TOTAL ALLOCATION
                            </p>
                            <p className="mt-1 text-[10px] text-slate-400">
                                Includes duty and standard duties
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[30px] font-extrabold leading-none tracking-[-0.05em] text-slate-900">
                                {formatPrice(total + ShippingPrice)}
                            </p>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="flex h-[56px] items-center justify-center gap-2 rounded-xl bg-blue-600 text-[13px] font-extrabold tracking-wide text-white"
                    >
                        ♙ &nbsp; PROCEED TO CHECKOUT &nbsp; →
                    </a>

                    <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5 text-center">
                        {[
                            "♢|256-BIT SSL ENCRYPTED",
                            "♧|30-DAY FREE RETURNS",
                            "✺|100% AUTHENTIC VERIFIED",
                        ].map((v) => (
                            <div
                                key={v}
                                className="text-[9px] font-bold leading-relaxed tracking-wide text-slate-400"
                            >
                                <span className="mb-1 block text-[19px] text-blue-600">
                                    {v.split("|")[0]}
                                </span>
                                {v.split("|")[1]}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-[11px] leading-relaxed text-slate-500">
                <span className="text-xl text-blue-600">ϟ</span>
                <p>
                    High volume capsule drop: pieces are reserved for 15
                    minutes. Dispatch begins within 24h with carbon-neutral
                    transit.
                </p>
            </div>
        </aside>
    );
}

// logic functions

function handleIncreasePieces(itemIndex, itemsList, setItems) {
    const newItems = itemsList.map((item, index) => {
        if (itemIndex == index) {
            const newItem = item;
            newItem["pieces"] += 1;
            return newItem;
        }
        return item;
    });
    setItems(newItems);
}
function handleDecreasePieces(itemIndex, itemsList, setItems) {
    const testingArray = [];
    let removeItem = false;
    const newItems = itemsList.map((item, index) => {
        if (itemIndex == index) {
            const newItem = item;
            if (newItem["pieces"] <= 0) return newItem;
            newItem["pieces"] -= 1;
            if (newItem["pieces"] == 0) {
                removeItem = true;
            }
            return newItem;
        }
        return item;
    });
    if (removeItem) {
        console.log("removing");

        handleRemoveItem(itemIndex, itemsList, setItems);
        return;
    }

    setItems(newItems);
}

function handleRemoveItem(itemIndex, itemsList, setItems) {
    setItems(itemsList.filter((_, index) => index != itemIndex));
}

function countTotalPieces(items) {
    let counter = 0;
    items.map((item) => {
        counter += item.pieces;
    });
    return counter;
}

function calculateTotal(items, setTotal) {
    let counter = 0;
    items.map((item) => {
        counter += item.price * item.pieces;
    });
    setTotal(counter);
}
