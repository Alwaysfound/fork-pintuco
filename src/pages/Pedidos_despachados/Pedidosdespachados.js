import React from 'react'
import './pedidosdespachados.css';
import Menubutton from '../../components/Menubutton';
import Dispatchedordersmenu from '../../components/Dispatchedordersmenu';
import Buttontoolbar from '../../components/Buttontoolbar';

function Pedidosdespachados() {
    return (
      <div className="Body">
        <div className="header"></div>
          <br></br>
          <Menubutton></Menubutton>
          <br></br>
          <br></br>
          <div className="sidebar-heading border-bottom bg-light">Menu Pedidos Despachados</div>
          <br></br>
          <br></br>
          <Dispatchedordersmenu></Dispatchedordersmenu>
          <br></br>
          <br></br>
          <Buttontoolbar></Buttontoolbar>
          <br></br>
          <br></br>
        <div className="footer"></div>
      </div>
    );
  }
export default Pedidosdespachados;