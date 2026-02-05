import React from "react";

function SocialButtons() {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white py-2 text-sm hover:bg-neutral-50 cursor-pointer"
        >
          <span className="text-lg">G</span>
          Sign up with Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white py-2 text-sm hover:bg-neutral-50"
        >
          <span className="text-lg cursor-pointer">M</span>
          Sign up with Email
        </button>
      </div>
    );
  }

  export default SocialButtons;