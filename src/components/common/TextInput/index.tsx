// Dependencies
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Props
import { TextInputProps } from './types';

// Export component
export const TextInput = (props: TextInputProps) => {
  const {
    className,
    label,
    value,
    onChange,
    error,
    after,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mb-6 flex flex-col flex-1 ${className}`}>
      <div className={`flex items-center md:pl-[1.25rem] pl-0 md:pr-[0.75rem] pr-0 md:border-[1px] border-b-2 h-[4.5rem] ${error ? 'border-red-400' : 'md:border-[#D8DDE1] border-[#F0F0F0]'}`}>
        <div className={'flex-1 flex flex-col'}>
          <span className={'text-xs text-[#8083A3]'}>{label}</span>
          <input
            className={'w-full text-xs outline-none mt-1 text-[#3A3335]'}
            value={value}
            onChange={onChange}
            {...rest}
            type={!!rest?.type ? (showPassword ? 'text' : rest?.type) : 'text'}
          />
        </div>
        {!!after && after}
        {rest?.type === 'password' && (
          <div className={'cursor-pointer'} onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <FaEyeSlash color={'#647390'} fontSize={23} /> : <FaEye color={'#647390'} fontSize={23} />}
          </div>
        )}
      </div>
      {error && (
        <span className='text-red-400 text-xs'>{error}</span>
      )}
    </div>
  );
};
