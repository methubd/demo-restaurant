import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Restaurant from './components/Restaurant/Restaurant';
import ProductDetail from './components/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/order',
        element: <div>We are unable to take any order at this moment</div>
      },
      {
        path: '/restaurant',
        element: <Restaurant></Restaurant>, 
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
      },
      {
        path: '/product/:productId',
        element: <ProductDetail></ProductDetail>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productId}`)
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
