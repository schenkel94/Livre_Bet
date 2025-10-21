import React from 'react';

const base = 'inline-flex items-center justify-center whitespace-nowrap select-none rounded-app text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elegant',
  outline: 'border border-muted/60 bg-transparent text-foreground hover:bg-muted/40',
  ghost: 'bg-transparent hover:bg-muted/40 text-foreground',
  link: 'bg-transparent text-primary hover:underline p-0'
};

const sizes = {
  sm: 'h-9 px-3',
  md: 'h-10 px-4',
  lg: 'h-11 px-5'
};

export const Button = ({ variant = 'primary', size = 'md', className = '', ...props }) => {
  return <button className={[base, variants[variant], sizes[size], className].join(' ')} {...props} />;
};
