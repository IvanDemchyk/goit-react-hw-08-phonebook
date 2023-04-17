import { LinkNav, NavBox } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavBox>
      <LinkNav to="/" end>
        Home
      </LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </NavBox>
  );
};
