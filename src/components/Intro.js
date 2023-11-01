import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const Intro = () => {

    return (
        <div className="intro"  >
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="tittle">NONTON GRATIS</div>
                        <div className="tittle">GAK PAKE KARCIS</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro