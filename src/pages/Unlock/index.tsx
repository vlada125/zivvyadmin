// Dependencies
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { UnlockForm } from '../../components/forms/UnlockForm';
import { Button } from '../../components/common/Button';

// Routes
import * as ROUTES from '../../constants/routes';

// Export page
const UnlockPage = () => {
  const [locked, setLocked] = useState(true);
  const [enableUnlock, setEnableUnlock] = useState(false);

  const navigate = useNavigate();

  const handleBackLogin = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  const handleStartUnlock = () => {
    setLocked(false);
  };

  useEffect(() => {
    if (!locked) {
      setTimeout(() => {
        setEnableUnlock(true)
      }, 5000);
    }
  }, [locked]);

  return (
    <AuthLayout title={locked ? 'Your account has been locked.' : 'Unlock your login'}>
      {locked ? (
        <div className={'max-w-[22rem] mx-auto'}>
          <p className={'font-primary text-sm text-[#647390] font-medium md:mt-2 mt-10 md:text-left text-center leading-[1.2]'}>
            {'For security reasons, your account has been locked.'}
          </p>
          <div className={'flex md:flex-row flex-col items-center mt-4'}>
            <p className={'font-primary text-sm text-[#647390] font-medium md:text-left text-center leading-[1.4]'}>
              {'Follow this link:'}
            </p>
            <Button className={'md:ml-2 ml-0 md:mt-0 mt-10 md:underline'} onClick={handleStartUnlock} label={'Unlock login'} />
          </div>
        </div>
      ) : (enableUnlock ? (
        <>
          <p className={'font-primary text-sm text-[#647390] max-w-[14rem] mx-auto font-medium md:mt-2 mt-10 md:text-left text-center leading-[1.2]'}>
            {'Enter your email and we will email you a link to unlock your account.'}
          </p>
          <UnlockForm />
        </>
      ) : (
        <>
          <p className={'font-primary text-sm text-[#647390] font-medium mt-[2.625rem] text-center leading-[1.1]'}>
            {'Your login could not be unlocked at this time.'}
            <br/><br/>
            {'Please try again later.'}
            <br/><br/>
            {'You will now be redirected in 5 seconds.'}
          </p>
          <Button onClick={handleBackLogin} className={'w-full md:mt-[4.5rem] mt-8'} label={'Back to login'} />
        </>
      ))}
    </AuthLayout>
  )
};

export default UnlockPage;
