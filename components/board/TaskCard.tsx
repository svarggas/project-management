import { Card } from "react-bootstrap";

export default function TaskCard() {

    return (
        <Card className="m-1 shadow bg-body rounded border-0">
            <Card.Body className="d-flex justify-content-between">
                <span>Task</span>
                <span className="badge rounded-pill bg-danger d-flex align-items-center">
                    SV
                </span>
            </Card.Body>
        </Card>
    )
}
