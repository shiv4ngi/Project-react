import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Header.css";
import Button from "./Button";

export default function Header(props) {
  return (
    <>
      <Navbar>
        <Container className="navbar">
          <Navbar.Brand className="navbar-text" href="#home">
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navbar-text" href="#Collections">
              Collections
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#Gifts">
              Gifts
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#magazine">
              Our magazine
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search">
              <i class="fas fa-search"></i>
            </Nav.Link>
            <Nav.Link href="#logIn">Log in</Nav.Link>
            <Button />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
