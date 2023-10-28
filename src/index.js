import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ajustes from './pages/Ajustes';
import Perfil from './pages/Perfil';
import Productos from './pages/Productos';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import PedidosC from './pages/PedidosC';
import C_PActivos from './pages/C_PActivos';
import Ppasados from './pages/Ppasados';
import CerrarSesion from './pages/CerrarSesion';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <Header/>
      <div >
        <Aside />
        <div >
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
  );
}; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

  children: [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/ajustes",
      element: <Ajustes/>,
    },
    {
      path: "/perfil",
      element: <Perfil/>,
    },
    {
      path: "/productos",
      element: <Productos/>,
    },
    {
      path: "/clientes",
      element: <Clientes/>,
    },
    {
      path: "/pedidos",
      element: <Pedidos/>,
    },
    {
      path: "/pedidosc",
      element: <PedidosC/>,
    },
    {
      path: "/ppasados",
      element: <Ppasados/>,
    },
    {
      path: "/c_pactivos",
      element: <C_PActivos/>,
    },
    {
      path: "/cerrarsesion",
      element: <CerrarSesion/>,
    },
  ]
},
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
