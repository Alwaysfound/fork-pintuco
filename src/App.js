import React from 'react';	
import './App.css';		
import Loginlogo from '../src/components/Loginlogo';
import Checkbox from '../src/components/Checkbox';
import Signinbutton from '../src/components/Signinbutton';		
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  /*Redirect
} from "react-router-dom";
import MenuUsuarioProduccion from './pages/Menu_produccion/MenuProduccion';
import Login from './pages/Login/Login';
import DisponibilidadProductos from './pages/Disponibilidad_productos/DisponibilidadProductos'
import Configuraciondeproductos from './pages/Configuracion_de_productos/Configuraciondeproductos'
import OrdenesdeCompra from './pages/Ordenes_de_compra/OrdenesdeCompra'
import OrdenesdeProduccion from './pages/Ordenes_de_produccion/OrdenesdeProduccion'
import Pedidospordespachar from './pages/Pedidos_por_despachar/Pedidospordespachar'
import Pedidosdespachados from './pages/Pedidos_despachados/Pedidosdespachados'
import Recuperarcontraseña from './pages/Recuperar_contraseña/Contraseña'*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div className="Body">
      <div className="header"></div>
      <Loginlogo></Loginlogo>
      <input type="email" name="email" placeholder="Correo Electronico"></input>
      <br></br>
      <input type="password" name="password" placeholder="Contraseña"></input>
      <br></br>
      <Checkbox></Checkbox>
      <br></br>
      <Signinbutton></Signinbutton>
      <br></br>
      <br></br>
      <p>Copyright 2021.</p>  
      <div className="footer"></div>
    </div>
  );
}

export default App;