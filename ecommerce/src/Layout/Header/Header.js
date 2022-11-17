import React from 'react'
import { Navbar, Container, Nav,Form,Button,NavDropdown,Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs'


export default function Header() {
  return (
    <div>
      <Navbar bg="blue" varient="blue">
        <Container>
          <Navbar.Brand as={Link} to="/">Rockerz</Navbar.Brand>
          <Nav className="ml-auto mb-2 mb-lg-0">
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <Nav.Link as={Link} to="/Collection">Collection</Nav.Link>

          <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="Login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Signup">Signup </NavDropdown.Item>
              
            </NavDropdown>
            
            <Nav.Link as={Link} to="/Items">Items</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">ContactUs</Nav.Link>
            
            {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Search
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">AIRDOPS</Dropdown.Item>
        <Dropdown.Item href="#/action-2">STONE</Dropdown.Item>
        <Dropdown.Item href="#/action-3">AAVANTE</Dropdown.Item>
        <Dropdown.Item href="#/action-4">TRebel</Dropdown.Item>
        <Dropdown.Item href="#/action-5">DATA CABLE</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Headset</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown> */}
    {/* <Nav.Link as={Link} to="/Cart"><BsCartFill/></Nav.Link> */}
            
            
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* <>
      <Button variant="outline-primary">Primary</Button>{' '}
      <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
    </> */}
    

          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}
