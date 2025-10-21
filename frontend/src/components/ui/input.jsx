import React from 'react';

export const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input ref={ref} className={[
    'w-full h-11 px-3 rounded-app bg-background border border-muted/60 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors',
    className
  ].join(' ')} {...props} />
));
Input.displayName = 'Input';
