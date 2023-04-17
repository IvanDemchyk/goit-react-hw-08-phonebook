import { Formik } from 'formik';
import {
  Form,
  FormLabel,
  Field,
  SubmitBtn,
} from '../ContactForm/ContactForm.styled';

import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

const initialFormValues = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormLabel htmlFor="username">
          Username
          <Field type="text" name="name" required />
        </FormLabel>
        <FormLabel htmlFor="email">
          Email
          <Field type="email" name="email" required />
        </FormLabel>
        <FormLabel htmlFor="password">
          Password
          <Field type="password" name="password" required />
        </FormLabel>
        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Form>
    </Formik>
  );
};
