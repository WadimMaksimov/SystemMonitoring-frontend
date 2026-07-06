import { createBrowserRouter } from 'react-router-dom';

import { AboutPage } from '../../page/aboutPage';
import { ContactsPage } from '../../page/contactsPage';
import { HomePage } from '../../page/homePage';
import { MainLayout } from '../../page/mainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
]);
