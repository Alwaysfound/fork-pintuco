import React from 'react';

function Productconfigmenu(){
    return (
        <div class="input-group mb-3">
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Color 1</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Seleccione Color 1</option>
                    <option value="1">Azul</option>
                    <option value="2">Amarillo</option>
                    <option value="3">Rojo</option>
                    <option value="4">Negro</option>
                    <option value="5">Blanco</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect02">
                    <option selected>Seleccione Color 2</option>
                    <option value="1">Azul</option>
                    <option value="2">Amarillo</option>
                    <option value="3">Rojo</option>
                    <option value="4">Negro</option>
                    <option value="5">Blanco</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">Color 2</label>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect03">Color 3</label>
                <select class="form-select" id="inputGroupSelect03">
                    <option selected>Seleccione Color 3</option>
                    <option value="1">Azul</option>
                    <option value="2">Amarillo</option>
                    <option value="3">Rojo</option>
                    <option value="4">Negro</option>
                    <option value="5">Blanco</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <select class="form-select" id="inputGroupSelect04">
                    <option selected>Seleccione Color 4</option>
                    <option value="1">Azul</option>
                    <option value="2">Amarillo</option>
                    <option value="3">Rojo</option>
                    <option value="4">Negro</option>
                    <option value="5">Blanco</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect04">Color 4</label>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect05">Color 5</label>
                <select class="form-select" id="inputGroupSelect05">
                    <option selected>Seleccione Color 5</option>
                    <option value="1">Azul</option>
                    <option value="2">Amarillo</option>
                    <option value="3">Rojo</option>
                    <option value="4">Negro</option>
                    <option value="5">Blanco</option>
                </select>
            </div>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Productconfigmenu/>
    );
}