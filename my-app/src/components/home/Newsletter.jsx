import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import boy4 from "@/assets/images/boy-4.png";
import girl10 from "@/assets/images/girl10.png";
import { toast } from "sonner"

export default function Newsletter() {

  return (
    <section className="w-full bg-white overflow-hidden section">
      <div className="max-w-360 mx-auto px-6">
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
          <div className=" text-center">
            <h1 className="mb-5">
              Subscribe To Our Newsletter
            </h1>

            <p className="mb-7.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>

            <div className="bg-white shadow-lg rounded-md overflow-hidden mb-7.5">
              <Input
                type="email"
                placeholder="michael@ymail.com"
                className="px-8 py-7 text-sm"
              />
            </div>

            <Button onClick={() => toast.success("You have subscribed to the newsletter")} className="px-11 py-5 text-sm cursor-pointer">
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
