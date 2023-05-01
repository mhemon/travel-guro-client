import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Booking from './components/Booking/Booking.jsx';
import LoginLayout from './layout/LoginLayout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Search from './components/Search/Search.jsx';
import PrivateRoute from './router/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home'></Navigate>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/search/:search',
        element: <PrivateRoute><Search/></PrivateRoute>
      }
    ]
  },
  {
    path: '/home',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/home/booking',
        element: <Booking />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
