import React from 'react';
import { Link } from "react-router-dom";

export default function Ppasados() {
    return (
        <div className="content-wrapper">

            <div className="row">
                <div className="col-lg-3 col-6 ">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>Actualizar</h3>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <Link to= "/c_pactivos" className="small-box-footer">
                            <i className="fas fa-arrow-circle-down"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>Pasados</h3>
                        </div>
                        <div className="icon">
                            <i className="fas fa-receipt"></i>
                        </div>
                        <Link to= "/ppasados" className="small-box-footer">
                        <i className="fas fa-arrow-circle-down"></i>
                        </Link>
                    </div>
                </div>
            </div>

        <div class="card card-outline card-info">
  <div class="card-header">
    <h3 class="card-title">HISTORIAL DE PEDIDOS PASADOS</h3>
    <div class="card-tools">
    </div>
    </div>
    <div class="card">
  <div class="card-header">
    <h3 class="card-title">Pedido 10/10/2023</h3>
    <div class="card-tools">
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
    </div>
  </div>
  <div class="card-body">
    Detalle pedido
  </div>

</div>
    <div class="card">
  <div class="card-header">
    <h3 class="card-title">Pedido 10/09/2023</h3>
    <div class="card-tools">
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
    </div>
  </div>
  <div class="card-body">
    Detalle pedido
  </div>

  </div>
    <div class="card">
  <div class="card-header">
    <h3 class="card-title">Pedido 10/08/2023</h3>
    <div class="card-tools">
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
    </div>
  </div>
  <div class="card-body">
    Detalle pedido
  </div>

  </div>
    <div class="card">
  <div class="card-header">
    <h3 class="card-title">Pedido 10/07/2023</h3>
    <div class="card-tools">
      <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i></button>
    </div>
  </div>
  <div class="card-body">
    Detalle pedido
  </div>

</div>
  <div class="card-footer card card-outline">
    Numero de pedidos realizados = 
  </div>
</div>
    </div>
)
}