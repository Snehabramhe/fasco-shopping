import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

export default function CartDrawer({
  open,
  onClose,
  item,
  onInc,
  onDec,
  wrap,
  setWrap,
  freeShipRemaining = 122.35,
}) {
  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const navigate = useNavigate();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const subtotal = (item?.price ?? 0) * (item?.qty ?? 0) + (wrap ? 10 : 0);

  return (
    <div className="fixed inset-0 z-9999">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="
          absolute right-0 top-0 h-full w-full bg-white shadow-2xl
          sm:w-110
          flex flex-col
          animate-[slideIn_.25s_ease-out]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Shopping Cart
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Buy <span className="font-semibold text-neutral-900">{money(freeShipRemaining)}</span>{" "}
              More And Get <span className="font-semibold text-neutral-900">Free Shipping</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-6">
          {/* Item row */}
          <div className="flex gap-4 border-b border-neutral-200 pb-6">
            <div className="h-24 w-20 shrink-0 overflow-hidden rounded-md bg-neutral-100">
              <img
                src={item?.image}
                alt={item?.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-neutral-900">
                {item?.name}
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Color : {item?.color}
              </p>

              <p className="mt-2 text-sm text-neutral-900">
                {money(item?.price)}
              </p>

              {/* Qty */}
              <div className="mt-3 inline-flex items-center overflow-hidden rounded-md border border-neutral-200 bg-white">
                <button
                  type="button"
                  onClick={onDec}
                  className="h-10 w-10 text-lg hover:bg-neutral-50"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <div className="grid h-10 w-12 place-items-center text-sm font-medium">
                  {String(item?.qty ?? 1).padStart(2, "0")}
                </div>
                <button
                  type="button"
                  onClick={onInc}
                  className="h-10 w-10 text-lg hover:bg-neutral-50"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Gift wrap */}
          <div className="flex items-center gap-3 border-b border-neutral-200 py-6">
            <button
              type="button"
              onClick={() => setWrap(!wrap)}
              className={`h-6 w-6 border-2 ${
                wrap ? "bg-black border-black" : "bg-white border-black"
              }`}
              aria-label="Toggle gift wrap"
            />
            <p className="text-sm text-neutral-700">
              For <span className="font-medium text-neutral-900">$10.00</span>{" "}
              Please Wrap The Product
            </p>
          </div>

          {/* Subtotal */}
          <div className="flex items-center justify-between pt-6 text-sm">
            <p className="font-semibold text-neutral-900">Subtotal</p>
            <p className="font-semibold text-neutral-900">{money(subtotal)}</p>
          </div>

          {/* Buttons */}
          <div className="mt-5">
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="h-12 w-full rounded-md bg-black text-sm font-semibold text-white shadow-lg hover:bg-neutral-900 cursor-pointer"
            >
              checkout
            </button>

            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="mt-4 w-full text-center text-sm font-semibold underline underline-offset-4 cursor-pointer"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind keyframes (inline) */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
