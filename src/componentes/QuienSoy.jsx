import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './../imagenes/Yesika_gomez.jpg';

function QuienSoy() {
    return (
        <div className="row text-center" id="quien-soy">
            <div className="col">
                <img src={foto} alt="Yesika Gomez" id="foto_yesika"/>
            </div>
            <div className="col" id="info">
                <h2>QUIEN SOY</h2>
                <p className="text-justify mt-3">
                    Soy una persona capacitada para diseñar y
                    desarrollar soluciones informáticas, me
                    considero una persona responsable,
                    cumplida, honesta, también tengo la
                    capacidad de trabajar en equipo, que
                    cumple con las labores y requerimientos que
                    se le exigen. Me considero una persona con
                    una alta facilidad de absorber
                    conocimientos teóricos y prácticos, también
                    soy lógica, deliberada, que antes de actuar
                    pienso las cosas y sus consecuencias.
                </p>
            </div>
        </div>
    )
}

export default QuienSoy