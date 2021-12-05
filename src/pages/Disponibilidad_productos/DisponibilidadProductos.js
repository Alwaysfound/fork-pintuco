import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Colorresultstable from '../../components/Colorresultstable';
import Buttontoolbar from '../../components/Buttontoolbar';

function DisponibilidadProductos() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Menu Productos Disponibles</div>
            <input className="form-control mr-sm-2" type="text" placeholder="Buscar Color o Materia Prima" aria-label="Search"></input>
            <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Buscar Producto</button>
            <h3 className="text-decoration-underline">COLORES PRIMARIOS</h3>
            <Colorresultstable></Colorresultstable>
            <Buttontoolbar></Buttontoolbar>
            <h3 className="text-decoration-underline">MATERIAS PRIMAS</h3>
            <Colorresultstable></Colorresultstable>
            <Buttontoolbar></Buttontoolbar>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default DisponibilidadProductos;