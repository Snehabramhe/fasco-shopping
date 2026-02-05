import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthTemplate({ config, schema, onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted }, // isSubmitted helps show errors after submit
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange", // ✅ show validation while typing
    });

    const isTwoCol = config.fields.some((f) => f.col === 2);

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
                                <h1 className="font-serif text-4xl tracking-wide text-neutral-700 text-center">
                                    FASCO
                                </h1>

                                <h2 className="mt-10 text-lg font-semibold text-neutral-900">
                                    {config.heading}
                                </h2>

                                {/* ✅ RHF FORM */}
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                                    <div className={isTwoCol ? "grid grid-cols-1 sm:grid-cols-2 gap-6" : "space-y-5"}>
                                        {config.fields.map((f) => {
                                            const errorMsg = errors?.[f.name]?.message;

                                            return (
                                                <div key={f.name} className={f.col === 2 ? "" : "sm:col-span-2"}>
                                                    <label className="block text-sm text-neutral-600 mb-1">
                                                        {f.label}
                                                    </label>

                                                    <input
                                                        type={f.type}
                                                        placeholder={f.label}
                                                        {...register(f.name)} // ✅ IMPORTANT
                                                        className={`w-full border-b bg-transparent py-3 text-sm outline-none
                              ${errorMsg ? "border-red-500" : "border-neutral-300"}
                            `}
                                                    />

                                                    {/* ✅ SHOW ERROR */}
                                                    {errorMsg && (
                                                        <p className="mt-1 text-xs text-red-600">
                                                            {String(errorMsg)}
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-8 w-full rounded-md bg-black py-3 text-sm font-semibold text-white hover:bg-neutral-900 cursor-pointer"
                                    >
                                        {config.primaryButton.text}
                                    </button>

                                    {/* Links */}
                                    {config.bottomRightLink && (
                                        <div className="mt-3 text-right">
                                            <Link
                                                to={config.bottomRightLink.to}
                                                className="text-xs font-semibold text-blue-600 cursor-pointer"
                                            >
                                                {config.bottomRightLink.text}
                                            </Link>
                                        </div>
                                    )}

                                    {config.bottomCenterLink && (
                                        <p className="mt-6 text-center text-sm text-neutral-600">
                                            {config.bottomCenterLink.text}
                                            <Link
                                                to={config.bottomCenterLink.to}
                                                className="font-semibold text-blue-600"
                                            >
                                                {config.bottomCenterLink.linkText}
                                            </Link>
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
