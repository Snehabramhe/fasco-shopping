import React from "react";
import { sortOptions } from "../../data/collectionData";

export default function ProductsHeader() {
  return (
    <div className="mb-5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span>Best selling</span>
        <select className="cursor-pointer bg-transparent text-zinc-900 outline-none">
          {sortOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        {["▦", "▤", "▥", "≡"].map((icon) => (
          <button
            key={icon}
            className="grid h-8 w-8 place-items-center rounded-lg border border-zinc-200 bg-white text-sm hover:border-zinc-300"
            aria-label="view mode"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}
