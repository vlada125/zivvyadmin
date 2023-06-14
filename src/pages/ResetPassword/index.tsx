// Dependencies
import React from 'react';

// Components
import { AuthLayout } from '../../components/layouts/AuthLayout';
import { ResetPasswordForm } from '../../components/forms/ResetPasswordForm';

// Export page
const ResetPasswordPage = () => {
  return (
    <AuthLayout title={'Password Reset'} description={'Enter your details to proceed further'}>
      <ResetPasswordForm />
    </AuthLayout>
  )
};

export default ResetPasswordPage;
