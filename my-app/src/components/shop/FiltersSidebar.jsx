import React from "react";
import {
  sizes,
  colors,
  priceRanges,
  brands,
  collections,
  tags,
} from "../../data/collectionData";

function SectionTitle({ children }) {
  return (
    <h3 className="text-[13px] font-semibold tracking-wide text-zinc-900">
      {children}
    </h3>
  );
}

function Divider() {
  return <div className="h-px w-full bg-zinc-200" />;
}

export default function FiltersSidebar() {
  return (
    <aside className="lg:sticky lg:top-6 lg:h-fit">
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>

      {/* Size */}
      <div className="py-4">
        <SectionTitle>Size</SectionTitle>
        <div className="mt-3 grid max-w-45 grid-cols-4 gap-2">
          {sizes.map((s) => (
            <button
              key={s}
              className="rounded-lg border border-zinc-200 bg-white py-2 text-xs text-zinc-800 hover:border-zinc-300"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <Divider />

      {/* Colors */}
      <div className="py-4">
        <SectionTitle>Colors</SectionTitle>
        <div className="mt-3 grid grid-cols-8 gap-2">
          {colors.map((c, idx) => (
            <button
              key={idx}
              aria-label="color"
              className="h-4.5 w-4.5 rounded-full border border-zinc-200"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <Divider />

      {/* Prices */}
      <div className="py-4">
        <SectionTitle>Prices</SectionTitle>
        <ul className="mt-3 space-y-2 text-xs text-zinc-500">
          {priceRanges.map((p) => (
            <li key={p}>
              <a href="#" className="hover:text-zinc-800">
                {p}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      {/* Brands */}
      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <SectionTitle>Brands</SectionTitle>
          <span className="text-zinc-400 group-open:rotate-180">⌃</span>
        </summary>

        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
          {brands.map((b) => (
            <li key={b}>
              <a href="#" className="hover:text-zinc-800">
                {b}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <Divider />

      {/* Collections */}
      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <SectionTitle>Collections</SectionTitle>
          <span className="text-zinc-400 group-open:rotate-180">⌃</span>
        </summary>

        <ul className="mt-3 space-y-2 text-xs text-zinc-500">
          {collections.map((c) => (
            <li key={c}>
              <a href="#" className="hover:text-zinc-800">
                {c}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <Divider />

      {/* Tags */}
      <div className="py-4">
        <SectionTitle>Tags</SectionTitle>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
          {tags.map((t) => (
            <li key={t}>
              <a href="#" className="hover:text-zinc-800">
                {t}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
