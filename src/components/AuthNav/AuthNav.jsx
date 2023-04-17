import { LinkAuth, AuthBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBox>
      <LinkAuth to="/register" end>
        Register
      </LinkAuth>
      <LinkAuth to="/login">Log In</LinkAuth>
    </AuthBox>
  );
};
