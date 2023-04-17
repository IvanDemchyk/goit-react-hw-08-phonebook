import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #2a363b;
  &.active {
    color: #f7961f;
  }
`;
