import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import logoImage from '../assets/images/logobike.png';
const TopHeader = () => {
  return (
    <>
     <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" style={{ height: '130px' }}>
        <Container>
        <Navbar.Brand>
          <img src={logoImage} alt="Bike Rental Logo" style={{ height: '60px', marginRight: '5px' }} />
          <span style={{ color: '#fff', fontFamily: 'Cursive', marginLeft: '5px' }}>BIKE RENTAL</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{marginLeft:'350px'}}>
          <Nav className="me-end">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="" className='register' style={{ color:"#fff",marginTop:'20px' ,marginRight:'20px'}}>REGISTRATION</Nav.Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="Regist">Bike Owner</Dropdown.Item>
                <Dropdown.Item href="CustomerRegister">Customer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="" className='register' style={{ color:"#fff",marginTop:'20px',marginRight:'20px' }}>LOGIN</Nav.Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="Login">Bike Owner</Dropdown.Item>
                <Dropdown.Item href="CLogin">Customer</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <Nav.Link href="AboutUs" className='register' style={{ color:"#fff",marginTop:'20px' ,marginRight:'20px'}}>ABOUT US</Nav.Link>
              </Dropdown.Toggle>
            {/* <Dropdown variant="dark" id="dropdown-basic">
              <Nav.Link href="AboutUs" style={{ color:"#fff" }}>ABOUT US</Nav.Link>
            </Dropdown> */}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
   </>
  )
}

export default TopHeader