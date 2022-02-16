import React from "react";
import "../style.scss";
import { Button, Container } from 'react-bootstrap';


function HeaderContent() {
    return (
        <>
            <div className="jumbotron">
                <Container>
                    <h3>Frontend Web Developer</h3><br />
                    <h1>Gama Prabowo</h1>
                    <Button variant="warning">Scroll Down</Button>
                </Container>
            </div>
        </>
    )
}

export default HeaderContent;