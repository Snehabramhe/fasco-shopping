import Field from "./Field";
import InputBase from "./InputBase";
import SelectBase from "./SelectBase";

function DeliverySection({ data, register, errors }) {
    const p = data.placeholders;
  
    return (
      <section className="space-y-4">
        <h2 className="font-serif text-3xl text-neutral-700">{data.title}</h2>
  
        <Field error={errors.country?.message}>
          <SelectBase {...register("country")}>
            <option value="">{data.countryPlaceholder}</option>
            {data.countries.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </SelectBase>
        </Field>
  
        <div className="grid gap-3 sm:grid-cols-2">
          <Field error={errors.firstName?.message}>
            <InputBase placeholder={p.firstName} {...register("firstName")} />
          </Field>
          <Field error={errors.lastName?.message}>
            <InputBase placeholder={p.lastName} {...register("lastName")} />
          </Field>
        </div>
  
        <Field error={errors.address?.message}>
          <InputBase placeholder={p.address} {...register("address")} />
        </Field>
  
        <div className="grid gap-3 sm:grid-cols-2">
          <Field error={errors.city?.message}>
            <InputBase placeholder={p.city} {...register("city")} />
          </Field>
          <Field error={errors.postalCode?.message}>
            <InputBase placeholder={p.postalCode} {...register("postalCode")} />
          </Field>
        </div>
  
        <label className="flex items-center gap-2 text-xs text-neutral-600">
          <input type="checkbox" className="h-4 w-4 accent-black" {...register("saveDeliveryInfo")} />
          {data.saveInfoText}
        </label>
      </section>
    );
  }

export default DeliverySection;