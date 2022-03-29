import { Navbar, Container, Nav } from "react-bootstrap"
const Header = () => {
    return (
<Navbar fixed="top" bg="primary" variant="light">
    <Container>
    <Navbar.Brand href="#home">Ross</Navbar.Brand>
    <Nav className="me-auto">
   
    </Nav>
    </Container>
  </Navbar>
    )
}

export default Header