import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <nav>
      <Navbar className="mb-4 border-bottom" bg="transparent" expand="lg">
        <Navbar.Brand>Web3 Wave Portal App</Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};
export default NavBar;
