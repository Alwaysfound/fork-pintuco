import React from 'react'
import './OrdenesdeCompra.css';
import Menubutton from '../../Menubutton';
import Purchaselisttable from '../../Purchaselisttable';
import Successdeletionalert from '../../Successdeletionalert';
import Buttontoolbar from '../../Buttontoolbar';

function OrdenesdeCompra() {
    return (
      <div className="Body">
        <div className="header"></div>
        <br></br>
        <Menubutton></Menubutton>
        <br></br>
        <div className="sidebar-heading border-bottom bg-light">Ordenes de Compra</div>
        <br></br>
        <Purchaselisttable></Purchaselisttable>
        <br></br>
        <Buttontoolbar></Buttontoolbar>
        <br></br>
        <br></br>
        <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">ELIMINAR ORDEN</button>
        <br></br>
        <br></br>
        <Successdeletionalert></Successdeletionalert>
        <div className="footer"></div>
      </div>
    );
  }
export default OrdenesdeCompra;