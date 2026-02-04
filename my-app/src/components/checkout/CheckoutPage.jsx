import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CHECKOUT_DATA } from "@/data/checkoutData";
import { checkoutSchema } from "@/schema/checkoutSchema";
import DeliverySection from "./DeliverySection";
import PaymentSection from "./PaymentSection";
import SummaryPanel from "./SummaryPanel";
import ContactSection from "./ContactSection";


export default function CheckoutPage() {
  const d = CHECKOUT_DATA;

  const [qty, setQty] = useState(1);
  const item = useMemo(() => d.demoSummaryItem, [d.demoSummaryItem]);
  const shipping = d.demoShipping;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange", // ✅ show validation while typing
    defaultValues: d.defaultValues,
  });

  const onSubmit = async (values) => {
    console.log("Checkout Submit:", values);
    alert("Payment submitted ✅ (demo)");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-neutral-200 py-4">
        <h1 className="text-center font-serif text-xl tracking-wide text-neutral-900">
          {d.pageTitle}
        </h1>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 py-0 ">
        <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
          {/* LEFT */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <ContactSection data={d.contact} register={register} errors={errors} />
            <DeliverySection data={d.delivery} register={register} errors={errors} />
            <PaymentSection
              data={d.payment}
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              watch={watch}
              setValue={setValue}
            />
          </form>

          {/* RIGHT */}
          <SummaryPanel
            data={d.summary}
            register={register}
            qty={qty}
            setQty={setQty}
            item={item}
            shipping={shipping}
          />

      
        </div>

      <div className="border-b border-neutral-200"></div>
      </div>

    </div>
  );
}
