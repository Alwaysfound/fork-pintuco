import React from 'react';	
import '../../App.css';		
import Bannersuperior from '../../components/Bannersuperior';		
import Bannerinferior from '../../components/Bannerinferior';		
//import App from '../../App';
		
function Editarproducto(){ 		
	return(
		<div classNameName="App">
			<section>
				<Bannersuperior></Bannersuperior>
			</section>

            <section>
            <form>
                    <div className="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="nombre1" className="form-control" id="nombre1" />
                    </div>
                    <div className="mb-3">
                    <label for="Descripcion" className="form-label">Descripcion</label>
                    <input type="Descripcion" className="form-control" id="nombre1" />
                    </div>
                    <div className="mb-3">
                    <label for="Unidad de medida" className="form-label">Unidad de medida</label>
                    <input type="umedida" className="form-control" id="nombre1" />
                    </div>
                    <div className="mb-3">
                    <label for="Cantidad" className="form-label">Cantidad</label>
                    <input type="Cantidad1" className="form-control" id="nombre1"/ >
                    </div>
                    <div className="mb-3">
                    <label for="Costo" className="form-label">Costo</label>
                    <input type="Costo" className="form-control" id="nombre1" />
                    </div>

                    <button type="button" className="btn btn-primary btn-lg btn-block">Guardar</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onclick= "location.href='index.html'" >Regresar</button>
                    </form>



            </section>





            	
			<section>	
				<Bannerinferior></Bannerinferior>
			</section>



		</div>


	);	
}	
export default Editarproducto;