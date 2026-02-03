import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthTemplate from "@/components/auth/AuthTemplate";
import { AUTH_PAGES } from "@/data/authPagesConfig";

export default function AuthPage() {
    const { type } = useParams(); // signin | signup | forgot | confirm | reset
    const navigate = useNavigate();

    const config = AUTH_PAGES[type];

    if (!config) {
        return <div className="p-6">Invalid auth page.</div>;
    }

    const onSubmit = (formData, pageKey) => {
        console.log("Submit:", pageKey, formData);

        if (pageKey === "forgot") navigate("/confirm-code");
        if (pageKey === "confirm") navigate("/reset-password");
        if (pageKey === "reset") navigate("/sign-in");

    };

    return <AuthTemplate config={config} onSubmit={onSubmit} />;
}
