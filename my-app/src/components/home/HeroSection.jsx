import Container from "../layout/Container";
import { Button } from "@/components/ui/button";
import boy1Image from "@/assets/images/boy1.webp";
import boy2Image from "@/assets/images/boy2.webp";
import girlsGroup1 from "@/assets/images/girls-group-1.png"
import girlsGroup2 from "@/assets/images/girls-group-2.png"
import BrandStrip from "./BrandStrip";

export default function HeroSection() {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-center">

          <div className="bg-[#E0E0E0] md:h-full relative rounded-md">
            <img
              src={boy1Image}
              alt="Model"
              className="rounded-md absolute bottom-0 md:h-[80%] max-md:static hidden md:block"
            />
          </div>

          <div className="flex flex-col justify-center gap-9">
            <div>
              <img src={girlsGroup1} alt="girlsGroup1" />
            </div>
            <div className="text-center">
              <h2 className="display-lg">ULTIMATE</h2>
              <h1 className="display-xl text-outline">SALE</h1>
              <p className="body spac">NEW COLLECTION</p>
              <Button className="category-btn-active mt-4.75 px-15 py-5">Shop Now</Button>
            </div>
            <div>
              <img src={girlsGroup2} alt="girlsGroup2" />
            </div>
          </div>


          <div className="bg-[#E0E0E0] md:h-full relative rounded-md">
            <img
              src={boy2Image}
              alt="Model"
              className="rounded-md absolute bottom-0 left-[20%] md:h-[80%] hidden md:block"
            />
          </div>
        </div>

        <BrandStrip />
      </Container>

    </section>
  );
}







