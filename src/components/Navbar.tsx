import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Pages.css';



const BarraNav = () => {
    return (
        <Navbar style={{ backgroundColor: '#58943E' }} expand="lg" className='navbar'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Usuário" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BarraNav;