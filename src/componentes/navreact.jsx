import React from 'react';
import {Navbar, NavDropdown,Nav} from 'react-bootstrap';
import './../index.css'

function NavBar() {
    return (
<Navbar expand="lg" variant="dark" id="menu" className="position-fixed container" >
  <Navbar.Brand style={{ fontSize: `200%` }} href="#home" className="nombre">Yesika Gomez Montoya</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="nombre">
    <Nav className="mr-auto" style={{ fontSize: `130%` }}>
      <Nav.Link href="#">Quien Soy</Nav.Link>
      <NavDropdown title="Proyectos">
          <div id="proyectos" style={{ fontSize: '130%'}}>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="www.facebook.com">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </div>
      </NavDropdown>
      <Nav.Link href="#link">CV</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)
}

export default NavBar