import React from "react";
import "./Buscarmateria.css";

function Buscarmateria() {
  return (
    <div className="Body">
      <div class="header"></div>
	  <br></br>
      <br></br>
      <div className="Menu">
        <div className="row g-2 align-items-center">
          <div className="col-auto">
            <input type="buscar" className="col-form-label" id="buscar" />
          </div>
          <div className="col-auto">
            <label type="buscar" id="buscar" className="btn btn-primary">
              Buscar Materia
            </label>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="table table-responsive table-bordered">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Unidad de Medida</th>
                <th>Cantidad</th>
                <th>Costo</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pintura Blanca</td>
                <td>Viniltex Blade Blanco</td>
                <td>1</td>
                <th>1</th>
                <th>169900</th>
                <th>
                  <button
                    className="btn btn-primary"
                    onclick="location.href='edit_inventarios.html'"
                    type="button"
                  >
                    Editar
                  </button>
                </th>
              </tr>
              <tr>
                <td>Pintura Roja</td>
                <td>Viniltex Blade Roja</td>
                <td>1</td>
                <th>3</th>
                <th>170000</th>
                <th>
                  <button
                    className="btn btn-primary"
                    onclick="location.href='edit_inventarios.html'"
                    type="button"
                  >
                    Editar
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
	  <br></br>
      <br></br>
      <div className="generate-report">
        <button
          type="button"
          className="btn btn-primary"
          onclick="location.href='generar_reporte.html'"
        >
          Generar Reportes
        </button>
      </div>
      <br></br>
      <br></br>
      <div class="footer"></div>
    </div>
  );
}
export default Buscarmateria;
