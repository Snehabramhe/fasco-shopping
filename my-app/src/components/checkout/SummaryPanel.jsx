import InputBase from "./InputBase";

function SummaryPanel({ data, register, qty, setQty, item, shipping }) {
    const subtotal = item.price * qty;
    const total = subtotal + shipping;
  
    const applyDiscount = () => {
      alert("Demo only: connect discount logic later ✅");
    };
  
    return (
      <aside className="lg:border-l lg:border-neutral-200 lg:pl-6">
        <div className="rounded-md bg-neutral-50 p-4">
          <div className="flex items-start gap-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-md bg-white">
              <img src={item.image} alt="" className="h-full w-full" />
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                {qty}
              </span>
            </div>
  
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-neutral-900">{item.title}</p>
              <p className="text-[11px] text-neutral-500">{item.variant}</p>
  
              <div className="mt-2 inline-flex items-center overflow-hidden rounded border border-neutral-300 bg-white">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-8 w-8 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  −
                </button>
                <div className="grid h-8 w-10 place-items-center text-xs font-semibold text-neutral-700">
                  {String(qty).padStart(2, "0")}
                </div>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-8 w-8 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  +
                </button>
              </div>
            </div>
  
            <p className="text-xs text-neutral-700">${subtotal.toFixed(2)}</p>
          </div>
  
          <div className="mt-4 flex gap-3">
            <InputBase placeholder={data.discountPlaceholder} {...register("discountCode")} className="bg-white" />
            <button
              type="button"
              onClick={applyDiscount}
              className="min-w-23 rounded-md bg-black px-4 text-xs font-semibold text-white shadow hover:bg-neutral-900"
            >
              {data.applyBtnText}
            </button>
          </div>
  
          <div className="mt-5 space-y-2 text-xs text-neutral-700">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">{data.labels.subtotal}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
  
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">{data.labels.shipping}</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
  
            <div className="flex items-center justify-between pt-2 font-semibold text-neutral-900">
              <span>{data.labels.total}</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }
  

export default SummaryPanel;