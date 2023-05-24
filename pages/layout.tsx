import type { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "@/components/shared/Header";

const Layout = (
  { children }: { children: ReactNode }
) => {
  return (
    <main>
      <Header />
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Layout;