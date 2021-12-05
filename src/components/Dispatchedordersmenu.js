import React from 'react';

function Dispatchedordersmenu(){
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col"># Orden</th>
                <th scope="col">Cliente</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad Despachada</th>
                <th scope="col"># Guia Transporte</th>
                <th scope="col">Fecha de Despacho</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Falabella</td>
                <td>Pintura Morada</td>
                <td>200</td>
                <td>123456</td>
                <td>24/11/2021</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>El constructor</td>
                <td>Pintura Naranja</td>
                <td>500</td>
                <td>567123</td>
                <td>30/11/2021</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Jumbo</td>
                <td>Pintura Verde</td>
                <td>800</td>
                <td>908486</td>
                <td>28/11/2021</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Jumbo</td>
                <td>Pintura Rosada</td>
                <td>800</td>
                <td>764890</td>
                <td>27/11/2021</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Jumbo</td>
                <td>Pintura Amarilla</td>
                <td>800</td>
                <td>54905</td>
                <td>30/11/2021</td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bootstrap(){
    return (
        <Dispatchedordersmenu/>
    );
}