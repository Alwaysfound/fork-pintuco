import React from 'react'
import './Configuraciondeproductos.css';
import Menubutton from '../../Menubutton';
import Productconfigmenu from '../../Productconfigmenu';
import Coloradedsuccessfully from '../../Coloradedsuccessfully';


function Configuraciondeproductos() {
    return (
      <div className="Body">
        <div className="header"></div>
        <br></br>
        <br></br>
        <Menubutton></Menubutton>
        <br></br>
        <br></br>
        <div className="sidebar-heading border-bottom bg-light">Configuracion de Productos</div>
        <br></br>
        <Productconfigmenu></Productconfigmenu>
        <br></br>
        <button type="button" class="btn btn-warning btn-rounded">Mezclar Colores</button>
        <br></br> 
          El color de resultado de la mezcla de los colores escogidos es: <output name="" for=""></output>
        <br></br>
        <div className="add-color">
          <label for="colorInput" class="form-label">Ingresar Color Nuevo</label>
          <input type="text" class="form-control" id="colorInput"></input>
        </div>
        <br></br>
        <br></br>
        <button type="submit" class="btn btn-warning btn-rounded">Guardar Color</button>
        <br></br>
        <div className="succes-message">
          <Coloradedsuccessfully></Coloradedsuccessfully>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
export default Configuraciondeproductos;