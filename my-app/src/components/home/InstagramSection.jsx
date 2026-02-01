import follow1 from "@/assets/images/follow-1.png";
import follow2 from "@/assets/images/follow-2.png";
import follow3 from "@/assets/images/follow-3.png";
import follow4 from "@/assets/images/follow-4.png";
import follow5 from "@/assets/images/follow-5.png";
import follow6 from "@/assets/images/follow-6.png";
import follow7 from "@/assets/images/follow-7.png";
import Container from "../layout/Container";

const images = [follow1, follow2, follow3, follow4, follow5, follow6, follow7];

export default function InstagramSection() {
  return (
    <section className="section">

      {/* Heading */} 
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="text-4xl font-serif text-gray-800">
          Follow Us On Instagram
        </h2>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>
      </div>

      {/* Image Strip */}
      <div className="w-full relative overflow-hidden ">
        <div className="flex justify-center items-center">
          {images.map((src, index) => {
            const isCenter = index === Math.floor(images.length / 2);

            return (
              <div
                key={index}
                className={`relative transition-transform duration-300
                  ${isCenter ? "scale-110 z-10" : "scale-100"}
                `}
              >
                <img
                  src={src}
                  alt="Instagram post"
                  loading="lazy"
                  decoding="async"
                  className="object-cover shadow-md"
                />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
