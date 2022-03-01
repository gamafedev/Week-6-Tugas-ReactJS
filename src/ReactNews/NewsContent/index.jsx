import React from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

export default class NewsContent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataNews: []
        }
    }

    componentDidMount() {
        Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=65336a6330fc48f2adcda0ede1a697e9')
            .then(res => {
                this.setState({ dataNews: res.data.articles })
            })
    }

    render() {
        return (
            <>
                {/* Card Start */}
                <Container>
                    {this.state.dataNews.map((dataNews) => {
                        <Row>
                            <Col>
                                <Card className="mt-5" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={dataNews.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{dataNews.title}</Card.Title>
                                        <p>{dataNews.publishedAt}</p>
                                        <Card.Text>{dataNews.Description}</Card.Text>
                                        <Button variant="primary">Detail</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    })}
                </Container>
            </>
        )
    }
}