import React from 'react';
import QuienSoy from './QuienSoy';
import NavBar from './navreact';
import Proyectos from './Proyectos';
import './../App.css'

export default class Cuerpo extends React.Component {
    
    render(){
       
        return (
            <section>
                <div>
                    <div className="py-1 mb-5" >
                        <NavBar/>
                    </div>
                    <div className="py-5">
                        <QuienSoy/>
                    </div>
                    <div>
                        <Proyectos/>
                    </div>
                </div>
            </section> 
        )
    }
}