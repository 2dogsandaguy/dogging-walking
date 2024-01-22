
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* import './index.css' */
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import Home from "../pages/home.jsx"; 
 import AboutMe from '../pages/aboutme.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    /* errorElement: <Error />, */
    children: [
       {
        index: true,
        element: <Home/>,
      }, 
      {
        path: 'AboutMe',
        element: <AboutMe />,
      }, /*
      {
        path: 'Profile',
        element: <Profile />
      },
      {
        path: 'CreateWorkout',
        element: <CreateWorkout />
      },
      {
        path: 'ViewHistory',
        element: <ViewHistory />
      }, */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
);
