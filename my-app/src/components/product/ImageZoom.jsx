import React, { useMemo, useRef, useState } from "react";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function ImageZoom({
  src,
  alt = "",
  zoom = 3,
  lensSize = 170,
  rounded = "rounded-lg",
  overlayZ = "z-[999]", // make it above description
}) {
  const mainRef = useRef(null);

  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0.5, y: 0.5, px: 0, py: 0 });
  const [mainSize, setMainSize] = useState({ w: 520, h: 520 }); // will be updated on hover

  const isTouch = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  }, []);

  const updatePos = (e) => {
    const el = mainRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    const px = clamp(e.clientX - rect.left, 0, w);
    const py = clamp(e.clientY - rect.top, 0, h);

    setMainSize({ w, h });

    setPos({
      px,
      py,
      x: px / w,
      y: py / h,
    });
  };

  const lensStyle = {
    width: lensSize,
    height: lensSize,
    left: pos.px,
    top: pos.py,
    transform: "translate(-50%, -50%)",
  };

  const zoomBgStyle = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${zoom * 100}% ${zoom * 100}%`,
    backgroundPosition: `${pos.x * 100}% ${pos.y * 100}%`,
  };

  return (
    <div className="relative">
      {/* MAIN IMAGE */}
      <div
        ref={mainRef}
        className={`relative overflow-hidden ${rounded} cursor-crosshair`}
        onMouseEnter={(e) => {
          if (isTouch) return;
          setHovering(true);
          updatePos(e);
        }}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={updatePos}
      >
        <img
          src={src}
          alt={alt}
          className="w-full object-cover"
          draggable={false}
        />

        {/* Lens */}
        {!isTouch && hovering && (
          <div
            className="pointer-events-none absolute border border-white/70 bg-white/15 shadow-sm"
            style={lensStyle}
          />
        )}
      </div>

      {/* ✅ RIGHT SIDE ZOOM OVERLAY (same size as main image) */}
      {!isTouch && hovering && (
        <div
          className={`hidden lg:block absolute top-0 ${overlayZ}`}
          style={{
            left: `calc(100% + 40px)`, // gap between main image and zoom
            width: `${mainSize.w + 160}px`,
            height: `${mainSize.h + 180}px`,
          }}
        >
          <div className={`h-full w-full overflow-hidden bg-white ${rounded} shadow-xl`}>
            <div className="h-full w-full" style={zoomBgStyle} />
          </div>
        </div>
      )}
    </div>
  );
}
