function Field({ label, error, children }) {
    return (
      <div className="space-y-1">
        {label ? <label className="text-[11px] tracking-wide text-neutral-500">{label}</label> : null}
        {children}
        {error ? <p className="text-xs text-red-600">{error}</p> : null}
      </div>
    );
  }

export default Field;