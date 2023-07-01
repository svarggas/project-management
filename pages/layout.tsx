import { useEffect, type ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useUser } from "@clerk/nextjs";
import { useSelector, useDispatch } from 'react-redux';

import { type AppDispatch } from '~/redux/store';
import { signIn, type UserInitialState } from '~/redux/features/userSlice';
import Header from "~/components/shared/Header";

const NotAuth = () => (
  <Row className="mt-5">
    <Col>
      <h5 className="d-flex justify-content-center">
        You are not logged in.
      </h5>
    </Col>
  </Row>
)

const Layout = (
  { children }: { children: ReactNode }
) => {

  const { user } = useSelector((state: { userReducer: UserInitialState }) => state.userReducer);
  const { user: userClerk } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user || (userClerk && userClerk?.fullName !== user?.fullName)) {
      dispatch(signIn({ user: userClerk }));
    }
  }, [userClerk, user, dispatch]);

  return (
    <main>
      <Header />
      <Container>
        <Row>
          <Col>
            {!user ? <NotAuth /> : children}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Layout;