// Dependencies
import React from 'react';

// Types
import { AuthLayoutProps } from './types';

// Export component
export const AuthLayout = (props: AuthLayoutProps) => {
  const { title, mobileTitle, description, children } = props;

  return (
    <div className={'flex h-screen'}>
      <div className={'flex-1 relative text-white md:block hidden'}>
        <h1 className={'absolute top-1/2 md:left-8 left-4 mr-4 text-5xl font-primary font-semibold leading-[1.16]'}>
          {'Welcome to RainMaker powered by Zivvy!'}
        </h1>
        <img className={'w-full h-full'} src={'/images/auth-layout-bg.png'} alt={'auth layout bg'} />
      </div>
      <div className={'flex-1 max-h-screen overflow-y-auto'}>
        <div className={'md:p-8 p-0'}>
          <div className={'flex flex-col items-center mx-auto md:pt-[5.5rem] pt-0'}>
            <div className={'flex flex-col items-center md:w-max w-full md:h-max h-[11.25rem] md:bg-transparent bg-[#3E7EFF] md:pt-0 pt-14'}>
              <img src={'/images/logo.png'} alt={'logo'} />
            </div>
            {!!title && <p className={'font-primary text-[2rem] text-[#233455] font-semibold md:block hidden md:mt-12 mt-1.5 mb-0'}>{title}</p>}
            {(!!mobileTitle || !!title) && (
              <div className={'py-6 md:hidden block border-b-[1px] border-[#D8D8D8] w-full'}>
                <p className={'font-primary text-[#171721] text-center font-bold md:mt-12'}>{mobileTitle || title}</p>
              </div>
            )}
            {!!description && <p className={'font-primary text-sm text-[#647390] font-medium mt-2 md:block hidden'}>{description}</p>}
            <div className={'w-full md:px-0 px-[1.75rem] max-w-[26.25rem]'}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
