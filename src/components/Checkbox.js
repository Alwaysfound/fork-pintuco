import React from 'react';

function Checkbox(){
    return (
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
        <label class="form-check-label" for="flexSwitchCheckDefault">Recordar Contraseña</label>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Checkbox/>
    );
}