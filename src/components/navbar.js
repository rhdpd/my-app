import React from 'react';
import {Navigation, Menu, Nav} from 'react-bootstrap';
import {LMenu} from 'react-router-bootstrap';
import '../App.css'

function NavBar(){
    return(
      <NavBar className="nav" expand="lg">
     <Menu>
        <Navbar.Brand>
            My Bad Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id ="navbar-nav">
          <Nav className = "nav-menu">
            <LMenu to="/"><Nav.Link>Home</Nav.Link></LMenu>
            <LMenu to="createanaccount"><Nav.Link>Create Account</Nav.Link></LMenu>
            <LMenu to="deposit"><Nav.Link>Deposit</Nav.Link></LMenu>
            <LMenu to="withdrew"><Nav.Link>Withdraw</Nav.Link></LMenu>
            <LMenu to="alldata"><Nav.Link>All Data</Nav.Link></LMenu>
          </Nav>
        </Navbar.Collapse>
      </Menu>
      </NavBar>
    );
  }
  export default Navigation;