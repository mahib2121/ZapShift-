import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Coverage from '../pages/Coverage';
import AuthLayout from '../Root/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        Component: Home
      },
      {
        path: '/coverage',
        Component: Coverage,
        loader: () => fetch('warehouses.json').then(res => res.json())
      },
    ]
  },
  {
    path: '/',

    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login

      },
      {
        path: '/register',
        Component: Register
      },

    ]
  }
]);
