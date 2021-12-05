import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Orderstobedispatched from '../../components/Orderstobedispatched';
import Buttontoolbar from '../../components/Buttontoolbar';

function Pedidospordespachar() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Menu Pedidos por Despachar</div>
            <Orderstobedispatched></Orderstobedispatched>
            <Buttontoolbar></Buttontoolbar>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default Pedidospordespachar;