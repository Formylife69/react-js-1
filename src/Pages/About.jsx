import { Form } from "react-router-dom"
import { Navbar, Container, Nav, Link, NavbarBrand } from "react-bootstrap"
import foto from '../assets/foto.jpg'
import { useNavigate } from "react-router-dom"
import { Card, Row, Col, Image } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar'

const About = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div>
                <Navbar className="bg-dark">
                    <Container>
                        <Navbar.Brand href="/" className="text-white">Vinhadaku</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="https://instagram.com/4mylife_69" className="text-white">Instagram</Nav.Link>
                            <Nav.Link href="https://youtube.com/4mylife_69" className="text-white">Youtube</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div className="babi">
                    <a>Name : Vincen Sius Christian Elang Putra</a> <br/>
                    <a>born : Jakarta 26-July-2005</a> <br/>
                    <a>Hobi : SongWriter</a> <br/>
                    <a>My First Web In React-Js </a>
                </div>
                <div>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Image src={foto} alt="Axman Moive" className="movieImage2" />
                            </Card>
                            <div className="buts">
                                <button  className="btn btn-primary" onClick={() => Navigate('/')}>Kembali</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About