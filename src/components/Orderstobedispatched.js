import React from 'react';

function Orderstobedispatched(){
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col"># Orden</th>
                <th scope="col">Cliente</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad(cuñetes)</th>
                <th scope="col">Estado de Producto</th>
                <th scope="col">Estado de Orden</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Falabella</td>
                <td>Pintura Morada</td>
                <td>200</td>
                <td>En Bodega</td>
                <td>Lista para despacho</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>El constructor</td>
                <td>Pintura Naranja</td>
                <td>500</td>
                <td>En fabricación</td>
                <td>Pendiente</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Jumbo</td>
                <td>Pintura Verde</td>
                <td>800</td>
                <td>Por Fabricar</td>
                <td>Pendiente</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Jumbo</td>
                <td>Pintura Verde</td>
                <td>800</td>
                <td>Por Fabricar</td>
                <td>Pendiente</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Jumbo</td>
                <td>Pintura Verde</td>
                <td>800</td>
                <td>Por Fabricar</td>
                <td>Pendiente</td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bootstrap(){
    return (
        <Orderstobedispatched/>
    );
}