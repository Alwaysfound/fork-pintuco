import React from "react";
import "./Creacion-Usuarios-Admin.css";
import {Link} from 'react-router-dom'


function CreacionUsuarios() {
  return (
    <div classNameName="Body">
      <div className="header"></div>
        <br></br>
        <br></br>
      <div>
        <form>
          <div className="mb-3">
            <label for="nombre" className="form-label">
              Nombre
            </label>
            <input type="nombre1" className="form-control" id="nombre1" />
          </div>
          <div className="mb-3">
            <label for="Descripcion" className="form-label">
             Apellidos
            </label>
            <input type="Descripcion" className="form-control" id="nombre1" />
          </div>
          <div className="mb-3">
            <label for="Unidad de medida" className="form-label">
              Cargo
            </label>
            <input type="umedida" className="form-control" id="nombre1" />
          </div>
          <div className="mb-3">
            <label for="Cantidad" className="form-label">
              Tipo de Usuario
            </label>
            <input type="Cantidad1" className="form-control" id="nombre1" />
          </div>
          <div className="mb-3">
            <label for="Costo" className="form-label">
              Correo
            </label>
            <input type="Costo" className="form-control" id="nombre1" />
          </div>

          <button type="button" className="btn btn-primary btn-lg btn-block">
            Guardar
          </button>
          <Link to={'/menu-admin'}><button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onclick="location.href='index.html'"
          >
            Regresar
          </button></Link>
        </form>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default CreacionUsuarios;
