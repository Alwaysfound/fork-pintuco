import React from 'react';

function Successdeletionalert(){
    return (
        <div class="alert alert-success" role="alert">
            Orden(es) Eliminada(s) con exito !
          </div>
    );
}

export default function Bootstrap(){
    return (
        <Successdeletionalert/>
    );
}