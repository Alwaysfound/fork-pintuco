import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menuproduccion from '../../components/Menuproduccion';

function MenuUsuarioProduccion() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menuproduccion></Menuproduccion>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default MenuUsuarioProduccion;