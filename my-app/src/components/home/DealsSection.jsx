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
import CustomCarousel from "./CustomCarousel";

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
        <div className="relative mr-0">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] pl-4">
            {/* Left content */}
            <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
              <h1>
                Deals Of The Month
              </h1>
              <p className="mt-4 max-w-[80%] lg:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit. Scelerisque duis ultrices sollicitudin aliquam sem. <br />
                Scelerisque duis ultrices sollicitudin
              </p>

              <Button className="mt-6 rounded-md px-17.5 py-5 category-btn-active">Buy Now</Button>

              <div className="mt-10">
                <h4 className="mb-4">
                  Hurry, Before It’s Too Late!
                </h4>

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
            <CustomCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
