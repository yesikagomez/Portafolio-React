import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="footer container-fluid">
            <footer >
                    <div>
                        <div className="datos">
                        <hr></hr>
                            <h3>Yesika Gomez Montoya</h3>
                            <h3>|</h3>
                            <h3>yesika.gomez@gmail.com</h3>
                            <h3>|</h3>
                            <h3>313 629 10 96</h3>
                        </div>
                       
                        <section>
                            <div className="text-center">
                                <span className="m-4" >© 2020 Medellín-Colombia
                                    <a href="https://www.linkedin.com/in/yesika-gomez-montoya-6a3228160/" target="blanck"><i className="fab fa-linkedin fa-lg m-2"></i></a>
                                    <a href="https://github.com/yesikagomez" target="blanck"><i className="fab fa-github fa-lg" aria-hidden="true"></i></a>
                                </span>
                            </div>
                        </section>
                    </div>
            </footer>
        </div>
    )
}

export default Footer
