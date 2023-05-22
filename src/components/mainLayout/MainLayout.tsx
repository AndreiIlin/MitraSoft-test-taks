import { Header } from 'components/header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
