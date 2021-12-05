import React from 'react';

function Successfullycreatedorder(){
    return (
        <div class="alert alert-success" role="alert">
            Orden Creada con exito ! 
          </div>
    );
}

export default function Bootstrap(){
    return (
        <Successfullycreatedorder/>
    );
}