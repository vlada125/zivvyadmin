// Dependencies
import React from 'react';
import { useFormik } from 'formik';
import { FaRegEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Components
import { TextInput } from '../../common/TextInput';
import { Button } from '../../common/Button';

// Helpers
import { UnlockSchema } from './helpers';

// Types
import { BUTTON_VARIANTS } from '../../common/Button/types';

// Routes
import * as ROUTES from '../../../constants/routes';

// Export component
export const UnlockForm = () => {
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
    validationSchema: UnlockSchema,
    onSubmit: handleSubmit
  });

  return (
    <form className={'w-full md:mt-[2.625rem] mt-16'} onSubmit={formik.handleSubmit}>
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
      <Button className={'w-full md:mt-[0.75rem] mt-[1.125rem]'} variant={BUTTON_VARIANTS.CONTAINED} label={'Unlock my account'} type='submit' />
      <Button onClick={handleBackLogin} className={'w-full md:mt-4 mt-8'} label={'Back to login'} />
    </form>
  );
};
