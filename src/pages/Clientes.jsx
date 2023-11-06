import React, { useState } from 'react';

export default function Clientes() {
  const [clients, setClients] = useState([
    {
      nombre: 'Claudio',
      RUT: '20.402.593-2',
      Cod_Cliente: 100,
      Telefono: '+56 9 4577 0230',
      Direccion:'Talca, Region del Maule, Chile, 3465008',
    }
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editClients, setEditClients] = useState({
    nombre: '',
    RUT: '',
    Cod_Cliente: '',
    Telefono: '',
    Direccion:'',
  });


  const agregarClientes = () => {
    const nuevoCliente = {
      nombre: 'Nuevo Cliente',
      RUT: '12.345.678-9',
      Cod_Cliente: '###',
      Telefono: '+56 912345678',
      Direccion: 'Region, Ciudad, Poblacion, Calle, Numero',
    };
    setClients([...clients, nuevoCliente]);
  };

  const eliminarCliente = (index) => {
    const nuevosClientes = [...clients];
    nuevosClientes.splice(index, 1);
    setClients(nuevosClientes);
  };

  const editarClientes = (index) => {
    setEditIndex(index);
    setEditClients(clients[index]);
  };

  const guardarClienteEditado = () => {
    const nuevosClientes = [...clients];
    nuevosClientes[editIndex] = editClients;
    setClients(nuevosClientes);
    setEditIndex(-1);
    setEditClients({ nombre: '', RUT: '', Cod_Cliente: 0 });
  };

  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-header border-0">
          <h3 className="card-title">CLIENTES DE VINOS DON ROGELIO</h3>
          <div className="card-tools">
            <button onClick={agregarClientes} className="btn btn-primary">
              Agregar
            </button>
          </div>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RUT</th>
                <th>COD_Cliente</th>
                <th>Telefono</th>
                <th>Direccion</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editClients.nombre}
                        onChange={(e) =>
                          setEditClients({ ...editClients, nombre: e.target.value })
                        }
                      />
                    ) : (client.nombre)}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editClients.RUT}
                        onChange={(e) =>
                          setEditClients({ ...editClients, RUT: e.target.value })
                        }
                      />
                    ) : ( client.RUT)}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        value={editClients.Cod_Cliente}
                        onChange={(e) =>
                          setEditClients({ ...editClients, Cod_Cliente: e.target.value })
                        }
                      />
                    ) : (
                      client.Cod_Cliente
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editClients.Telefono}
                        onChange={(e) =>
                          setEditClients({ ...editClients, Telefono: e.target.value })
                        }
                      />
                    ) : (
                      client.Telefono
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editClients.Direccion}
                        onChange={(e) =>
                          setEditClients({ ...editClients, Direccion: e.target.value })
                        }
                      />
                    ) : (
                      client.Direccion
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <button onClick={guardarClienteEditado} className="btn btn-success">
                        Guardar
                      </button>
                    ) : (
                      <>
                        <button onClick={() => editarClientes(index)} className="btn btn-info">
                          Editar
                        </button>
                        <button onClick={() => eliminarCliente(index)} className="btn btn-danger">
                          Eliminar
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
