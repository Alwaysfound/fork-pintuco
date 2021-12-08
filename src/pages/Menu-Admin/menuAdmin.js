import React from 'react'
import '../../App.css';
import Bannersuperior from '../../components/Bannersuperior';
import Bannerinferior from '../../components/Bannerinferior';



function MenuAdmin() {
  return (
    <><div className="App">
          <section>
              <Bannersuperior></Bannersuperior>
          </section>
          <div align="left">
              <section>
                  <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Ingresar a inventarios</button>
              </section>
          </div>
          <div align="right">
              <section>
                  <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Ingresar a produccion</button>
              </section>
          </div>
          <div>
              <section>
                  <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Gestionar Usuarios</button>
              </section>
          </div>
      </div><div>
              <section>
                  <Bannerinferior></Bannerinferior>
              </section>
          </div></>    
  );
}
export default MenuAdmin;