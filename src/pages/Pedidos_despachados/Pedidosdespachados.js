import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Dispatchedordersmenu from '../../components/Dispatchedordersmenu';
import Buttontoolbar from '../../components/Buttontoolbar';

function Pedidosdespachados() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Menu Pedidos Despachados</div>
            <Dispatchedordersmenu></Dispatchedordersmenu>
            <Buttontoolbar></Buttontoolbar>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default Pedidosdespachados;