import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../assets/imgs/logoC-27.png';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <Link to="/"><img src={logo} alt="logo" width="70" height="70" /></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className='nav-link active' to="/category/minicakes"><h4>minicakes</h4></Link>
        <Link className='nav-link active' to="/category/cakes"><h4>cakes</h4></Link>

      </Nav>
    </Navbar.Collapse>
    <Link to="/cart"><CartWidget /></Link>
  </Container>
</Navbar>
        </div>
        
    )
}
export default NavBar;