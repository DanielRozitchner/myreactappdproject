import {Navbar, Container, Nav} from "react-bootstrap";
import logo from 'C:/Users/Daniel/Desktop/reactdanielrozitchner/src/assets/imgs/logoC-27.png';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} alt="logo" width="70" height="70" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">Contacto</Nav.Link>
        <Nav.Link href="#">Productos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        
    )
}
export default NavBar;