import {lazy} from 'react';
import {createBrowserRouter, redirect} from 'react-router-dom'

// Layouts
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const EmptyLayout = lazy(() => import('../layouts/EmptyLayout'));
// Pages
const SchedulerPage = lazy(() => import('../pages/scheduler/SchedulerPage'));
const WikiPage = lazy(() => import('../pages/wiki/WikiPage'));



export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/scheduler',
        element: <SchedulerPage/>,
      },
      {
        path: '/wiki',
        element: <WikiPage/>,
      },
    ]
  },
  {
    path: '*',
    element: <EmptyLayout />,
  },
]);