import React from 'react';
import Homenaje from './../imagenes/PaginaHomenaje.jpg';
import Formulario from './../imagenes/Formulario.png';
import Documentacion from './../imagenes/DocumentacionTecnica.png';
import Producto from './../imagenes/Producto.jpg';
import {Col,Row} from 'react-bootstrap'


export default class Proyectos extends React.Component {
    
    render(){
       
      return (
        <div id="proyecto">
          <div>
            <h2 className="text-center">PROYECTOS</h2>
           </div>
            <section id="projects" className='text-center'>
              <Row>
                <Col>
                  <article className="project-tile" id="PaginaHomenaje">
                      <div>
                          <h5>Homenaje a Mariangel Gomez</h5>
                          <img src={Homenaje} alt="..."/>
                          <div>
                            <a href="https://yesikagomez.github.io/PaginaHomenaje/"  target="blanck" >Visitar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="Formulario">
                      <div>
                          <h5>Formulario</h5>
                          <img src={Formulario} alt="..."/>
                          <div>
                            <a href="https://yesikagomez.github.io/Formulario/"  target="blanck">Visitar</a>
                          </div>
                        </div>
                  </article>
                </Col>
              </Row>
              <Row>
                <Col>
                  <article className="project-tile" id="Productos">
                      <div>
                          <h5>Cosmeticos de Belleza</h5>
                          <img src={Producto} alt="..."/>
                          <div>
                            <a href="https://yesikagomez.github.io/Producto/"  target="blanck">Visitar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="DocumentacionTecnica">
                      <div>
                          <h5>Documentación Tecnica</h5>
                          <img src={Documentacion} alt="..."/>
                          <div>
                            <a href="https://yesikagomez.github.io/DocumentacionTecnica/"  target="blanck">Visitar</a>
                          </div>
                        </div>
                  </article>
                </Col>
              </Row>
            </section>
        </div>
        )
    }
}