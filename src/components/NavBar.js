import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../assets/imgs/logoC-27.png';
import "./NavBar.css"


const NavBar = () => {
    return (
        <div>
            <Navbar className='nav' bg="light" expand="lg">
              <Container className='navContainer d-flex flex-row justify-content-center'>
                <Link className='logoContainer' to="/">
                  <img src={logo} alt="logo" className='logo' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='navLinks' id="basic-navbar-nav">
                  <Nav className="me-auto d-flex flex-row">
                  <Link className='nav-link active' to="/category/minicakes">
                    <h4>Minicakes</h4>
                  </Link>
                  <Link className='nav-link active' to="/category/cakes">
                    <h4>Cakes</h4>
                  </Link>
                  </Nav>
                </Navbar.Collapse>
                <Link to="/cart" className='cartButton'>
                  <CartWidget />
                </Link>
              </Container>
          </Navbar>
        </div>
        
    )
}
export default NavBar;