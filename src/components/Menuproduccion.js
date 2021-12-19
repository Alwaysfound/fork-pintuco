import React from 'react';
import {Link} from 'react-router-dom'

function Menuproduccion(){
    return (
        <div class="sidebar-heading border-bottom bg-light">Menu Produccion
            <br></br>
            <br></br>
            <div className="list-group list-group-flush">
                <Link to={'/configuracion-de-productos'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Configuracion_de_productos/index.js">Configuracion de Productos</a></Link>
                <Link to={'/ordenes-de-compra'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Ordenes_de_compra">Ordenes de Compra</a></Link>
                <Link to={'/ordenes-de-produccion'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Ordenes_de_produccion/index.js">Ordenes de Produccion</a></Link>
                <Link to={'/pedidos-por-despachar'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Pedidos_por_despachar/index.js">Pedidos por Despachar</a></Link>
                <Link to={'/pedidos-despachados'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Pedidos_despachados/index.js">Pedidos Despachados</a></Link>
                <Link to={'/productos-en-stock'}><a className="list-group-item list-group-item-action list-group-item-light p-3" href="/src/pages/Disponibilidad_productos/index.js">Productos en Stock</a> </Link>
            </div>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Menuproduccion/>
    );
}