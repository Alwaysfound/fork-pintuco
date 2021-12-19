import React from 'react'
import './Disponibilidad.css';
import Menubutton from '../../Menubutton';
import Colorresultstable from '../../Colorresultstable';
import Buttontoolbar from '../../Buttontoolbar';
/*import {Link} from 'react-router-dom'*/

function DisponibilidadProductos() {
    return (
      <div className="Body">
        <div class="header"></div>
        <br></br>
        <br></br>
       <Menubutton></Menubutton>   
        <br></br>
        <br></br>
        <div className="sidebar-heading border-bottom bg-light">Menu Productos Disponibles
        </div>
        <br></br>
        <input className="form-control mr-sm-2" type="text" placeholder="Buscar Color o Materia Prima" aria-label="Search"></input>
        <br></br>
        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Buscar Producto</button>
        <br></br>
        <br></br>
        <h3 className="text-decoration-underline">COLORES PRIMARIOS</h3>
        <br></br>
        <Colorresultstable></Colorresultstable>
        <br></br>
        <Buttontoolbar></Buttontoolbar>
        <br></br>
        <br></br>
        <h3 className="text-decoration-underline">MATERIAS PRIMAS</h3>
        <br></br>
        <Colorresultstable></Colorresultstable>
        <br></br>
        <Buttontoolbar></Buttontoolbar>
        <br></br>
        <div className="footer"></div>
      </div>
    );
  }
export default DisponibilidadProductos;