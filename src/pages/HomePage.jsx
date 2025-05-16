import { Container, Row } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";

const HomePage = () => (
    <Container className="py-5">
        <h1 className="mb-4 text-center">🏥 Healthcare Management System</h1>
        <Row className="g-4">
            <ServiceCard title="Auth Service" path="/auth" />
            <ServiceCard title="Patient Service" path="/patients" />
            <ServiceCard title="Doctor Service" path="/doctors" />
            <ServiceCard title="Pharmacist Service" path="/pharmacists" />
        </Row>
    </Container>
);

export default HomePage;
