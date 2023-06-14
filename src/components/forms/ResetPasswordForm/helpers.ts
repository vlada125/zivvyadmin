// Dependencies
import * as Yup from 'yup';

// SignIn schema
export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
