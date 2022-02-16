import React from "react";
import "../style.scss"
import { Container, Form, Button } from "react-bootstrap";

function ContactMe() {
    return (
        <>
            <Container>
                <h2 className="text-center">Contact Me</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default ContactMe;