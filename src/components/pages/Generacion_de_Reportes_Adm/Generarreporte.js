import React from "react";
import "./Generarreporte.css";
import {Link} from "react-router-dom";

function Generarreporte() {
  return (
    <div classNameName="Body">
      <div className="header"></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div id="contenedor" className="container">
          <div className="row justify-content-md-center">
            <div id="registro1" className="col col-lg-2">
              Materia mas vendida
            </div>
            <div className="col-md-auto">XXXXXXXXX</div>
          </div>

          <div className="row justify-content-md-center">
            <div id="registro2" className="col col-lg-2">
              Pedidos por despachar
            </div>
            <div className="col-md-auto">XXXXXXXXX</div>
          </div>

          <div className="row justify-content-md-center">
            <div id="registro3" className="col col-lg-2">
              Pedidos despachados
            </div>
            <div className="col-md-auto">XXXXXXXXX</div>
          </div>

          <div>
            <Link to={'/busqueda-de-productos-admin'}><button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onclick="location.href='index.html'"
            >
              Regresar
            </button></Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="footer"></div>
    </div>
  );
}
export default Generarreporte;
