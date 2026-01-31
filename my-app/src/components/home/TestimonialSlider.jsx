
import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const next = () => setActive((active + 1) % total);
  const prev = () => setActive((active - 1 + total) % total);

  return (
    <>
    <div className="relative min-h-125 md:min-h-100 flex justify-center overflow-visible">
      {testimonials.map((item, index) => {
        let position = index - active;
        if (position > total / 2) position -= total;
        if (position < -total / 2) position += total;

        return (
          <div
            key={item.id}
            className={`
                absolute transition-all duration-500 ease-in-out

                /* CENTER CARD */
                ${
                  position === 0
                    ? "z-30 scale-100 translate-x-0 opacity-100"
                    : ""
                }

                /* RIGHT CARD (tablet + desktop) */
                ${
                  position === 1
                    ? `
                    z-20 scale-90
                    translate-x-[17vw] lg:translate-x-[19vw]
                    hidden md:block
                `
                    : ""
                }

                /* LEFT CARD (desktop only) */
                ${
                  position === -1
                    ? `
                    z-20 scale-90
                    -translate-x-[17vw]
                    hidden lg:block
                `
                    : ""
                }

                /* HIDE ALL OTHERS */
                ${
                  Math.abs(position) > 1
                    ? "opacity-0 scale-75 pointer-events-none"
                    : ""
                }
            `}
          >
            <TestimonialCard data={item} />
          </div>                
        );
      })}


 {/* Buttons */}
      <div className="absolute bottom-0 md:-bottom-8  z-40 flex gap-4">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center"
        >
          ›
        </button>
      </div>
     
    </div>
    </>
  );
}
