import { Navbar, Container, Nav, Link, NavbarBrand } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
const Footer = () => {
    const Navigate = useNavigate()
    return(
        <div>
            <Navbar className="bg-dark ">
                <Container>
                    <Navbar.Brand href="/" className="text-white">
                        <a>Vinhadaku</a>
                    </Navbar.Brand>
                    <Nav>
                        <a className="text-white" href="/About">Check About Me</a>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;