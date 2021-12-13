import React from 'react';	
import '../../App.css';		
import Bannersuperior from '../../components/Bannersuperior';		
import Bannerinferior from '../../components/Bannerinferior';		
//import App from '../../App';
		
function Buscarmateria(){ 		
	return(
		<div className="Body">
			<div className="Banner-superior">
				<Bannersuperior></Bannersuperior>
			</div>
			<div className="Menu">
			   <div className="row g-2 align-items-center">
					<div className="col-auto">
					<input type="buscar" className="col-form-label" id="buscar" />
					</div>
					<div className="col-auto">
					<label type="buscar" id="buscar" className="btn btn-primary">Buscar Materia</label>
					</div>
				</div>
				<div className="table table-responsive table-bordered">
					<table>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Descripcion</th>
								<th>Unidad de Medida</th>
								<th>Cantidad</th>
								<th>Costo</th>
								<th> </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Pintura Blanca</td>
								<td>Viniltex Blade Blanco</td>
								<td>1</td>
								<th>1</th>
								<th>169900</th>
								<th><button className="btn btn-primary" onclick= "location.href='edit_inventarios.html'" type="button">Editar</button></th>
							</tr>
							<tr>
								<td>Pintura Roja</td>
								<td>Viniltex Blade Roja</td>
								<td>1</td>
								<th>3</th>
								<th>170000</th>
								<th><button className="btn btn-primary" onclick= "location.href='edit_inventarios.html'" type="button">Editar</button></th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
				<div className="generate-report">
					<button type="button" className="btn btn-primary" onclick= "location.href='generar_reporte.html'">Generar Reportes</button>
				</div>
			<div className="Banner-inferior">	
				<Bannerinferior></Bannerinferior>
			</div>
		</div>
	);	
}	
export default Buscarmateria;