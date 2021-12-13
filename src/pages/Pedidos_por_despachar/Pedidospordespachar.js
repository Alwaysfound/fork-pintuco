import React from 'react'
import './Pedidospordespachar.css';
import Menubutton from '../../components/Menubutton';
import Orderstobedispatched from '../../components/Orderstobedispatched';
import Buttontoolbar from '../../components/Buttontoolbar';

function Pedidospordespachar() {
    return (
      <div className="Body">
        <div className="header"></div>
        <br></br>
        <br></br>
        <Menubutton></Menubutton>
        <br></br>
        <br></br>
        <div className="sidebar-heading border-bottom bg-light">Menu Pedidos por Despachar</div>
        <br></br>
        <br></br>
        <Orderstobedispatched></Orderstobedispatched>
        <br></br>
        <br></br>
        <Buttontoolbar></Buttontoolbar>
        <br></br>
        <br></br>  
        <div className="footer"></div>
      </div>
    );
  }
export default Pedidospordespachar;