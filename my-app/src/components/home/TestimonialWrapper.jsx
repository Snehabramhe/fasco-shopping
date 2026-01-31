import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsWrapper() {
  return (
    <section className="bg-[#fafafa]">
      <div className="max-w-[90vw] mx-auto py-[8vw]">
        {/* Heading */}
        <div className="text-center mb-[6vw]">
          <h2 className="text-[clamp(28px,2.5vw,40px)] font-serif text-gray-800 mb-4">
            This Is What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
}
