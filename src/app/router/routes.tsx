import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '../../page/mainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // children: [
    //   {
    //     index: true,
    //     element: ,
    //   },
    // ],
  },
]);
