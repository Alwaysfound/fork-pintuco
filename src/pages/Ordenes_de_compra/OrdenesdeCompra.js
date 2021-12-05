import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Menubutton from '../../components/Menubutton';
import Purchaselisttable from '../../components/Purchaselisttable';
import Successdeletionalert from '../../components/Successdeletionalert';
import Buttontoolbar from '../../components/Buttontoolbar';

function OrdenesdeCompra() {
    return (
      <div className="App">
        <section>
          <Bannersuperior></Bannersuperior>
        </section>
        <section>
            <Menubutton></Menubutton>
            <div className="sidebar-heading border-bottom bg-light">Ordenes de Compra</div>
            <Purchaselisttable></Purchaselisttable>
            <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">ELIMINAR ORDEN</button>
            <Successdeletionalert></Successdeletionalert>
            <Buttontoolbar></Buttontoolbar>
        </section>
        <section>
          <Bannerinferior></Bannerinferior> 
        </section>
      </div>
    );
  }
export default OrdenesdeCompra;