import { MainLayout } from 'components/mainLayout';
import { AboutMe } from 'pages/aboutMe';
import { MainPage } from 'pages/mainPage';
import { UserInfo } from 'pages/userInfo';
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
      <Route path={pathRoutes.me()} element={<AboutMe />} />
      <Route path={pathRoutes.user()} element={<UserInfo />} />
    </Route>,
  ),
);

export const Router: FC = () => <RouterProvider router={router} />;
