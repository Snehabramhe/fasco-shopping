"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import Girl1 from "@/assets/images/girl-1.webp";
import Girl2 from "@/assets/images/girl-2.png";
import Girl3 from "@/assets/images/girl-3.png";

// IMPORTANT:
// Images must live inside /public/assets/images
// and be referenced by string paths (no alias imports)
const dealImages = [Girl1, Girl2, Girl3, Girl2, Girl1, Girl3];

export default function DealsOfTheMonth() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="w-full bg-gray-100 pt-25 pb-36.25 section">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative -mr-[calc((100vw-1280px)/2)] max-lg:mr-0">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_3fr] pl-4">
            {/* Left content */}
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-neutral-800">
                Deals Of The Month
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Scelerisque duis ultrices sollicitudin aliquam sem. <br />
                Scelerisque duis ultrices sollicitudin
              </p>

              <Button className="mt-6 rounded-md px-8">Buy Now</Button>

              <div className="mt-10">
                <p className="mb-4 text-lg font-medium text-neutral-800">
                  Hurry, Before It’s Too Late!
                </p>

                <div className="flex gap-2">
                  {[
                    { label: "Days", value: "02" },
                    { label: "Hr", value: "06" },
                    { label: "Mins", value: "05" },
                    { label: "Sec", value: "30" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="flex items-center justify-center p-2 shadow bg-white ">
                        <span className="font-mono text-3xl tracking-wider text-neutral-700">
                          {item.value}
                        </span>
                      </div>
                      <span className="text-lg text-neutral-600">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right carousel */}
            <div className="relative">
              <div className="overflow-hidden">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                // plugins={[Autoplay({ delay: 4000 })]}
                className=" overflow-hidden"
              >
                <CarouselContent className="items-end">
                  {dealImages.map((src, index) => {
                    const isActive = index === current;

                    return (
                      <CarouselItem
                        key={index}
                        className={isActive ? "basis-[55%]" : "basis-[22%]"}
                      >
                        <div
                          className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                            isActive ? "h-130" : "h-90 opacity-80"
                          }`}
                        >
                          <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="object-cover"
                            priority={index === 0}
                          />

                          {isActive && (
                            <div className="absolute bottom-6 left-6 bg-white px-5 py-4 rounded-md shadow">
                              <p className="text-xs text-neutral-500">
                                01 — Spring Sale
                              </p>
                              <p className="text-xl font-semibold">30% OFF</p>
                            </div>
                          )}
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                {/* Arrows (left & right of FIRST item only visually) */}
                <CarouselPrevious className="-left-10 top-[85%]" />
                <CarouselNext className="left-0 top-[85%]" />
              </Carousel>

              {/* Dots / Indicators */}
              <div className="mt-6 flex gap-3">
                {dealImages.map((_, index) => {
                  const active = index === current;

                  return (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        active
                          ? "bg-black ring-2 ring-black ring-offset-2"
                          : "bg-neutral-300"
                      }`}
                    />
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
