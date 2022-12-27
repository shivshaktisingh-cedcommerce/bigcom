import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { Loadable } from './Loadable';

// Login
const Login = Loadable(
  lazy(() => import('../containers/common/user/login/Login'))
);

// Dashboard Layout
const DashboardLayout = Loadable(lazy(() => import('layouts/dashboard')));

// Authentication
const AuthGuard = Loadable(lazy(() => import('guards/AuthGuard')));

// GuestGuard
const GuestGuard = Loadable(lazy(() => import('guards/GuestGuard')));

// Onboarding
const ConnectToHubspot = Loadable(
  lazy(
    () => import('../containers/common/user/ConnectHubspot/ConnectToHubspot')
  )
);

// Dashboard
const Dashboard = Loadable(
  lazy(() => import('../containers/common/dashboard/Dashboard'))
);

// Product
const Products = Loadable(
  lazy(() => import('../containers/common/products/Products'))
);

// Orders
const Orders = Loadable(
  lazy(() => import('../containers/common/orders/Orders'))
);

// Customers
const Customers = Loadable(
  lazy(() => import('../containers/common/customers/Customers'))
);

// Import/Export
const ImpExport = Loadable(
  lazy(() => import('../containers/common/importExport/ImportExport'))
);

// Lists
const Lists = Loadable(
  lazy(() => import('../containers/common/ListAndWorkFlows/Lists'))
);

// Workflow
const Workflow = Loadable(
  lazy(() => import('../containers/common/ListAndWorkFlows/Workflows'))
);

// Group&properties
const Groupsandproperties = Loadable(
  lazy(
    () =>
      import('../containers/common/groups-and-properties/GroupsAndProperties')
  )
);

// hubspotdatalogs
const HubspotDataLogs = Loadable(
  lazy(() => import('../containers/common/logs/Logs'))
);

// Configurations
const Configurations = Loadable(
  lazy(() => import('../containers/common/configurations/Configurations'))
);

const Activities = Loadable(
  lazy(() => import('../containers/common/activity/Activity'))
);

// 404 Page
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

export default function Router() {
  return useRoutes([
    {
      path: 'setup',
      element: <GuestGuard />,
      children: [{ path: '', element: <ConnectToHubspot /> }],
    },
    {
      path: 'user/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <AuthGuard />,

      children: [
        {
          path: '',
          element: <DashboardLayout />,
          children: [
            { path: '', element: <Dashboard /> },
            { path: 'lists', element: <Lists /> },
            { path: 'workflows', element: <Workflow /> },
            { path: 'products', element: <Products /> },
            { path: 'customers', element: <Customers /> },
            { path: 'orders', element: <Orders /> },
            { path: 'groups-properties', element: <Groupsandproperties /> },
            { path: 'import-export', element: <ImpExport /> },
            { path: 'logs', element: <HubspotDataLogs /> },
            { path: 'configurations', element: <Configurations /> },
            {
              path: 'activities',
              children: [
                {
                  path: ':tab',
                  index: true,
                  element: <Activities />,
                },
              ],
            },
          ],
        },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);
}
