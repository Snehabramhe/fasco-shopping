import React, { useEffect } from "react";

const money = (n) => `$${Number(n).toFixed(2)}`;

export default function CartPageModal({
  open,
  onClose,
  cartItems = [],
  wrap,
  setWrap,
  onInc,
  onDec,
  onRemove,
}) {
  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const subtotal =
    cartItems.reduce((sum, it) => sum + it.price * it.qty, 0) + (wrap ? 10 : 0);

  return (
    <div className="fixed inset-0 z-9999">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className="
          absolute left-1/2 top-1/2 w-[95vw] -translate-x-1/2 -translate-y-1/2
          bg-white shadow-2xl rounded-xl
          max-w-[1150px]
          max-h-[90vh] overflow-y-auto
          p-4 sm:p-8
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              Home <span className="mx-2">›</span> Your Shopping Cart
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-4 grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Table head */}
        <div className="mt-10 hidden md:grid grid-cols-[2.2fr_1fr_1fr_1fr] text-left font-semibold text-neutral-900">
          <p>Product</p>
          <p>Price</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Total</p>
        </div>

        <div className="mt-4 border-t border-neutral-300" />

        {/* Items */}
        <div className="divide-y divide-neutral-200">
          {cartItems.map((item) => {
            const lineTotal = item.price * item.qty;

            return (
              <div
                key={item.id}
                className="
                  py-6
                  grid grid-cols-1 gap-5
                  md:grid-cols-[2.2fr_1fr_1fr_1fr]
                  items-start
                "
              >
                {/* Product */}
                <div className="flex gap-5">
                  <div className="h-36 w-28 shrink-0 bg-neutral-100 rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-lg font-semibold leading-snug text-neutral-900">
                      {item.name}
                    </p>
                    <p className="mt-4 text-neutral-500 text-base">
                      Color : {item.color}
                    </p>

                    <button
                      type="button"
                      onClick={() => onRemove(item.id, item.color, item.size)}
                      className="mt-4 text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="md:pt-2">
                  <p className="md:hidden text-sm text-neutral-500">Price</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {money(item.price)}
                  </p>
                </div>

                {/* Quantity */}
                <div className="md:pt-2 flex md:justify-center">
                  <div className="md:hidden mr-4 text-sm text-neutral-500">
                    Quantity
                  </div>

                  <div className="inline-flex items-center overflow-hidden rounded-md border border-neutral-300">
                    <button
                      onClick={() => onDec(item.id, item.color, item.size)}
                      className="h-10 w-10 text-lg hover:bg-neutral-50"
                      aria-label="Decrease"
                    >
                      −
                    </button>
                    <div className="grid h-10 w-12 place-items-center text-base text-neutral-600">
                      {String(item.qty).padStart(2, "0")}
                    </div>
                    <button
                      onClick={() => onInc(item.id, item.color, item.size)}
                      className="h-10 w-10 text-lg hover:bg-neutral-50"
                      aria-label="Increase"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="md:pt-2 md:text-right">
                  <p className="md:hidden text-sm text-neutral-500">Total</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {money(lineTotal)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-neutral-300 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_420px]">
            <div />

            {/* Summary box */}
            <div className="space-y-6">
              {/* Wrap */}
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-6">
                <button
                  type="button"
                  onClick={() => setWrap(!wrap)}
                  className={`h-6 w-6 border-2 ${
                    wrap ? "bg-black border-black" : "bg-white border-black"
                  }`}
                  aria-label="Gift wrap"
                />
                <p className="text-neutral-500">
                  For <span className="text-neutral-900 font-medium">$10.00</span>{" "}
                  Please Wrap The Product
                </p>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between text-lg font-semibold">
                <p>Subtotal</p>
                <p>{money(subtotal)}</p>
              </div>

              {/* Buttons */}
              <button className="h-12 w-full rounded-md bg-black text-white shadow-lg hover:bg-neutral-900">
                Checkout
              </button>

              <button className="w-full text-center underline underline-offset-4 font-semibold">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
