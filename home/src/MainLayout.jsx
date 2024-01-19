import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import './index.scss';

import 'remixicon/fonts/remixicon.css';

import Header from 'home/Header';

import Footer from 'home/Footer';

import PDPContent from 'pdp/PDPContent';

import HomeContent from 'home/HomeContent';

import CartContent from 'cart/CartContent';

const MainLayout = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomeContent />,
      },
      {
        path: 'product/:id',
        element: <PDPContent />,
      },
      {
        path: 'cart',
        element: <CartContent />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Provider = () => <RouterProvider router={router} />;

export default Provider;
