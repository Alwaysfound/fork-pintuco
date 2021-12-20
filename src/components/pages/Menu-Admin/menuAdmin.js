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
      <Link to={'/busqueda-de-productos-admin'}><button type="button" className="btn btn-warning btn-rounded">Ingresar a Inventarios</button></Link>
      </div>
      <br></br>
      <br></br>
      <div className="right">
        <Link to={'/menu-produccion'}><button type="button" className="btn btn-warning btn-rounded">Ingresar a Produccion</button></Link>
      </div>
      <br></br>
      <br></br>
      <div className="center">
      <Link to={'/creacion-usuarios-Admin'}><button type="button" className="btn btn-warning btn-rounded">Gestionar Usuarios</button></Link>
      </div>
      <br></br>
      <br></br>
      <Link to={'/'}><button type="button" className="btn btn-warning btn-rounded">cerrar sesion</button></Link>
      <div class="footer"></div>
    </div>
  );
}
export default MenuAdmin;
