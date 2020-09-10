import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './../imagenes/Yesika_gomez.jpg';

function QuienSoy() {
    return (
        <section className="container" id="quien">
        <div className="row text-center" id="quien-soy">
            <div>
                <img src={foto} id="foto_yesika"/>
            </div>
            <div className="col" id="info">
                <h2>Ingeniera de Sistemas y Desarrolladora de Software Front-End.</h2>
                <p>Como desarrolladora de Software Front-End, creo sitios web que se ajustan a lo que necesitas para que tu negocio tenga mas visibilidad.</p>
                <div className="py-4">
                    <h2>QUIEN SOY</h2>
                    <p className="text-justify mt-3">
                        Soy una persona capacitada para diseñar y
                        desarrollar soluciones informáticas,tengo conocimientos en
                        diferentes lenguajes como JacvaScript, PHP, C#. 
                        Considero que manejo estilos, no solo nativos si no tambien 
                        manejando framework como Boostrap, tambn he manejado framework para 
                        lenguajes de programación entre los cuales esta React y Laravel.
                        Tambien tengo conocimientos en base de datos SQL. 
                        Siempre me gusta estar aprendiendo cosas nuevas y mas si tienen que ver con
                        el desarrollo porque es algo que me apasiona.
                    </p>
                </div>
            </div>
        </div>
        </section>
        
    )
}

export default QuienSoy