import { Row, Col } from "react-bootstrap";
import Link from 'next/link';

import Card from '~/components/projects/Card';

export default function Home() {

  const projects = ["Some task", "Another task", "Yet another task", "Some task", "Another task", "Yet another task"];

  return (
    <div>
      <div className="mt-5">
        <h1>Projects</h1>
      </div>
      <Row className="mt-5">
        {
          projects.map((title, index) => (
            <Col as={Link} href={`/board/${title}`} md={3} key={index}>
              <Card />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
