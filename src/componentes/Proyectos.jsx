import React from 'react';
import Homenaje from './../imagenes/PaginaHomenaje.png';
import {Card, Button, } from 'react-bootstrap';


export default class Proyectos extends React.Component {
    
    render(){
       
        return (
                <div id="proyecto">
                    <div className="py-3">
                        <h2 className="text-center">PROYECTOS</h2>
                    </div>
                    <section id="projects">
            <article class="project-tile">
                <div>
                    <h5>Homenaje a Mariangel Gomez</h5>
                    <img src={Homenaje} alt="..."/>
                    <div>
                      <a href="https://yesikagomez.github.io/PaginaHomenaje/" >Visitar</a>
                    </div>
                  </div>
            </article>
            <article class="project-tile">
                <div>
                    <h5>Formulario</h5>
                    <img src="Imagenes/Formulario.png" alt="..."/>
                    <div>
                      <a href="https://yesikagomez.github.io/Formulario/">Visitar</a>
                    </div>
                  </div>
            </article>
            <article class="project-tile">
                <div>
                    <h5>Cosmeticos de Belleza</h5>
                    <img src="Imagenes/Producto.png"lt="..."/>
                    <div>
                      <a href="https://yesikagomez.github.io/Producto/">Visitar</a>
                    </div>
                  </div>
            </article>
            <article class="project-tile">
                <div>
                    <h5>Documentación Tecnica</h5>
                    <img src="Imagenes/DocumentacionTecnica.png" alt="..."/>
                    <div>
                      <a href="https://yesikagomez.github.io/DocumentacionTecnica/">Visitar</a>
                    </div>
                  </div>
            </article>
        </section>
                </div>
        )
    }
}