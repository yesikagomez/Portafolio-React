import React from 'react';
import CV from './../imagenes/CV_Yesika_Gomez.jpg'
import Documento from './../Documento/CV_Yesika_Gomez.pdf'

export default class Curriculum extends React.Component {
    
    render(){
       
        return (
            <section id="footer">
                <h2 className="text-center">CURRICULUM VITAE</h2>
                <div className="curriculum">
                    <img id="img-curriculum" src={CV}/>
                </div>
                <div className="text-center">
                    <a href={Documento} download="CV Yesika Johana Gomez Montoya" className="m-4 hoja">Descargar CV</a>
                </div>
            </section> 
        )
    }
}