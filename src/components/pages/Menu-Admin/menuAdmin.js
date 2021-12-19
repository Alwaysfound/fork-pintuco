import React from "react";
import "./menuAdmin.css";
import {Link} from 'react-router-dom' 

function MenuAdmin() {
  return (
    <div className="Body">
      <div class="header"></div>
      <br></br>
      <br></br>
      <div className="left">
        <button
          className="btn btn-outline-warning btn-rounded btn-sm my-0"
          type="submit"
        >
          Ingresar a inventarios
        </button>
      </div>
      <br></br>
      <br></br>
      <div className="right">
        <Link to={'/menu-produccion'}><button
          className="btn btn-outline-warning btn-rounded btn-sm my-0"
          type="submit"
        >
          Ingresar a produccion
        </button></Link>
      </div>
      <br></br>
      <br></br>
      <div className="center">
      <Link to={'/creacion-usuarios-Admin'}><button
          className="btn btn-outline-warning btn-rounded btn-sm my-0"
          type="submit"
        >
          Gestionar Usuarios
        </button></Link>
      </div>
      <br></br>
      <br></br>
      <div class="footer"></div>
    </div>
  );
}
export default MenuAdmin;
