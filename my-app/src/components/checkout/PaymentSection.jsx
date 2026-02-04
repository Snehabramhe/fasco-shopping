import Field from "./Field";
import InputBase from "./InputBase";
import SelectBase from "./SelectBase";

function PaymentSection({ data, register, errors, isSubmitting, watch, setValue }) {
    // format card digits only
    const handleCardNumberChange = (e) => {
      const raw = e.target.value.replace(/\s+/g, "").replace(/[^\d]/g, "");
      setValue("cardNumber", raw, { shouldValidate: true, shouldDirty: true });
    };
  
    // format expiry MM/YY
    const handleExpiryChange = (e) => {
      let v = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
      if (v.length >= 3) v = `${v.slice(0, 2)}/${v.slice(2)}`;
      setValue("expiry", v, { shouldValidate: true, shouldDirty: true });
    };
  
    const p = data.placeholders;
  
    return (
      <section className="space-y-4">
        <h2 className="font-serif text-3xl text-neutral-700">{data.title}</h2>
  
        <div className="rounded-sm border border-neutral-300 bg-white">
          <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2">
            <SelectBase className="border-0 p-0 pr-8 text-sm focus:ring-0" {...register("paymentMethod")}>
              {data.methods.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </SelectBase>
  
            <span className="inline-flex h-5 w-8 items-center justify-center rounded bg-neutral-100 text-[10px] text-neutral-700">
              💳
            </span>
          </div>
  
          <div className="space-y-3 p-3">
            <Field error={errors.cardNumber?.message}>
              <div className="relative">
                <InputBase
                  placeholder={p.cardNumber}
                  value={watch("cardNumber")}
                  onChange={handleCardNumberChange}
                  inputMode="numeric"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">🔒</span>
              </div>
            </Field>
  
            <div className="grid gap-3 sm:grid-cols-2">
              <Field error={errors.expiry?.message}>
                <InputBase
                  placeholder={p.expiry}
                  value={watch("expiry")}
                  onChange={handleExpiryChange}
                  inputMode="numeric"
                />
              </Field>
              <Field error={errors.cvc?.message}>
                <InputBase placeholder={p.cvc} {...register("cvc")} inputMode="numeric" />
              </Field>
            </div>
  
            <Field error={errors.cardHolderName?.message}>
              <InputBase placeholder={p.cardHolderName} {...register("cardHolderName")} />
            </Field>
          </div>
        </div>
  
        <label className="flex items-center gap-2 text-xs text-neutral-600">
          <input type="checkbox" className="h-4 w-4 accent-black" {...register("savePaymentInfo")} />
          {data.saveInfoText}
        </label>
  
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-md bg-black py-3 text-sm font-semibold text-white shadow-md hover:bg-neutral-900 disabled:opacity-60"
        >
          {isSubmitting ? "Processing..." : data.payBtnText}
        </button>
  
        <p className="text-center text-[10px] text-neutral-500">{data.footerText}</p>
      </section>
    );
  }

export default PaymentSection;