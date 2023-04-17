import { Formik } from 'formik';
import {
  Form,
  FormLabel,
  Field,
  SubmitBtn,
} from '../ContactForm/ContactForm.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialFormValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormLabel htmlFor="email">
          Email
          <Field type="email" name="email" required />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Field type="password" name="password" required />
        </FormLabel>
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </Form>
    </Formik>
  );
};
