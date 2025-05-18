import ServiceCard from "components/ServiceCard";
import { Button, Container, Row } from "react-bootstrap";

const HomePage = () => (
    <Container className="py-5">
        <h1 className="mb-4 text-center">🏥 Healthcare Management System</h1>
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                marginBottom: 30,
                gap: 20,
            }}
        >
            <h4 className="text-center">Xin chào Nguyễn Viết Nam</h4>
            <Button variant="danger">Đăng xuất</Button>
        </div>
        <Row className="g-4">
            <ServiceCard title="Dịch vụ đăng ký/đăng nhập🔐" path="/auth" />
            <ServiceCard title="Thông tin cá nhân👱‍♂️" path="/profile" />
            <ServiceCard title="Dịch vụ bệnh nhân🧑‍⚕️" path="/patients" />
            <ServiceCard title="Dịch vụ bác sỹ👨‍⚕️" path="/doctors" />
            <ServiceCard title="Dịch vụ dược sỹ💊" path="/pharmacists" />
            <ServiceCard title="Dịch vụ chatbot🤖" path="/chatbot" />
        </Row>
    </Container>
);

export default HomePage;
