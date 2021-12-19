import React from 'react';
import {Link} from 'react-router-dom';

function Menubutton(){
    return (
        <Link to={'/menu-produccion'}><button type="button" className="btn btn-warning btn-rounded">MENU</button></Link>
    );
}

export default function Bootstrap(){
    return (
        <Menubutton/>
    );
}