import React from 'react';
import CV from './../imagenes/CVYesikaGomez.jpg'
import Documento from './../Documento/Hoja de Vida Yesika Johana Gomez Montoya.pdf'

export default class Curriculum extends React.Component {
    
    render(){
       
        return (
            <section>
                <h2 className="text-center">CURRICULUM VITAE</h2>
                <div className="curriculum">
                    <img id="img-curriculum" src={CV}/>
                </div>
                <div>
                    <a href={Documento} download="CV Yesika Johana Gomez Montoya">Descargar</a>
                </div>
            </section> 
        )
    }
}