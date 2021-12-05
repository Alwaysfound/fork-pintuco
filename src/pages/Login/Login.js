import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';
import Loginlogo from '../../components/Loginlogo';

function App() {
  return (
    <div className="App">
      <section>
        <Bannersuperior></Bannersuperior>
      </section>
      <header className="App-header">
        <Loginlogo></Loginlogo>
        <input type="email" name="email" placeholder="Ingrese su Correo Electronico"></input>
        <input type="password" name="password" placeholder="Ingrese su Contraseña"></input>
        <input type="checkbox" name="remember" id="iRemenber" value="1"></input>
        <label>Recordar Contraseña</label>
        <h3>Recordar Contraseña</h3>
        <button className="btn btn-warning btn-rounded" type="button" >INICIAR SESION</button>
        <a className="recovery"
          href="https://reactjs.org" 
          >
            Olvidé mi Contraseña
        </a>
        <p>
          Copyright 2021.
        </p>
      </header>
      <section>
        <Bannerinferior></Bannerinferior> 
      </section>
    </div>
  );
}

export default App;