import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__sections">
                        <div className="foo">
                            
                            <h3>Yesika Gomez Montoya</h3>
                            <h4>yesika.gomez@gmail.com</h4>
                            <h5>313 629 10 96</h5>
                        </div>
                        <section>
                            <div className="footer__icons text-right">
                                <span>© 2020 Medellín-Colombia
                                    <a href="https://www.linkedin.com/in/yesika-gomez-montoya-6a3228160/" target="blanck"><i className="fab fa-linkedin fa-lg"></i></a>
                                    <a href="https://github.com/yesikagomez" target="blanck"><i className="fab fa-github fa-lg" aria-hidden="true"></i></a>
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
