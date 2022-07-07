import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Team() {
  return (
    <>
    <h2> This is our Team </h2>
    <div className='container'>
        <CardGroup>
            <Row md={4}>
                <Col>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/person.png')} />
                        <Card.Body>
                            <Card.Title className='upperCase'>Joana Almeida</Card.Title>
                        </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Student</small>
                            </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/francisco.jpg')} />
                        <Card.Body>
                            <Card.Title>Francisco Oliveira</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Student</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/SP.jpg')} />
                        <Card.Body>
                            <Card.Title>Sebastião Pais</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Professor Assistant at UBI</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/JPC.jpg')} />
                        <Card.Body>
                            <Card.Title>João Cordeiro</Card.Title>
                            <Card.Text>
                                {/*This card has supporting text below as a natural lead-in to additional content.{' '}*/}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Professor Assistant at UBI</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className='Card' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../images/GD.jpg')} />
                        <Card.Body>
                            <Card.Title>Gaël Dias</Card.Title>
                            <Card.Text>
                                {/*This card has supporting text below as a natural lead-in to additional content.{' '}*/}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Professor Assistant at UBI</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </CardGroup>
    </div>
    </>
  )
}

export default Team