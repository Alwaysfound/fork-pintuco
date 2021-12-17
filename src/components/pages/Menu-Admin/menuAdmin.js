import React from "react";
import "./menuAdmin.css";

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
        <button
          className="btn btn-outline-warning btn-rounded btn-sm my-0"
          type="submit"
        >
          Ingresar a produccion
        </button>
      </div>
      <br></br>
      <br></br>
      <div className="center">
        <button
          className="btn btn-outline-warning btn-rounded btn-sm my-0"
          type="submit"
        >
          Gestionar Usuarios
        </button>
      </div>
      <br></br>
      <br></br>
      <div class="footer"></div>
    </div>
  );
}
export default MenuAdmin;
