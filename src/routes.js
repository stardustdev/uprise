/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import Dashboard from './views/Dashboard';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboards" />,
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('src/views/Login')),
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('src/views/Register')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('src/views/Error/Error401')),
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('src/views/Error/Error404')),
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('src/views/Error/Error500')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboards',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/advocates',
        exact: true,
        component: lazy(() => import('src/views/Advocates')),
      },
      {
        path: '/campaigns',
        exact: true,
        component: lazy(() => import('src/views/Campaigns')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
];
