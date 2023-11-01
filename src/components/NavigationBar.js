import { Navbar, Container, Nav, Link, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Vinhadaku</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#tranding">TRANDING</Nav.Link>
                        <Nav.Link href="#superhero">KARAKTER</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <marquee class="text-white">
                    <a>TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                    <a> TONTON ANIME TERBAIK, SETARA SAMA SAMEHADAKU |</a>
                </marquee>
            </div>
        </div>
    )
}

export default NavigationBar;