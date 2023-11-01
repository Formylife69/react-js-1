
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import film from '../assets/film.jpeg'
import film2 from '../assets/film2.jpeg'
import bleach3 from '../assets/bleach3.jpeg'
import film4 from '../assets/film4.jpeg'
import film5 from '../assets/film5.jpeg'
import film6 from '../assets/film6.jpeg'

const Tranding = () => {
    return (
        <Container>
            <br />
            <h1 className="text-white">TRENDING ANIME</h1>
            <Row>
                <Col md={4} className="movieWrapper" id="tranding">
                    <Card className="bg-dark movieImage">
                        <Image src={bleach3} alt="Axman Moive" className="movieImage" className="images" F />
                        <div className="bg-dark" src="https://www.bilibili.tv/id/play/2069614">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center" >Bleach</Card.Title>
                                <Card.Text className="text-left" >
                                    <p className="text-center">
                                        <a href="https://www.bilibili.tv/id/play/2069614" >NONTON DISINI</a>
                                    </p>
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={film} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Naruto The Last Movie</Card.Title>
                                <Card.Text className="text-center" >
                                    <p className="text-center">
                                        <a href="https://www.bilibili.tv/id/video/4788930485950976?bstar_from=bstar-web.homepage.recommend.all" >NONTON DISINI</a>
                                    </p>
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={film2} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Tokyo Revengers</Card.Title>
                                <Card.Text className="text-center" >
                                    <p className="text-center">
                                        <a href="https://www.bilibili.tv/play/1001400">NONTON DISINI</a>
                                    </p>
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={film4} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Boruto</Card.Title>
                                <Card.Text className="text-left" >
                                    <p className="text-center">
                                        <a href="">NONTON DISINI</a>
                                    </p>
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={film5} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Jujutsu Kaisen</Card.Title>
                                <Card.Text className="text-left" >
                                    <p className="text-center">
                                        <a href="">NONTON DISINI</a>
                                    </p>
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="bg-dark movieImage">
                        <Image src={film6} alt="Axman Moive" className="movieImage" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-light">
                                <Card.Title className="text-center">Doraemon</Card.Title>
                                <Card.Text className="text-left" >
                                    <p className="text-center">
                                        <a href="">NONTON DISINI</a>
                                    </p>
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

export default Tranding;