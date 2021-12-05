import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Productlisttable from '../../components/Productlisttable';
import Modaleditproduct from '../../components/Modaleditproduct';
import Buttontoolbar from '../../components/Buttontoolbar';
import Successfullycreatedorder from '../../components/Successfullycreatedorder';


function OrdenesdeCompra() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Ordenes de Produccion</div>
            <input className="form-control mr-sm-2" type="text" placeholder="Ingrese Producto a Buscar" aria-label="Search"></input>
            <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Buscar Productos</button>
            <Productlisttable></Productlisttable>
            <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">EDITAR PRODUCTO</button>
            <Modaleditproduct></Modaleditproduct>
            <button type="button" class="btn btn-warning btn-rounded">CREAR ORDEN</button>
            <Successfullycreatedorder></Successfullycreatedorder>
            <Buttontoolbar></Buttontoolbar>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default OrdenesdeCompra;