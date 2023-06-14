// Dependencies
import React from 'react';

// Props
import { CheckboxProps } from './types';

// Export component
export const Checkbox = (props: CheckboxProps) => {
  const { className, label, onClick, checked } = props;

  return (
    <div onClick={onClick} className={`flex items-center cursor-pointer ${className}`}>
      <div className={`w-[1.25rem] h-[1.25rem] rounded-full ${checked ? 'border-[0.4rem] border-[#3E7EFF]' : 'bg-[#F5F6F7]'}`} />
      {!!label && <p className={'md:text-sm text-xs md:font-normal font-bold md:text-[#8083A3] text-[#171721] ml-[0.625rem]'}>{label}</p>}
    </div>
  );
};
