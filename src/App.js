import React from 'react'
import AppRouter from '../src/components/AppRouter'	
import './App.css';		
/*import Loginlogo from '../src/components/Loginlogo';
import Checkbox from '../src/components/Checkbox';
import Signinbutton from '../src/components/Signinbutton';*/		

export function App() {
  return (
      <AppRouter className="container"/>
  )
}

/*function App() {
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

export default App;*/