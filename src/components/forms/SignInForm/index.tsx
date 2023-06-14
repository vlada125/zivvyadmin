// Dependencies
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FaRegEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Components
import { TextInput } from '../../common/TextInput';
import { Checkbox } from '../../common/Checkbox';
import { Button } from '../../common/Button';

// Helpers
import { SignInSchema } from './helpers';

// Types
import { BUTTON_VARIANTS } from '../../common/Button/types';

// Routes
import * as ROUTES from '../../../constants/routes';

// Export component
export const SignInForm = () => {
  const [agreement, setAgreement] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const handleNavigateToResetPassword = () => {
    navigate(ROUTES.RESET_PASSWORD);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: handleSubmit
  });

  return (
    <form className={'w-full md:mt-[2.625rem] mt-[2.125rem]'} onSubmit={formik.handleSubmit}>
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
      <TextInput
        label={'Password'}
        id={'password'}
        name={'password'}
        type={'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        placeholder={'Please enter password...'}
      />
      <Checkbox className={'-mt-2 md:flex hidden'} checked={agreement} onClick={() => setAgreement(prev => !prev)} label={'I agree with terms & conditions'} />
      <div className={'md:hidden flex items-center justify-between'}>
        <Checkbox checked={agreement} onClick={() => setAgreement(prev => !prev)} label={'Remember me'} />
        <Button onClick={handleNavigateToResetPassword} label={'Reset password'} />
      </div>
      <Button className={'w-full mt-6'} variant={BUTTON_VARIANTS.CONTAINED} label={'Sign In'} type='submit' />
      <Button className={'mt-14 md:block hidden'} onClick={handleNavigateToResetPassword} label={'Forgot your password?'} />
    </form>
  );
};
