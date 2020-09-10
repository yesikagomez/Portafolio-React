import React from 'react';
import QuienSoy from './QuienSoy';
import NavBar from './navreact';
import Proyectos from './Proyectos';
import Cv from './CV';
import './../App.css'
import Footer from './Footer';

export default class Cuerpo extends React.Component {
    
    render(){
       
        return (
            <section id="home" className="">
                <div>
                    <div className="py-1 mb-5" >
                        <NavBar/>
                    </div>
                    <div className="py-5 m-2" id="quien">
                        <QuienSoy/>
                    </div>
                    <div>
                        <Proyectos/>
                    </div>
                    <div className="py-5" id="CV">
                        <Cv/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </section> 
        )
    }
}