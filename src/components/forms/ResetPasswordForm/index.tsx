// Dependencies
import React from 'react';
import { useFormik } from 'formik';
import { FaRegEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Components
import { TextInput } from '../../common/TextInput';
import { Button } from '../../common/Button';

// Helpers
import { ResetPasswordSchema } from './helpers';

// Types
import { BUTTON_VARIANTS } from '../../common/Button/types';

// Routes
import * as ROUTES from '../../../constants/routes';

// Export component
export const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleBackLogin = () => {
    navigate(ROUTES.SIGNIN_PAGE);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: handleSubmit
  });

  return (
    <form className={'w-full md:mt-[2.625rem] mt-[2.375rem]'} onSubmit={formik.handleSubmit}>
      <TextInput
        label={'Email'}
        id={'email'}
        name={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        after={<FaRegEnvelope color={'#647390'} fontSize={23} />}
        placeholder={'Please enter email...'}
      />
      <Button className={'w-full mt-[0.75rem]'} variant={BUTTON_VARIANTS.CONTAINED} label={'Sign In'} type='submit' />
      <Button onClick={handleBackLogin} className={'w-full md:mt-4 mt-[1.875rem]'} label={'Back to login'} />
    </form>
  );
};
