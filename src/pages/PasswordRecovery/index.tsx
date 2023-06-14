// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Button } from '../../components/common/Button';

// Routes
import * as ROUTES from '../../constants/routes';

// Export page
const PasswordRecoveryPage = () => {
  const navigate = useNavigate();

  const handleBackLogin = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  return (
    <AuthLayout title={'Password Recovery'}>
      <p className={'font-primary text-sm text-[#647390] font-medium md:mt-2 mt-10 md:text-left text-center leading-[1.1]'}>
        {'If the email provided is valid you will receive an email shortly with a reset link. Please enter it below.'}
      </p>
      <Button onClick={handleBackLogin} className={'w-full mt-14'} label={'Back to login'} />
    </AuthLayout>
  )
};

export default PasswordRecoveryPage;
