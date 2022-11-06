import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../App.css'

function NavBar(){
    return(
      <NavBar className="nav" expand="lg">
     <Container>
        <Navbar.Brand>
            My Bad Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id ="basic-navbar-nav">
          <Nav className = "nav-menu">
            <LinkContainer to = "/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to = "createanaccount"><Nav.Link>Create Account</Nav.Link></LinkContainer>
            <LinkContainer to = "deposit"><Nav.Link>Deposit</Nav.Link></LinkContainer>
            <LinkContainer to = "withdrew"><Nav.Link>Withdraw</Nav.Link></LinkContainer>
            <LinkContainer to = "alldata"><Nav.Link>All Data</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </NavBar>
    );
  }
  export default NavBar;