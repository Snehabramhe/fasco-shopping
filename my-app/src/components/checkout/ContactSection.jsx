import Field from "./Field";
import InputBase from "./InputBase";

function ContactSection({ data, register, errors }) {
    return (
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-serif text-3xl text-neutral-700">{data.title}</h2>
          <p className="text-xs text-neutral-600">
            {data.accountText}{" "}
            <a className="text-blue-600" href={data.accountLinkTo}>
              {data.accountLinkText}
            </a>
          </p>
        </div>
  
        <Field error={errors.email?.message}>
          <InputBase placeholder={data.emailPlaceholder} {...register("email")} />
        </Field>
      </section>
    );
  }

export default ContactSection;