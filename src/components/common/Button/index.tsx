// Dependencies
import React from 'react';

// Props & types
import { BUTTON_VARIANTS, ButtonProps } from './types';

// Export component
export const Button = (props: ButtonProps) => {
  const {
    className,
    variant,
    label,
    onClick,
    ...rest
  } = props;

  return (
    <button
      className={`font-primary font-medium ${variant === BUTTON_VARIANTS.CONTAINED ? 'bg-[#623CEA] text-white text-xs h-[3.375rem]' : 'text-[#256EFF] md:text-sm text-xs'} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};
