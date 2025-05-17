import { useState } from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Tab,
    Table,
    Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [key, setKey] = useState("profile");

    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">👱‍♂️Thông tin cá nhân</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="profile" title="Hồ sơ cá nhân">
                    <Card className="p-4">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Họ tên</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Ngày sinh</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email / SĐT</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" className="mt-3">
                                Cập nhật
                            </Button>
                        </Form>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default ProfilePage;
