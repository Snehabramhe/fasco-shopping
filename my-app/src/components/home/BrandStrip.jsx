import icon1 from "@/assets/icons/icon1.svg";
import icon2 from "@/assets/icons/icon2.svg";
import icon3 from "@/assets/icons/icon3.svg";
import icon4 from "@/assets/icons/icon4.svg";
import icon5 from "@/assets/icons/icon5.svg";

const icons = [icon1, icon2, icon3, icon4, icon5];

export default function BrandMarquee() {
  return (
    <div className="w-full overflow-hidden py-20.5 mt-0 md:mt-6.75">
      <div
        className="
          flex w-max
          animate-marquee 
        "
      >
        {/* double set */}
        {[...icons, ...icons].map((src, i) => (
          <img
            key={`double-${i}`}
            src={src}
            alt=""
            className="h-12 mx-8 shrink-0 opacity-80"
          />
        ))}

      </div>
    </div>
  );
}