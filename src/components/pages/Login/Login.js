import React from 'react';	
import './Login.css';		
import Loginlogo from '../../Loginlogo';
import Checkbox from '../../Checkbox';
import Signinbutton from '../../Signinbutton';		


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
      <a className="recovery"
          href="./pages/Recuperar_contraseña/Contraseña.js" 
          >
            Olvidé mi Contraseña
      </a>
      <br></br>
      <p>Copyright 2021.</p>  
      <div class="footer"></div> 
    </div>
  );
}

export default Login;