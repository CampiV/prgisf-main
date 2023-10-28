import React, { useState } from 'react';

export default function Productos() {
  const [products, setProducts] = useState([
    {
      nombre: 'Pipeño',
      precio: '$6000',
      unidades: 100,
    },
    {
      nombre: 'Vino Tinto',
      precio: '$29 USD',
      unidades: 100,
    },
    {
      nombre: 'Vino Blanco',
      precio: '$1,230 USD',
      unidades: 100,
    },
    {
      nombre: 'Borrachos',
      precio: '$199 USD',
      unidades: 100,
    },
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editProduct, setEditProduct] = useState({
    nombre: '',
    precio: '',
    unidades: 0,
  });

  const [cart, setCart] = useState([]);
  const [unitCount, setUnitCount] = useState(0);

  const agregarProducto = () => {
    const nuevoProducto = {
      nombre: 'Nuevo Producto',
      precio: '$0',
      unidades: 0,
    };
    setProducts([...products, nuevoProducto]);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...products];
    nuevosProductos.splice(index, 1);
    setProducts(nuevosProductos);
  };

  const editarProducto = (index) => {
    setEditIndex(index);
    setEditProduct(products[index]);
  };

  const guardarProductoEditado = () => {
    const nuevosProductos = [...products];
    nuevosProductos[editIndex] = editProduct;
    setProducts(nuevosProductos);
    setEditIndex(-1);
    setEditProduct({ nombre: '', precio: '', unidades: 0 });
  };

  const agregarAlCarrito = (product) => {
    const units = prompt(`Ingrese la cantidad de unidades para ${product.nombre}:`);
    if (units !== null) {
      const unitCountInt = parseInt(units, 10);
      if (!isNaN(unitCountInt) && unitCountInt > 0) {
        setCart([...cart, { ...product, unidades: unitCountInt }]);
        setUnitCount(unitCount + unitCountInt);
      } else {
        alert("Por favor, ingrese una cantidad válida.");
      }
    }
  };

  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-header border-0">
          <h3 className="card-title">PRODUCTOS DE VINOS DON ROGELIO</h3>
          <div className="card-tools">
            <button onClick={agregarProducto} className="btn btn-primary">
              Agregar
            </button>
          </div>
        </div>
        <div className="card-body table-responsive p-0">
          <table className="table table-striped table-valign-middle">
            <thead>
              <tr>
                <th>Productos</th>
                <th>Precios CHL</th>
                <th>Unidades Disponibles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editProduct.nombre}
                        onChange={(e) =>
                          setEditProduct({ ...editProduct, nombre: e.target.value })
                        }
                      />
                    ) : (
                      product.nombre
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editProduct.precio}
                        onChange={(e) =>
                          setEditProduct({ ...editProduct, precio: e.target.value })
                        }
                      />
                    ) : (
                      product.precio
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="number"
                        value={editProduct.unidades}
                        onChange={(e) =>
                          setEditProduct({ ...editProduct, unidades: e.target.value })
                        }
                      />
                    ) : (
                      product.unidades
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <button onClick={guardarProductoEditado} className="btn btn-success">
                        Guardar
                      </button>
                    ) : (
                      <>
                        <button onClick={() => editarProducto(index)} className="btn btn-info">
                          Editar
                        </button>
                        <button onClick={() => eliminarProducto(index)} className="btn btn-danger">
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
