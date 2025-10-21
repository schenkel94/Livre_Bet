import React from 'react';

export const Dialog = ({ open, onOpenChange, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={() => onOpenChange?.(false)} />
      <div className="relative w-full max-w-md rounded-app bg-card border border-muted/40 p-6 shadow-elegant">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {children}
      </div>
    </div>
  );
};
