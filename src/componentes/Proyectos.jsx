import React from 'react';



export default class Proyectos extends React.Component {
    
    render(){
       
        return (
                <div>
                    <div className="py-4">
                        <h2 className="text-center">PROYECTOS</h2>
                    </div>
                    <div class="card">
                        <img src="#" class="card-img-top" alt="proyecto"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        )
    }
}