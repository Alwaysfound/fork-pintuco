import React from 'react'
import './Menu_produccion.css';
import Menuproduccion from '../../Menuproduccion';
import {Link} from 'react-router-dom';

function MenuUsuarioProduccion() {
    return (
      <div className="Body">
        <div class="header"></div>
        <br></br>
        <br></br>
        <Menuproduccion></Menuproduccion>
        <br></br>
        <Link to={'/'}><button type="button" className="btn btn-warning btn-rounded">cerrar sesion</button></Link>
      <div class="footer"></div>
      </div>
    );
  }
export default MenuUsuarioProduccion;
