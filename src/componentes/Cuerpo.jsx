import React from 'react';
import QuienSoy from './QuienSoy';
import NavBar from './NavBar';

export default class Cuerpo extends React.Component {
    
    render(){
       
        return (
            <section>
                <article>
                    <NavBar/>
                    <QuienSoy/>
                </article>
            </section> 
        )
    }
}