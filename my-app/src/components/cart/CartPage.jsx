import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { useCart } from "@/components/cart/CartContext";
import Container from "@/components/layout/Container";

export default function CartPage() {
  const { cartItems, incQty, decQty, removeItem, wrap, setWrap } = useCart();

  const subtotal = useMemo(() => {
    const itemsTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    return wrap ? itemsTotal + 10 : itemsTotal;
  }, [cartItems, wrap]);

  return (
    <div className="bg-white">
      <Container>
        {/* Header */}
        <div className="py-10 text-center">
          <h1 className="text-4xl font-semibold tracking-wide">Shopping Cart</h1>
          <div className="mt-2 text-sm text-neutral-600">
            <Link to="/" className="hover:text-black">Home</Link>
            <span className="mx-2">›</span>
            <span>Your Shopping Cart</span>
          </div>
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr] border-b border-neutral-300 pb-4 text-lg font-semibold">
          <div>Product</div>
          <div>Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {/* Items */}
        <div className="divide-y divide-neutral-200">
          {cartItems.length === 0 ? (
            <div className="py-14 text-center text-neutral-600">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => {
              const rowTotal = (item.price * item.qty).toFixed(2);

              return (
                <div
                  key={`${item.id}-${item.color}-${item.size}`}
                  className="py-8 md:grid md:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr] md:items-start md:gap-6"
                >
                  {/* Product */}
                  <div className="flex gap-5">
                    <div className="h-36 w-28 overflow-hidden rounded-md bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="pt-1">
                      <p className="text-lg font-semibold leading-6">{item.name}</p>
                      <p className="mt-3 text-sm text-neutral-600">
                        Color : {item.color}{item.size ? ` • Size : ${item.size}` : ""}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.color, item.size)}
                        className="mt-6 text-sm underline text-neutral-500 hover:text-black"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 md:mt-0 text-lg font-semibold">
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity */}
                  <div className="mt-6 md:mt-0 flex md:justify-center">
                    <div className="inline-flex items-center overflow-hidden rounded-md border border-neutral-300">
                      <button
                        type="button"
                        onClick={() => decQty(item.id, item.color, item.size)}
                        className="h-10 w-10 text-lg hover:bg-neutral-50"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <div className="h-10 w-14 grid place-items-center text-sm font-semibold text-neutral-700">
                        {String(item.qty).padStart(2, "0")}
                      </div>
                      <button
                        type="button"
                        onClick={() => incQty(item.id, item.color, item.size)}
                        className="h-10 w-10 text-lg hover:bg-neutral-50"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mt-6 md:mt-0 text-right text-lg font-semibold">
                    ${rowTotal}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom right summary (like screenshot) */}
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_520px] items-start">
          <div className="hidden md:block" />

          <div className="border-t border-neutral-200 pt-8">
            <label className="flex items-center gap-3 text-neutral-700">
              <input
                type="checkbox"
                className="h-6 w-6 accent-black"
                checked={wrap}
                onChange={(e) => setWrap(e.target.checked)}
              />
              <span>
                For <span className="font-semibold text-black">$10.00</span> Please Wrap The Product
              </span>
            </label>

            <div className="mt-8 border-t border-neutral-200 pt-8 flex items-center justify-between text-lg">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-md bg-black py-4 text-white shadow-lg hover:bg-neutral-900"
            >
              Checkout
            </button>

            <div className="mt-6 text-center">
              <Link to="/cart" className="text-sm font-semibold underline hover:text-neutral-700">
                View Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="py-14" />
      </Container>
    </div>
  );
}