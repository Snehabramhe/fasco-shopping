function SelectBase(props) {
    return (
      <select
        {...props}
        className={[
          "w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm",
          "focus:border-neutral-600 focus:outline-none",
          props.className || "",
        ].join(" ")}
      />
    );
  }

export default SelectBase;