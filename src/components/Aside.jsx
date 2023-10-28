import React from "react";
import logovdr from './../imagenes/logo2.jpg';
import { Link } from "react-router-dom";




export default function Aside() {
    return (
        <aside className="Menu_TopMenus to body main-sidebar sidebar-dark-primary elevation-4 custom-sidebar">
            <Link href="#" className="brand-link">
                <img src={logovdr} style={{ width: "50px", height: "50px", borderRadius: "100%" }} />
                <span className="brand-text font-weight-light">  Vinos Don Rogelio</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <a className="d-block">
                            Select a cliente
                        </a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu">
                        <li className="nav-item">
                            <Link to="/c_pactivos" className="nav-link">
                                <i className="nav-icon fas fa-clipboard-list" />
                                <p>   Pedido</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link">
                                <i className="nav-icon fas fa-wine-bottle" />
                                <p>   Productos</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clientes" className="nav-link">
                                <i className="nav-icon fas fa-users-cog" />
                                <p>   Clientes</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/perfil" className="nav-link">
                                <i className="nav-icon fas fa-address-card fa-thin" />
                                <p>   Mi Perfil</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <i class="nav-icon fas fa-sign-out-alt" />
                                <p>   Cerrar Sesión</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
