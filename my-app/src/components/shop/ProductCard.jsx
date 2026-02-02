import React from "react";

export default function ProductCard({ product }) {
  const { title, price, oldPrice, image, soldOut, variants } = product;

  return (
    <article className="space-y-2">
      <div className="relative overflow-hidden rounded-xl bg-zinc-100 shadow-sm">
        <img src={image} alt={title} className="aspect-3/4 w-full object-cover" />

        {soldOut && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2 py-1 text-[11px] tracking-wide text-white">
            SOLD OUT
          </span>
        )}
      </div>

      <h4 className="text-[13px] font-semibold text-zinc-900">{title}</h4>

      <div className="flex items-baseline gap-2 text-xs">
        <span className="font-medium text-zinc-900">{price}</span>
        {oldPrice && <span className="text-zinc-500 line-through">{oldPrice}</span>}
      </div>

      <div className="flex items-center gap-2">
        {variants?.map((c, idx) => (
          <span
            key={idx}
            className="h-3.5 w-3.5 rounded-full border border-zinc-300"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </article>
  );
}
