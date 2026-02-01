import React, { useMemo, useState } from "react";
import Girl1 from "@/assets/images/girl-1.webp";
import Girl2 from "@/assets/images/girl-2.png";
import Girl3 from "@/assets/images/girl-3.png";

const initialImages = [
    { id: 1, src: Girl1, title: "Spring Sale", discount: "30% OFF" },
    { id: 2, src: Girl2, title: "Summer Special", discount: "15% OFF" },
    { id: 3, src: Girl3, title: "Winter Arrival", discount: "10% OFF" },
];


export default function CustomCarousel() {
    const [images, setImages] = useState(initialImages);

    //   // Keep a stable "all items" list for dots (so dot count doesn't change)
    const allItems = useMemo(() => initialImages, []);
    const activeId = images[0]?.id;

    const nextSlide = () => {
        setImages((prev) => [...prev.slice(1), prev[0]]);
    };

    const prevSlide = () => {
        setImages((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    };

    const goToId = (id) => {
        setImages((prev) => {
            const idx = prev.findIndex((x) => x.id === id);
            if (idx === -1) return prev;
            return [...prev.slice(idx), ...prev.slice(0, idx)]; // rotate so clicked becomes active
        });
    };

    return (
        <div className="relative w-full flex flex-col items-center overflow-hidden xl:overflow-visible select-none">

            {/* Carousel Area */}
            <div className="relative w-full">

                {/* Track */}
                <div
                    className="
            relative
              flex gap-6
              justify-center
              md:justify-end
              pr-4            /* MOBILE padding */
              md:px-0
            "
                >
                    {images.map((img, index) => {
                        const isActive = index === 0;

                        return (
                            <div
                                key={img.id}
                                className={`
                    relative transition-[transform] duration-200 ease-out
                    ${!isActive ? "hidden md:block" : "block"}
                    ${isActive ? "w-[320px] h-120" : "w-57.5 h-95"}
                  `}
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-xl shadow-md bg-gray-100">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute bottom-5 left-5 p-3 rounded-xl shadow-xl bg-white">
                                        <p className="text-sm text-gray-700 tracking-wide">
                                            {String(img.id).padStart(2, "0")} — {img.title}
                                        </p>
                                        {img.discount && (
                                            <p className="text-2xl font-bold mt-1">
                                                {img.discount}
                                            </p>
                                        )}

                                    </div>


                                </div>
                            </div>
                        );
                    })}


                </div>


            </div>

            {/* Controls */}
            <div className="static xl:absolute xl:-left-25 xl:bottom-0 flex gap-4 mt-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow"
                >
                    ◀
                </button>

                <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow"
                >
                    ▶
                </button>
            </div>

            {/* sliders */}

            <div className="absolute md:left-[42%] md:bottom-20 left-[43%] bottom-12 xl:left-[48%] xl:bottom-0 flex items-center gap-2">
                {allItems.map((item) => {
                    const isActive = item.id === activeId;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => goToId(item.id)}
                            aria-label={`Go to slide ${item.id}`}
                            className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-black" : "bg-black/25"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}






