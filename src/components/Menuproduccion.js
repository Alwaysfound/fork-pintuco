import React from 'react';

function Menuproduccion(){
    return (
        <div class="sidebar-heading border-bottom bg-light">Menu Produccion
            <br></br>
            <br></br>
            <div className="list-group list-group-flush">
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Configuracion_de_productos/index.js">Configuracion de Productos</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Ordenes_de_compra">Ordenes de Compra</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Ordenes_de_produccion/index.js">Ordenes de Produccion</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Pedidos_por_despachar/index.js">Pedidos por Despachar</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Pedidos_despachados/index.js">Pedidos Despachados</a>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Disponibilidad_productos/index.js">Productos en Stock</a>
            </div>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Menuproduccion/>
    );
}