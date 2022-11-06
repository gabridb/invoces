import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*Name is required'),
  phone: Yup.string()
    .min(7, '*Phone should have at least 6 numbers')
    .max(12, '*Phone cannot be longer than 15 characters')
    .required('*Phone number required'),
  surname: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*Name is required'),
  webAddress: Yup.string().url(
    '*Must enter URL in http://www.example.com format'
  ),
});
