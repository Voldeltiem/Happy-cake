import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
        <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/Home" className="text-white ms-3 text-decoration-none">Home</Link>
            <Link to="/Contacto" className="text-white ms-3 text-decoration-none">Contacto</Link>
          </Nav>
          <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar