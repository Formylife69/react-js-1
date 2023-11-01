import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import sp1 from '../assets/SuperHero/sp1.jpeg'
import sp2 from '../assets/SuperHero/sp2.jpeg'
import sp3 from '../assets/SuperHero/sp3.jpeg'
import sp4 from '../assets/SuperHero/sp4.jpeg'
import sp5 from '../assets/SuperHero/sp5.jpeg'
import sp6 from '../assets/SuperHero/sp6.jpeg'

const SuperHero = () => {
    return (
        <Container>
            <br />
            <h1 className="text-light">KARAKTER</h1>
            <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="bg-dark movieImage">
                        <Image src={sp1} alt="Axman Moive" className="movieImage"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Ichigo</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Blech
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sp2} alt="Axman Moive" className="movieImage" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Quincy</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Bleach
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sp3} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Sasuke</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Naruto
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sp4} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Naruto</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Naruto
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sp5} alt="Axman Moive" className="movieImage"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Mikey</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Jujutsu Kaisen
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={sp6} alt="Axman Moive" className="movieImage" className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Gojo</Card.Title>
                                <Card.Text className="text-center" >
                                    From Anime Jujutsu Kaisen
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SuperHero;