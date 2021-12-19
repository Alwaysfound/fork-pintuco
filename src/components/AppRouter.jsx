import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login.js'
import MenuUsuarioProduccion from './pages/Menu_produccion/MenuProduccion.js'
import Pedidosdespachados from './pages/Pedidos_despachados/Pedidosdespachados.js'
import Pedidospordespachar from './pages/Pedidos_por_despachar/Pedidospordespachar.js' 
import Configuraciondeproductos from './pages/Configuracion_de_productos/Configuraciondeproductos.js'
import OrdenesdeCompra from './pages/Ordenes_de_compra/OrdenesdeCompra.js'
import OrdenesdeProduccion from './pages/Ordenes_de_produccion/OrdenesdeProduccion.js'
import DisponibilidadProductos from './pages/Disponibilidad_productos/DisponibilidadProductos.js'
import MenuAdmin from './pages/Menu-Admin/menuAdmin.js'
import Buscarmateria from './pages/Busqueda_de_productos_Adm/Buscarmateria.js'
import Editarproducto from './pages/Edicion_de_productos_Adm/Editarproducto.js'
import Generarreporte from './pages/Generacion_de_Reportes_Adm/Generarreporte.js'
import CreacionUsuarios from './pages/Creacion-Usuarios-Admin/Creacion-Usuarios-Admin.js'

export default function AppRouter() {
    return (
        <Router>
            <Routes> 
                <Route path="/" element={ <Login />}/>
                <Route path="/menu-produccion" element={ <MenuUsuarioProduccion />}/>
                <Route path="/pedidos-despachados" element={ <Pedidosdespachados />}/>
                <Route path="/pedidos-por-despachar" element={ <Pedidospordespachar />}/>
                <Route path="/configuracion-de-productos" element={ <Configuraciondeproductos />}/>
                <Route path="/ordenes-de-compra" element={ <OrdenesdeCompra />}/>
                <Route path="/ordenes-de-produccion" element={ <OrdenesdeProduccion />}/>
                <Route path="/productos-en-stock" element={ <DisponibilidadProductos />}/>
                <Route path="/menu-admin" element={ <MenuAdmin />}/>
                <Route path="/busqueda-de-productos-admin" element={ <Buscarmateria />}/>
                <Route path="/edicion-de-productos-admin" element={ <Editarproducto />}/>
                <Route path="/generacion-de-reportes-admin" element={ <Generarreporte />}/>
                <Route path="/creacion-usuarios-Admin" element={ <CreacionUsuarios  />}/>
            </Routes>
        </Router>
    )
}