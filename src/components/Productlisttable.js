import React from 'react';

function Productlisttable(){
    return (
        <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto(Color)</th>
                        <th scope="col">Cantidad en Stock</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Estado de Orden</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck1" checked></input>
                            <label class="custom-control-label" for="customCheck1"></label></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck2" checked></input>
                            <label class="custom-control-label" for="customCheck1"></label></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                      </tr>
                      <tr>
                        <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck3" checked></input>
                            <label class="custom-control-label" for="customCheck1"></label></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                      </tr>
                      <tr>
                        <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck4" checked></input>
                            <label class="custom-control-label" for="customCheck1"></label></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                      </tr>
                      <tr>
                        <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck5" checked></input>
                            <label class="custom-control-label" for="customCheck1"></label></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                      </tr>
                    </tbody>
                  </table>
    );
}

export default function Bootstrap(){
    return (
        <Productlisttable/>
    );
}