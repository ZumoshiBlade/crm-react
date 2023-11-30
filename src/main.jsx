import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './components/ErrorPage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/layout'
import Index, { loader as clientesLoader } from './pages'
import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)