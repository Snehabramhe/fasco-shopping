import React, { useMemo, useState, useEffect } from "react";
import { PRODUCT } from "@/data/productData";
import ImageZoom from "./ImageZoom";
import CartImg from "../../assets/images/cart-img.png"
import CartDrawer from "../cart/CartDrawer";
import { useCart } from "../cart/CartContext";





function format2(n) {
    return String(n).padStart(2, "0");
}

function StarRow({ value = 4, max = 5, reviewCount = 0 }) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center">
                {Array.from({ length: max }).map((_, i) => (
                    <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 ${i < value ? "fill-black" : "fill-transparent"
                            } stroke-black`}
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
            </div>
            <span className="text-sm text-neutral-600">({reviewCount})</span>
        </div>
    );
}

function EyeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-neutral-600">
            <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z"
            />
            <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-black">
            <path
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61c-1.54-1.34-3.77-1.32-5.3.04L12 8.09 8.46 4.65c-1.53-1.36-3.76-1.38-5.3-.04-1.78 1.56-1.86 4.3-.2 5.97l8.34 8.39c.39.39 1.02.39 1.41 0l8.34-8.39c1.66-1.67 1.58-4.41-.21-5.97Z"
            />
        </svg>
    );
}

function SimpleIcon({ type }) {
    const common = "h-4 w-4 fill-none stroke-neutral-700";
    if (type === "compare")
        return (
            <svg viewBox="0 0 24 24" className={common}>
                <path strokeWidth="1.8" strokeLinecap="round" d="M10 4v16M4 8h6M4 16h6" />
                <path strokeWidth="1.8" strokeLinecap="round" d="M14 20V4M14 8h6M14 16h6" />
            </svg>
        );
    if (type === "question")
        return (
            <svg viewBox="0 0 24 24" className={common}>
                <path
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M9.5 9.75a2.5 2.5 0 1 1 4.17 1.84c-.7.63-1.17 1.12-1.17 2.41"
                />
                <path
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
                />
            </svg>
        );
    if (type === "share")
        return (
            <svg viewBox="0 0 24 24" className={common}>
                <path
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8a3 3 0 1 0-6 0"
                />
                <path
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14V8m0 6c-3 0-6 2-6 5v2h12v-2c0-3-3-5-6-5Z"
                />
            </svg>
        );
    return null;
}

export default function ProductDetailPage() {
    const [active, setActive] = useState(1);
    const [size, setSize] = useState(PRODUCT.sizes[0]);

    const { addToCart } = useCart();

    const [color, setColor] = useState(PRODUCT.colors[0].name);
    const [qty, setQty] = useState(1);

    const [cartOpen, setCartOpen] = useState(false);
    const [wrap, setWrap] = useState(false);

    const stockLeft = PRODUCT.stockLeft;
    const stockTotal = PRODUCT.stockTotal;
    const progress = Math.round(((stockTotal - stockLeft) / stockTotal) * 100);

    const [secondsLeft, setSecondsLeft] = useState(PRODUCT.saleEndsInSeconds);

    useEffect(() => {
        const t = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
        return () => clearInterval(t);
    }, []);

    const timeParts = useMemo(() => {
        const d = Math.floor(secondsLeft / 86400);
        const h = Math.floor((secondsLeft % 86400) / 3600);
        const m = Math.floor((secondsLeft % 3600) / 60);
        const s = secondsLeft % 60;
        return { d, h, m, s };
    }, [secondsLeft]);


    const handleAddToCart = () => {
        addToCart({
            id: PRODUCT.id,                // ✅ REQUIRED
            name: PRODUCT.name,
            image: PRODUCT.images[active],
            price: PRODUCT.price,
            color,
            size,                          // ✅ REQUIRED (your context merges by id+color+size)
            qty,
        });

        setCartOpen(true);              // ✅ open right drawer after adding
    };


    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8 py-8 lg:py-12">
                <div className="grid gap-8 lg:grid-cols-[520px_1fr] lg:gap-10">
                    {/* LEFT: Gallery */}
                    <div className="grid gap-4 lg:grid-cols-[72px_1fr]">
                        {/* Thumbnails */}
                        <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-1 lg:flex-col lg:overflow-visible lg:pb-0">
                            {PRODUCT.images.map((src, i) => {
                                const isActive = i === active;
                                return (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setActive(i)}
                                        className={`shrink-0 rounded-md border bg-white p-1 transition
                      ${isActive ? "border-neutral-900" : "border-transparent hover:border-neutral-300"}
                    `}
                                        aria-label={`Select image ${i + 1}`}
                                    >
                                        <img src={src} alt="" className="h-16 w-16 rounded-md object-cover" loading="lazy" />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Main image */}
                        <div className="order-1 lg:order-2">


                            <ImageZoom
                                src={PRODUCT.images[active]}
                                alt={PRODUCT.name}
                                zoom={3}
                                lensSize={170}
                            />

                        </div>
                    </div>

                    {/* RIGHT: Details */}
                    <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-widest text-neutral-500">{PRODUCT.brand}</p>
                                <h1 className="mt-1 text-2xl font-semibold text-neutral-900 sm:text-3xl">
                                    {PRODUCT.name}
                                </h1>

                                <div className="mt-2">
                                    <StarRow value={PRODUCT.rating} max={5} reviewCount={PRODUCT.reviewCount} />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50"
                                aria-label="Add to wishlist"
                            >
                                <HeartIcon />
                            </button>
                        </div>

                        {/* Price */}
                        <div className="mt-4 flex items-center gap-3">
                            <p className="text-xl font-semibold text-neutral-900">${PRODUCT.price.toFixed(2)}</p>
                            <p className="text-sm text-neutral-400 line-through">${PRODUCT.compareAtPrice.toFixed(2)}</p>
                            <span className="rounded-full bg-red-500 px-2 py-1 text-[11px] font-semibold text-white">
                                {PRODUCT.discountLabel}
                            </span>
                        </div>

                        {/* Viewers */}
                        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
                            <EyeIcon />
                            <span>{PRODUCT.viewersText}</span>
                        </div>

                        {/* Countdown */}
                        <div className="mt-6 rounded-md border w-full border-red-200 bg-red-50 px-4 py-3">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="text-sm font-medium text-red-500">Hurry up! Sale ends in:</p>
                                <p className="font-mono text-sm font-semibold text-red-500">
                                    {format2(timeParts.d)} : {format2(timeParts.h)} : {format2(timeParts.m)} : {format2(timeParts.s)}
                                </p>
                            </div>
                        </div>

                        {/* Stock */}
                        <div className="mt-5">
                            <p className="text-sm text-neutral-600">
                                Only <span className="font-semibold text-neutral-900">{PRODUCT.stockLeft}</span> item(s) left in stock!
                            </p>
                            <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-200">
                                <div className="h-1.5 rounded-full bg-red-500" style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        {/* Size */}
                        <div className="mt-6">
                            <p className="text-sm font-semibold text-neutral-900">
                                Size: <span className="font-normal text-neutral-700">{size}</span>
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {PRODUCT.sizes.map((s) => {
                                    const active = s === size;
                                    return (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setSize(s)}
                                            className={`h-10 min-w-10 rounded-md border px-3 text-sm font-medium transition
                        ${active ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 hover:border-neutral-300"}
                      `}
                                        >
                                            {s}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Color */}
                        <div className="mt-6">
                            <p className="text-sm font-semibold text-neutral-900">
                                Color: <span className="font-normal text-neutral-700">{color}</span>
                            </p>

                            <div className="mt-3 flex items-center gap-3">
                                {PRODUCT.colors.map((c) => {
                                    const active = c.name === color;
                                    return (
                                        <button
                                            key={c.name}
                                            type="button"
                                            onClick={() => setColor(c.name)}
                                            className={`relative h-10 w-10 rounded-full border transition
                        ${active ? "border-neutral-900" : "border-neutral-200 hover:border-neutral-300"}
                      `}
                                            aria-label={`Choose color ${c.name}`}
                                            title={c.name}
                                        >
                                            <span className="absolute inset-1 rounded-full" style={{ backgroundColor: c.value }} />
                                            {active && <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white ring-1 ring-neutral-900" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quantity + Add to cart */}
                        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">Quantity</p>

                                <div className="mt-2 inline-flex items-center overflow-hidden rounded-md border border-neutral-200 bg-white">
                                    <button
                                        type="button"
                                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                                        className="h-11 w-11 text-lg text-neutral-700 hover:bg-neutral-50"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <div className="grid h-11 w-14 place-items-center text-sm font-medium text-neutral-900">{qty}</div>
                                    <button
                                        type="button"
                                        onClick={() => setQty((q) => q + 1)}
                                        className="h-11 w-11 text-lg text-neutral-700 hover:bg-neutral-50"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>


                            <button
                                type="button"
                                onClick={() => {
                                    addToCart({
                                        id: PRODUCT.id,
                                        name: PRODUCT.name,
                                        image: PRODUCT.images[active],
                                        price: PRODUCT.price,
                                        color,
                                        size,
                                        qty,
                                    });

                                    setCartOpen(true);
                                }}
                                className="h-11 w-full rounded-md border border-neutral-900 bg-white px-6 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer"
                            >
                                Add to cart
                            </button>
                        </div>

                        {/* Compare / Ask / Share */}
                        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-neutral-100 pt-5 text-sm text-neutral-700">
                            <button type="button" className="inline-flex items-center gap-2 hover:text-neutral-900">
                                <SimpleIcon type="compare" />
                                Compare
                            </button>
                            <button type="button" className="inline-flex items-center gap-2 hover:text-neutral-900">
                                <SimpleIcon type="question" />
                                Ask a question
                            </button>
                            <button type="button" className="inline-flex items-center gap-2 hover:text-neutral-900">
                                <SimpleIcon type="share" />
                                Share
                            </button>
                        </div>

                        {/* Delivery + Shipping */}
                        <div className="mt-6 space-y-3 text-sm text-neutral-700">
                            <div className="flex items-start gap-3">
                                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 fill-none stroke-neutral-700">
                                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3h8v4M7 7h10M6 7v14h12V7" />
                                </svg>
                                <p>
                                    <span className="font-semibold text-neutral-900">Estimated Delivery:</span> {PRODUCT.estimatedDelivery}
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 fill-none stroke-neutral-700">
                                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l3 5v6H3V7Z" />
                                    <path strokeWidth="1.8" strokeLinecap="round" d="M3 11h16" />
                                    <path strokeWidth="1.8" strokeLinecap="round" d="M7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                                </svg>
                                <p>
                                    <span className="font-semibold text-neutral-900">Free Shipping & Returns:</span> {PRODUCT.shippingText}
                                </p>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="mt-8 rounded-md bg-neutral-50 p-5 text-center">
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {/* {PRODUCT.paymentBadges.map((p) => ( */}
                                <img
                                    // key={p}
                                    className="grid place-items-center rounded bg-white text-[10px] font-semibold text-neutral-700 shadow-sm"

                                    src={CartImg}
                                    alt="cart-img"
                                />
                                {/* ))} */}
                            </div>
                            <p className="mt-3 text-sm text-neutral-700">Guarantee safe & secure checkout</p>
                        </div>
                    </div>
                </div>
            </div>


            <CartDrawer
                open={cartOpen}
                onClose={() => setCartOpen(false)}
                wrap={wrap}
                setWrap={setWrap}
                item={{
                    name: PRODUCT.name,
                    image: PRODUCT.images[active],
                    price: PRODUCT.price,
                    color,
                    qty,
                }}
                onInc={() => setQty((q) => q + 1)}
                onDec={() => setQty((q) => Math.max(1, q - 1))}
            />

        </div>
    );
}
