// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Button } from '../../components/common/Button';

// Routes
import * as ROUTES from '../../constants/routes';

// Export page
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackLogin = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  return (
    <AuthLayout>
      <div className={'border-[1px] border-[#F24F40] bg-[#FEEDEC] md:mt-[1.75rem] mt-12 flex-1 min-h-[10rem] py-[2.375rem] md:px-[2.375rem] px-6 md:mx-0 mx-[0.75rem]'}>
        <p className={'m-0 text-[#233455] font-medium font-primary text-sm'}>{'There is an error. blah blah blah'}</p>
      </div>
      <Button onClick={handleBackLogin} className={'w-full md:mt-[8.25rem] mt-[3.625rem]'} label={'Back to login'} />
    </AuthLayout>
  )
};

export default ErrorPage;
