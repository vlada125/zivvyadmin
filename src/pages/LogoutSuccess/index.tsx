// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { Button } from '../../components/common/Button';

// Routes
import * as ROUTES from '../../constants/routes';

// Export page
const LogoutSuccessPage = () => {
  const navigate = useNavigate();

  const handleBackLogin = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  return (
    <AuthLayout title={'Log out successful'}>
      <p className={'text-sm text-[#647390] text-center leading-[1.2] mt-10'}>
        You have successfully logged out.
        <br/><br/>
        For security reasons, exit your web browser.
        <br/><br/>
        You will be redirected to the log in page in 3 seconds, if that doesn't work click the link below
      </p>
      <Button onClick={handleBackLogin} className={'w-full md:mt-14 mt-[1.625rem]'} label={'Back to login'} />
    </AuthLayout>
  )
};

export default LogoutSuccessPage;
