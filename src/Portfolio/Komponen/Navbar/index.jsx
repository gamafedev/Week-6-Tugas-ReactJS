import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function MenuHeader() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Gama Prabowo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Biografi</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuHeader;