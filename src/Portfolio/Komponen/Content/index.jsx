import React from "react";
import "../style.scss"
import { Container, Row, Col } from 'react-bootstrap';

function ContentBiografi() {
    return (
        <>
            <div>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <h2 className="mt-5 text-center">My Biografi</h2>
                            <p className="mt-3 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Nesciunt, hic ratione iure amet incidunt voluptas labore praesentium,
                                cum odio tempora eum ea, voluptates obcaecati illum quasi recusandae
                                reprehenderit ipsa quidem!</p>
                        </Col>
                    </Row>

                    <Row className="skill-section">
                        <Col>
                            <h2 className="text-center">UI/UX Design</h2>
                            <p className="mt-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate ad pariatur cupiditate impedit fuga temporibus?</p>
                        </Col>
                        <Col>
                            <h2 className="text-center">Frontend Developer</h2>
                            <p className="mt-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate ad pariatur cupiditate impedit fuga temporibus?</p>
                        </Col>
                        <Col>
                            <h2 className="text-center">Backend Developer</h2>
                            <p className="mt-3 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptate ad pariatur cupiditate impedit fuga temporibus?</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ContentBiografi;