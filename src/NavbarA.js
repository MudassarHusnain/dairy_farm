import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router';
export default function NavbarA() {
   let navigate=useNavigate();
    const [logout,setLogout]=useState(false)
    function Logout()
    {
       secureLocalStorage.removeItem('login')
       setLogout(true)
       navigate('/login')
    }
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
    <Container>
      <Navbar.Brand href="/frontPage">Dairy Farm</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/frontPage">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Category" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bull Cow</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Bull Buffalo
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Bull Goat</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/frontPage">Contact Us</Nav.Link>
        </Nav>
        
        <Nav>
          <Nav.Link onClick={()=>Logout()}>Logout</Nav.Link>
          <Nav.Link onClick={()=>navigate('/addAnimal')}>Add new Animal</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}
