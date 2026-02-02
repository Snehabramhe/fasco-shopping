import React from "react";

export default function Pagination() {
  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
      <button className="h-9 w-9 rounded-full border border-zinc-200 bg-zinc-100 text-xs">
        1
      </button>
      <button className="h-9 w-9 rounded-full border border-zinc-200 bg-white text-xs hover:bg-zinc-50">
        2
      </button>
      <button className="h-9 w-9 rounded-full border border-zinc-200 bg-white text-xs hover:bg-zinc-50">
        3
      </button>
      <button
        className="h-9 w-9 rounded-full border border-zinc-200 bg-white text-xs hover:bg-zinc-50"
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
