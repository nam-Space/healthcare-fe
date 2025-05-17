import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ title, path }) => {
    const navigate = useNavigate();
    return (
        <Col md={6} lg={4}>
            <Card
                className="h-100 shadow-sm"
                onClick={() => navigate(path)}
                style={{ cursor: "pointer" }}
            >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Truy cập {title}</Card.Text>
                    <Button variant="primary" onClick={() => navigate(path)}>
                        Vào
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;
