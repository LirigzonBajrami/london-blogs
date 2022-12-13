import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>London Blogs</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-blog">
              <Nav.Link>Create Blog</Nav.Link>
            </LinkContainer>

            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
