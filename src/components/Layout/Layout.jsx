import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { MainWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <MainWrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainWrapper>
      <GlobalStyle />
    </>
  );
};
