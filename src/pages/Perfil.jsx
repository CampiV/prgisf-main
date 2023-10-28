import React, { useState } from 'react';

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: 'Nombre Completo',
    email: 'correo@ejemplo.com',
    direccion: 'Pais, Region, comuna, poblacion, calle, numero'
  });

  const updateProfile = (newData) => {
    setUserData({ ...newData });
    setIsEditing(false);
  };

  return (
    <div className="content-wrapper">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Perfil de Usuario</h3>
        </div>
        <div className="card-body">
          {isEditing ? (
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Nombre Completo:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={userData.fullName}
                  onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Direecion:</label>
                <input
                  type="direccion"
                  id="direccion"
                  name="direccion"
                  value={userData.direccion}
                  onChange={(e) => setUserData({ ...userData, direccion: e.target.value })}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => updateProfile(userData)}
                className="btn btn-primary"
              >
                Guardar Cambios
              </button>
            </form>
          ) : (
            <div>
              <p>
                <strong>Nombre Completo:</strong> {userData.fullName}
              </p>
              <p>
                <strong>Correo Electrónico:</strong> {userData.email}
              </p>
              <p>
                <strong>Direccion:</strong> {userData.direccion}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary"
              >
                Editar Perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
