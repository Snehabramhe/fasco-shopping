import React from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsWrapper() {
  return (
    <section className="bg-surface section">
      <div className="max-w-[90vw] mx-auto pt-25 pb-14.5">
        {/* Heading */}
        <div className="text-center mb-[6vw]">
          <h1 className="mb-4">
            This Is What Our Customers Say
          </h1>
          <p className="max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
}
