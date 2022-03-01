import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class NavbarHeader extends React.Component {
    render() {
        return (
            <>
                {/* Navbar-Start */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">ReactNews App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Tranding</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        )
    }
}