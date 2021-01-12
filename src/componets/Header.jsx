import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navbar, Nav, NavDropdown, } from "react-bootstrap";
import CartWidget from "./CartWidget";


function Header() {
  return  (
     
          <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
            <Navbar.Brand href="#home">
            <img
            src="../logo_skin.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Cátalogo</Nav.Link>
                <Nav.Link href="#pricing">Nosotros</Nav.Link>
                <Nav.Link href="#pricing">Ofertas</Nav.Link>
                <NavDropdown title="SkinCare" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cara</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Cuerpo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Manos y Pies</NavDropdown.Item>
                 
                </NavDropdown>

              </Nav>
              {/* Carrito de compra  */}
              <CartWidget />

                
            </Navbar.Collapse>
            </Navbar>);
}

export default Header;