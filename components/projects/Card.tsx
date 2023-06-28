import { Card } from "react-bootstrap";

export default function TaskCard() {
    return (
        <Card className="m-1 shadow bg-body rounded border-0 w-100">
            <Card.Body className="d-flex justify-content-between">
                <h5 className="text-dark font-monospace text-decoration-underline">
                    Task
                </h5>
                <span className="badge rounded-pill bg-dark d-flex align-items-center">
                    <i className="bi bi-cursor-fill"></i>
                </span>
            </Card.Body>
        </Card >
    )
}
