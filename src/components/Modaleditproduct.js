import React from 'react';

function Modaleditproduct(){
    return (
        <div className="container mt-2">
            Producto: <input type="text" name="name" id="product"></input>
            Cantidad en Stock: <input type="text" name="marks" id="stock"></input>
            Cliente: <input type="text" name="marks" id="client"></input>
            <br></br>
            <br></br>
            Estado de Orden: <input type="text" name="marks" id="order_stat"></input>
            <br></br>
            <br></br>
            <button type="button" className="btn btn-warning btn-rounded" data-toggle="modal" data-target="#exampleModal" id="submit">Guardar</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Confirmation
                            </h5>
                            <button type="button" 
                                className="close" 
                                data-dismiss="modal" 
                                aria-label="Close">
                                <span aria-hidden="true">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-warning btn-rounded" data-toggle="modal" data-target="#exampleModal" id="submit">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Bootstrap(){
    return (
        <Modaleditproduct/>
    );
}