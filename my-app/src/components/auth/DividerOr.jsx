import React from 'react'

function DividerOr() {
    return (
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="text-xs font-semibold tracking-widest text-neutral-400">OR</span>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>
    );
  }

export default DividerOr;