import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
      <Container>
        <Navbar.Brand href="#home">Project Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavDropdown title="Sebastian Vargas" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} href="/me">
                View profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => alert("Logging out")}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;