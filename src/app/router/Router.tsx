import { MainLayout } from 'components/mainLayout';
import { AboutMePage } from 'pages/aboutMePage';
import { MainPage } from 'pages/mainPage';
import { UserInfoPage } from 'pages/userInfoPage';
import { FC } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { pathRoutes } from 'shared/routes.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={pathRoutes.main()}
      element={<MainLayout />}
    >
      <Route index element={<MainPage />} />
      <Route path={pathRoutes.me()} element={<AboutMePage />} />
      <Route path={pathRoutes.user()} element={<UserInfoPage />} />
    </Route>,
  ),
);

export const Router: FC = () => <RouterProvider router={router} />;
