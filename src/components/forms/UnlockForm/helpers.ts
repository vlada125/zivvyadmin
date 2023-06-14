// Dependencies
import * as Yup from 'yup';

// SignIn schema
export const UnlockSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});
