import React from 'react';

function Colorresultstable(){
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Color</th>
                    <th scope="col">En Bodega</th>
                    <th scope="col">Meta Mensual</th>
                    <th scope="col">Pendiente por Fabricar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Amarillo</td>
                <td>300</td>
                <td>1200</td>
                <td>900</td>
                </tr>
                <tr>
                <td>Rojo</td>
                <td>500</td>
                <td>500</td>
                <td>0</td>
                </tr>
                <tr>
                <td>Verde</td>
                <td>800</td>
                <td>700</td>
                <td>100</td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Bootstrap(){
    return (
        <Colorresultstable/>
    );
}