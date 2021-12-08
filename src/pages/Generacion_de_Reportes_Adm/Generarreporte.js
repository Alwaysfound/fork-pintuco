import React from 'react';	
import '../../App.css';		
import Bannersuperior from '../../components/Bannersuperior';		
import Bannerinferior from '../../components/Bannerinferior';		
//import App from '../../App';
		
function Generarreporte(){ 		
	return(
		<div classNameName="App">
			<section>
				<Bannersuperior></Bannersuperior>
			</section>
			
            <section>
            <div id="contenedor"className="container">
                    <div className="row justify-content-md-center">
                    <div id="registro1" className="col col-lg-2">
                    Materia mas vendida
                    </div>
                    <div className="col-md-auto">
                    XXXXXXXXX
                    </div>
                    </div>

                    <div className="row justify-content-md-center">
                    <div id="registro2" className="col col-lg-2">
                    Pedidos por depachar
                    </div>
                    <div className="col-md-auto">
                    XXXXXXXXX
                    </div>
                    </div>

                    <div className="row justify-content-md-center">
                    <div id="registro3" className="col col-lg-2">
                    Pedidos despachados
                    </div>
                    <div className="col-md-auto">
                    XXXXXXXXX
                    </div>
                    </div>

                    <div>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onclick= "location.href='index.html'" >Regresar</button>
                    </div>



</div>


            </section>

			<section>	
				<Bannerinferior></Bannerinferior>
			</section>



		</div>


	);	
}	
export default Generarreporte;