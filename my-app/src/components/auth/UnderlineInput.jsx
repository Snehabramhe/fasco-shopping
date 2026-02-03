import React from "react";

function UnderlineInput({ label, type, value, onChange }) {
    return (
      <label className="block">
        <span className="sr-only">{label}</span>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="w-full border-b border-neutral-300 bg-transparent py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-900"
        />
      </label>
    );
  }

export default UnderlineInput;