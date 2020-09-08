import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './../imagenes/Yesika_gomez.jpg';

function Foto() {
    return (
        <div>
            <img src={foto} alt="Yesika Gomez" className="rounded float-left img-fluid" id="foto_yesika"/>
        </div>
    )
}

export default Foto