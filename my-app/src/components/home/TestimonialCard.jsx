import { testimonials } from "@/data/testimonials";
import Container from "../layout/Container";


export function TestimonialCard({ data }) {
  return (
    <div
      className="
        bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8
        px-6 py-8

        /* Mobile */
        w-[90vw]

        /* Tablet */
        md:w-[62vw] md:py-12 md:px-8 md:items-start

        /* Desktop */
        lg:w-[48vw] lg:px-12 lg:py-10
      "
    >
      {/* Image wrapper */}
      <div
        className="
          relative shrink-0 rounded-lg overflow-hidden bg-gray-100

          /* Mobile */
          w-24 h-24

          /* Tablet */
          md:w-36 md:h-44

          /* Desktop */
          lg:w-40 lg:h-40
        "
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          “{data.text}”
        </p>

        <div className="flex gap-1 text-orange-400 mb-4">
          {"★★★★★".slice(0, data.rating)}
        </div>

        <div className="border-t pt-3">
          <h4 className="font-serif text-lg text-gray-800">
            {data.name}
          </h4>
          <p className="text-sm text-gray-500">{data.role}</p>
        </div>
      </div>
    </div>
  );
}

