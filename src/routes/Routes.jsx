import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Coverage from '../pages/Coverage';
import AuthLayout from '../Root/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from './PriveteRoute';
import Raider from '../pages/RAider/Raider';
import SendParcel from '../pages/sendParcel';
import DashbordLayout from '../Root/DashbordLayout';
import MyParcel from '../pages/Dashboard/myParcel';

export const router = createBrowserRouter([
  // MAIN ROOT
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Raider />
          </PrivateRoute>
        )
      },
      {
        path: "sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
        loader: () => fetch('warehouses.json').then(res => res.json())
      },
      {
        path: "coverage",
        element: <Coverage />,
        loader: () => fetch('warehouses.json').then(res => res.json())
      },
    ]
  },

  // AUTH ROUTES
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },

  // DASHBOARD ROUTES
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashbordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcel", // FIXED: removed leading slash
        element: <MyParcel />
      }
    ]
  }
]);
