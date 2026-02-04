import Container from "../layout/Container";
import { Button } from "@/components/ui/button";
import boy3 from "@/assets/images/boy-3.png";
import FeaturesSection from "./FeaturesSection";
import { useNavigate } from "react-router-dom";

export default function PromoBanner() {
  const navigate = useNavigate();
  return (
    <>
    <section id="packages" class="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr] md:gap-0">
      <div class="relative flex items-center justify-center bg-white">
        <img src={boy3} alt="Model Promo" class="max-w-full h-auto z-10" />
      </div>

      <div class="relative bg-[#e6e6e4] flex items-center">
        <div
          class="hidden lg:block absolute h-full w-24 xl:w-[6.2vw] bg-white 
               -skew-x-9 origin-top-left z-0 border-r-2 border-r-black"
        ></div>

        <div class="relative z-10 px-10 md:px-30 xl:pl-50 py-20 space-y-6 max-w-md">
          <p class="text-sm text-gray-500">Women Collection</p>

          <h1 class="text-4xl font-serif text-gray-800">Peaky Blinders</h1>

          <div>
            <p class="text-xs uppercase tracking-widest mb-2">Description</p>
            <p class="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>
          </div>

          <div class="flex items-center gap-4">
            <span class="text-sm">Size:</span>
            <span class="px-4 py-1 text-xs bg-black text-white rounded-full">
              M
            </span>
          </div>

          <p class="text-2xl font-semibold text-black">$100.00</p>

          <button onClick={() => navigate('/shop')} class="bg-black text-white px-10 py-3 rounded-lg hover:opacity-90 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </section>
<FeaturesSection/>
</>
  );
}


