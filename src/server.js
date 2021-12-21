const express = require('express');
const path = require('path');
const server = express();

// ROUTES
server.use(require('./backend/routes/index.routes'))


// STATIC FILES
server.use(express.static(path.join(__dirname, '../public')))


server.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

server.listen(3000, ()=>{
    console.log('Servidor esperando conexion')
})