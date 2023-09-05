import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './views/login/login';
import Home from './views/home/home';
import Products from './views/products/products';
import Pay from './views/payment/pay';
import { PRODUCT_MOCK } from './mock/productMock';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home data={PRODUCT_MOCK} />
  },
  {
    path: '/products/:productId',
    element: <Products data={PRODUCT_MOCK} />
  },
  {
    path: '/pay/:payId',
    element: <Pay data={PRODUCT_MOCK}/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)