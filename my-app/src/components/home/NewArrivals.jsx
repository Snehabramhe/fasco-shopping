import React from "react";
import girl4 from "@/assets/images/girl-4.png";
import girl5 from "@/assets/images/girl-5.png";
import girl6 from "@/assets/images/girl-6.png";
import girl7 from "@/assets/images/girl-7.png";
import girl8 from "@/assets/images/girl-8.png";
import girl9 from "@/assets/images/girl-9.png";
import { Button } from "@/components/ui/button";
import Container from "../layout/Container";

const products = [
  {
    id: 1,
    title: "Shiny Dress",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl4,
    almostSoldOut: true,
    border: false,
  },
  {
    id: 2,
    title: "Long Dress",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl5,
    almostSoldOut: true,
    border: false,
  },
  {
    id: 3,
    title: "Full Sweater",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl6,
    almostSoldOut: true,
    border: false,
  },
  {
    id: 4,
    title: "White Dress",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl7,
    almostSoldOut: true,
    border: false,
  },
  {
    id: 5,
    title: "Colorful Dress",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl8,
    almostSoldOut: true,
    border: true,
  },
  {
    id: 6,
    title: "White Shirt",
    brand: "Al Karam",
    rating: 5,
    reviews: "4.1k",
    price: 95.5,
    image: girl9,
    almostSoldOut: true,
    border: false,
  },
];

const NewArrivals = () => {
  return (
    <section className="section">
      <Container>
        <div className="py-12">
          {/* Header */}
          <h1 className="text-center">New Arrivals</h1>
          <p className="mt-3 max-w-2xl mx-auto text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis <br />
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <Button variant="ghost" className="category-btn py-6">
              {" "}
              Men's Fashion
            </Button>
            <Button
              variant="ghost"
              className="category-btn category-btn-active py-6"
            >
              {" "}
              Women's Fashion
            </Button>
            <Button variant="ghost" className="category-btn py-6">
              {" "}
              Women Accessories
            </Button>
            <Button variant="ghost" className="category-btn py-6">
              {" "}
              Men Accessories
            </Button>
            <Button variant="ghost" className="category-btn py-6">
              {" "}
              Discount Deals
            </Button>
          </div>

          {/* Products Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 p-4"
              >
                {/* Image Container with optional blue border */}
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="pt-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {product.title}
                      </h3>
                      <span className=" text-amber-400 text-lg">
                        {"★★★★★".slice(0, product.rating)}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-0.5">
                      {product.brand}
                    </p>
                  </div>

                  <div className="flex py-6.25">
                    <span className="text-gray-500 text-sm">
                      ({product.reviews}) Customer Reviews
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between items-baseline">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.almostSoldOut && (
                      <p className="text-red-500 text-sm font-medium mt-1">
                        Almost Sold Out
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-12">
            {/* <button className="px-15.75 py-5 category-btn bg-black hover:bg-gray-800 text-white font-medium rounded-sm transition-colors shadow-lg">
              View More
            </button> */}
            <button className="category-btn-active rounded-sm px-15.75 py-5">
              View More
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default NewArrivals;
