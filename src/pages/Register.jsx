import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
