// Dependencies
import React from 'react';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { SignInForm } from '../../components/forms/SignInForm';

// Export page
const SignInPage = () => {
  return (
    <AuthLayout
      title={'Sign In to your account'}
      mobileTitle={'Sign in'}
      description={'Enter your details to proceed further'}
    >
      <SignInForm />
    </AuthLayout>
  )
};

export default SignInPage;
