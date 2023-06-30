import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useClerk } from "@clerk/nextjs";

import useSignOut from '~/hooks/useSignOut';

interface AuthenticationBtnsProps {
  user: Record<string, any> | null | undefined;
}

const AuthenticationBtns: FC<AuthenticationBtnsProps> = ({ user }) => {

  const { openSignIn } = useClerk();
  const signOut = useSignOut();

  if (user) {
    return (
      <>
        <NavDropdown.Item as={Link} href="/me">
          View profile
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => signOut()}>
          Log out
        </NavDropdown.Item>
      </>
    );
  }

  return (
    <>
      <NavDropdown.Item onClick={() => openSignIn()}>
        Sign In
      </NavDropdown.Item>
    </>
  );
};

const Header: FC = () => {

  const { push } = useRouter();
  const { user } = useSelector((state: any) => state.userReducer);

  const goHome = () => {
    push('/');
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
      <Container>
        <Navbar.Brand href="#home" onClick={() => goHome()}>Project Management</Navbar.Brand>
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