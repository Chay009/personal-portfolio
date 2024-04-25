import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop.jsx';

import App from './App.jsx'; // Import the App component
const LazyPortfolio = React.lazy(() => import('./pages/Portfolio/Portfolio.jsx'));
const LazyResume = React.lazy(() => import('./pages/Resume/Resume.jsx'));
const LazyAbout = React.lazy(() => import('./pages/About/About.jsx'));
const LazyContact = React.lazy(() => import('./pages/Contact/Contact.jsx'));
const LazyWelcome = React.lazy(() => import('./pages/Welcome/Welcome.jsx'));

const router = createBrowserRouter([
  {
    path: "/my",
   element:<App/>,
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-teal-300">Loading...</div>}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "resume",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-teal-300">Loading...</div>}>
            <LazyResume />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-teal-300">Loading...</div>}>
            <LazyPortfolio />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div className="flex justify-center items-center h-screen text-teal-300">Loading...</div>}>
            <LazyContact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <LazyWelcome />
      </Suspense>
    ),
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <ScrollToTop/>
    </RouterProvider>
  </React.StrictMode>
);
