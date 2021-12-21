import React from 'react';	
import './Login.css';		
import Loginlogo from '../../Loginlogo';
import Checkbox from '../../Checkbox';
import Signinbutton from '../../Signinbutton';	
import {Link} from 'react-router-dom'	


function Login() {
  return (
    <div className="Body">
      <div class="header"></div>
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
      <Link to={'/menu-admin'}><button type="button" className="btn btn-primary btn-rounded">MENU ADMINISTRADOR</button></Link>
      <br></br>
      <Link to={'/busqueda-de-productos-admin'}><button type="button" className="btn btn-info btn-rounded">MENU INVENTARIO</button></Link>
      <br></br>
      <Link to={'/menu-produccion'}><button type="button" className="btn btn-success btn-rounded">MENU PRODUCCION</button></Link> 
      <br></br>
      <p>Copyright 2021.</p>  
      <div class="footer"></div> 
    </div>
  );
}

export default Login;