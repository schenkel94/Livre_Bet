import React from 'react';

export const Label = ({ className = '', ...props }) => (
  <label className={['text-sm text-muted-foreground', className].join(' ')} {...props} />
);
