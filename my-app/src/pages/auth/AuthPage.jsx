import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthTemplate from "@/components/auth/AuthTemplate";
import { authSchemas } from "@/data/authSchemas";
import { AUTH_PAGES } from "@/data/authPagesConfig";

export default function AuthPage() {
  const { type } = useParams(); // signin | signup | forgot | confirm | reset
  const navigate = useNavigate();

  const config = AUTH_PAGES[type];

  if (!config) return <div className="p-6">Invalid page</div>;

  // ✅ THIS connects schema to the page
  const schema = authSchemas[config.key];

  const onSubmit = async (values) => {
    console.log("SUBMIT:", type, values);

    // example flow
    if (type === "forgot") navigate("/auth/confirm");
    if (type === "confirm") navigate("/auth/reset");
    if (type === "reset") navigate("/auth/signin");
  };

  return <AuthTemplate config={config} schema={schema} onSubmit={onSubmit} />;
}
