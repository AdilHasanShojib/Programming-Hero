import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDeatails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=> fetch('/jobs.json') // don't load all data, load only what you need
      },
      {
        path: "/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('/jobs.json') // don't load all data, load only what you need
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
