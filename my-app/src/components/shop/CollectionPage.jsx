import React from "react";
import FiltersSidebar from "./FiltersSidebar";
import ProductsHeader from "./ProductsHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

import { products } from "../../data/collectionData";

export default function CollectionPage() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-4 py-10">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Fashion</h1>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-zinc-500">
          <a href="#" className="hover:text-zinc-800">Home</a>
          <span>›</span>
          <span className="text-zinc-700">Fashion</span>
        </div>
      </header>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <FiltersSidebar />

        <main>
          <ProductsHeader />
          <ProductGrid products={products} />
          <Pagination />
        </main>
      </div>
    </section>
  );
}
