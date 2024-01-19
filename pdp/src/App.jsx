import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import './index.scss';

import 'remixicon/fonts/remixicon.css';

import SafeComponent from './SafeComponent';

import Header from 'home/Header';

import Footer from 'home/Footer';

import PDPContent from './PDPContent';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <PDPContent />
    <Footer />
  </div>
);

const routes = [
  {
    path: '/products/:id',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate to="/products/1" />,
  },
];

const router = createBrowserRouter(routes);

const Provider = () => <RouterProvider router={router} />;

export default Provider;
