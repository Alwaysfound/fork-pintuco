import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Productconfigmenu from '../../components/Productconfigmenu';
import Coloradedsuccessfully from '../../components/Coloradedsuccessfully';


function Configuraciondeproductos() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Configuracion de Productos</div>
            <Productconfigmenu></Productconfigmenu>
            <button type="button" class="btn btn-warning btn-rounded">Mezclar Colores</button>
            El color de resultado de la mezcla de los colores escogidos es: <output name="" for=""></output>
            <div class="col-md-6">
                <label for="colorInput" class="form-label">Ingresar Color Nuevo</label>
                <input type="text" class="form-control" id="colorInput"></input>
            </div>
            <button type="submit" class="btn btn-warning btn-rounded">Guardar Color</button>
            <Coloradedsuccessfully></Coloradedsuccessfully>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default Configuraciondeproductos;