import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SocialButtons from "./SocialButtons";
import DividerOr from "./DividerOr";
import UnderlineInput from "./UnderlineInput";


export default function AuthTemplate({ config, onSubmit }) {
  const initialState = useMemo(() => {
    const obj = {};
    config.fields.forEach((f) => (obj[f.name] = ""));
    return obj;
  }, [config.fields]);

  const [form, setForm] = useState(initialState);

  const set = (name) => (e) => setForm((p) => ({ ...p, [name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form, config.key);
  };

  const primaryIsBlue = config.primaryButton?.variant === "blue";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-8 lg:py-12">
        <div className="overflow-hidden rounded-2xl border bg-white">
          <div className="grid lg:grid-cols-2">
            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src={config.heroImage}
                alt="auth"
                className="h-80 w-full object-cover lg:h-full lg:min-h-170"
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
              <div className="w-full max-w-115">
                <div className="text-center">
                  <h1 className="font-serif text-4xl tracking-wide text-neutral-700">FASCO</h1>
                  <h2 className="mt-10 text-left text-lg font-semibold text-neutral-900">
                    {config.heading}
                  </h2>
                </div>

                <div className="mt-6">
                  {config.showSocial ? (
                    <>
                      <SocialButtons/>
                      <DividerOr/>
                    </>
                  ) : null}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Fields */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      {config.fields.map((f) => {
                        const colSpan = f.col === 2 ? "sm:col-span-1" : "sm:col-span-2";
                        // if f.col=2 => two-column layout, else full width
                        // Adjust: for full width set col undefined
                        const spanClass = f.col === 2 ? "sm:col-span-1" : "sm:col-span-2";

                        return (
                          <div key={f.name} className={spanClass}>
                            <UnderlineInput
                              label={f.label}
                              type={f.type}
                              value={form[f.name]}
                              onChange={set(f.name)}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Primary */}
                    <button
                      type="submit"
                      className={
                        primaryIsBlue
                          ? "mt-5 w-full rounded-md bg-blue-500 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600"
                          : "mt-5 w-full rounded-md bg-black py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-neutral-900"
                      }
                    >
                      {config.primaryButton?.text}
                    </button>

                    {/* Secondary (optional) */}
                    {config.secondaryButton ? (
                      <button
                        type="button"
                        className="mt-3 w-full rounded-md border border-blue-400 bg-white py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                      >
                        {config.secondaryButton.text}
                      </button>
                    ) : null}

                    {/* Bottom Right Link (optional) */}
                    {config.bottomRightLink ? (
                      <div className="text-right">
                        <Link
                          to={config.bottomRightLink.to}
                          className="text-xs font-semibold text-blue-600"
                        >
                          {config.bottomRightLink.text}
                        </Link>
                      </div>
                    ) : null}

                    {/* Bottom Center Link (optional) */}
                    {config.bottomCenterLink ? (
                      <p className="mt-3 text-center text-sm text-neutral-600">
                        {config.bottomCenterLink.text}
                        <Link
                          to={config.bottomCenterLink.to}
                          className="font-semibold text-blue-600"
                        >
                          {config.bottomCenterLink.linkText}
                        </Link>
                      </p>
                    ) : null}
                  </form>
                </div>

                <p className="mt-10 text-right text-xs text-neutral-700">FASCO Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
