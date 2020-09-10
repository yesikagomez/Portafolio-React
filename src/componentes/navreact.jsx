import React from 'react';
import {Navbar, NavDropdown,Nav} from 'react-bootstrap';
import './../index.css'

function NavBar() {
    return (
<Navbar expand="lg" variant="dark" id="menu" className="position-fixed container container-small" >
  <Navbar.Brand style={{ fontSize: `200%` }} href="./Cuerpo#home" className="nombre">Yesika Gomez Montoya</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="nombre">
    <Nav className="mr-auto" style={{ fontSize: `130%` }}>
      <Nav.Link href="./Cuerpo#quien">Quien Soy</Nav.Link>
      <NavDropdown title="Proyectos">
          <div id="proyectos" style={{ fontSize: '130%'}}>
            <NavDropdown.Item href="./Proyectos#PaginaHomenaje">Pagina Homenaje</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Formulario">Formulario</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#Productos">Productos</NavDropdown.Item>
            <NavDropdown.Item href="./Proyectos#DocumentacionTecnica">Documentación Tecnica</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </div>
      </NavDropdown>
      <Nav.Link href="./Cuerpo#CV">CV</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default NavBar