// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import boy4 from "@/assets/images/boy-4.png"
// import girl10 from "@/assets/images/girl10.png"


// export default function Newsletter() {
//   return (
//     <section class="relative w-full min-h-210 bg-white flex items-center justify-center overflow-hidden">
//       <img
//         src={boy4}
//         alt="Left Model"
//         class="hidden lg:block absolute left-24 bottom-0 h-175 object-contain"
//       />

//       <img
//         src={girl10}
//         alt="Right Model"
//         class="hidden lg:block absolute right-24 bottom-0 h-175 object-contain"
//       />

//       <div class="relative z-10 max-w-xl text-center px-6">
//         <h2 class="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
//           Subscribe To Our Newsletter
//         </h2>

//         <p class="text-sm text-gray-500 leading-relaxed mb-10">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
//           duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
//           sollicitudin
//         </p>

//         <div class="bg-white shadow-lg rounded-md overflow-hidden mb-8">
//           <input
//             type="email"
//             placeholder="michael@ymail.com"
//             class="w-full px-6 py-4 text-sm outline-none"
//           />
//         </div>

//         <button class="bg-black text-white px-10 py-4 rounded-lg text-sm shadow-lg hover:opacity-90 transition">
//           Subscribe Now
//         </button>
//       </div>
//     </section>
//   );
// }






import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import boy4 from "@/assets/images/boy-4.png";
import girl10 from "@/assets/images/girl10.png";

export default function Newsletter() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">

          {/* Mobile Image */}
          <img
            src={boy4}
            alt="Newsletter Model"
            className="w-64 sm:w-72 lg:hidden"
          />

          {/* Left Image (Desktop / Tablet) */}
          <img
            src={boy4}
            alt="Left Model"
            className="hidden lg:block w-72 xl:w-80 object-contain"
          />

          {/* Content */}
          <div className="max-w-xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Subscribe To Our Newsletter
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>

            <div className="bg-white shadow-lg rounded-md overflow-hidden mb-8">
              <Input
                type="email"
                placeholder="michael@ymail.com"
                className="px-6 py-4 text-sm"
              />
            </div>

            <Button className="px-10 py-4 text-sm">
              Subscribe Now
            </Button>
          </div>

          {/* Right Image (Desktop / Tablet) */}
          <img
            src={girl10}
            alt="Right Model"
            className="hidden lg:block w-72 xl:w-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
