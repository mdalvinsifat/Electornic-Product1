import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Heading.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
// import NavLink from 'react-bootstrap/esm/NavLink';
export default function Heading(){

    return(
        <div>
        
     
         <Navbar bg="dark p-3" expand="lg">
        <Navbar.Brand href="#home" className='ms-5 text-light hello'>Electornics-Product</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
                <NavLink to='/' className="nav-link text-light">Home</NavLink>
                <NavLink to='/product'className="nav-link text-light">Product</ NavLink>
          </Nav>
 <div className='ms-auto'>
<Button variant="primary me-3">SIgn in</Button>
<Button variant="light">Sign Out</Button>

   </div>
        </Navbar.Collapse>

    </Navbar>
     

        </div>
    )
}