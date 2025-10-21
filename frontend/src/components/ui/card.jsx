import React from 'react';
import { Button } from './button';

export const Card = ({ title, description, ctaLabel, onCta, footer, children }) => {
  return (
    <div className="bg-card rounded-app border border-muted/40 p-5 shadow-soft flex flex-col min-h-[220px]">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="mt-auto pt-4 flex items-center justify-between">
        {footer ? footer : <span />}
        {ctaLabel && (
          <Button variant="outline" onClick={onCta}>{ctaLabel}</Button>
        )}
      </div>
      {children}
    </div>
  );
};
