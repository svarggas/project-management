import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useUser, useClerk } from "@clerk/nextjs";

interface AuthenticationBtnsProps {
  user: Record<string, any> | null | undefined;
}

const AuthenticationBtns: FC<AuthenticationBtnsProps> = ({ user }) => {

  const { signOut, redirectToSignIn } = useClerk();
  const { push } = useRouter();

  const signInHandler = () => {
    redirectToSignIn();
    // @TODO: set user to redux store
  };

  const signOutHandler = () => {
    signOut();
    push('/');
    // @TODO: set user to redux store
  };

  if (user) {
    return (
      <>
        <NavDropdown.Item as={Link} href="/me">
          View profile
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => signOutHandler()}>
          Log out
        </NavDropdown.Item>
      </>
    );
  }

  return (
    <NavDropdown.Item onClick={() => signInHandler()}>
      Sign In
    </NavDropdown.Item>
  );
};

const Header: FC = () => {

  const { user } = useUser();

  return (
    <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
      <Container>
        <Navbar.Brand href="#home">Project Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavDropdown title={user?.fullName || "Sign in here"} id="collasible-nav-dropdown">
              <AuthenticationBtns user={user} />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;