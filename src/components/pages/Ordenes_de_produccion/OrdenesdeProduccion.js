import React from 'react'
import './OrdenesdeProduccion.css';
import Menubutton from '../../Menubutton';
import Productlisttable from '../../Productlisttable';
import Modaleditproduct from '../../Modaleditproduct';
import Buttontoolbar from '../../Buttontoolbar';
import Successfullycreatedorder from '../../Succesfullycreatedorder';


function OrdenesdeProduccion() {
    return (
      <div className="Body">
        <div class="header"></div>
        <br></br>
        <br></br>
        <Menubutton></Menubutton>
        <br></br>
        <div className="sidebar-heading border-bottom bg-light">Ordenes de Produccion</div>
        <br></br>
        <br></br>
        <input className="form-control mr-sm-2" type="text" placeholder="Ingrese Producto a Buscar" aria-label="Search"></input>
        <br></br>
        <br></br>
        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Buscar Productos</button>
        <br></br>
        <br></br>
        <Productlisttable></Productlisttable>
        <br></br>
        <br></br>
        <Buttontoolbar></Buttontoolbar>
        <br></br>
        <br></br>
        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">EDITAR PRODUCTO</button>
        <br></br>
        <br></br>
        <Modaleditproduct></Modaleditproduct>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-warning btn-rounded">CREAR ORDEN</button>
        <br></br>
        <br></br>
        <Successfullycreatedorder></Successfullycreatedorder>
        <br></br>
        <br></br>
        <div class="footer"></div>
      </div>
    );
  }
export default OrdenesdeProduccion;