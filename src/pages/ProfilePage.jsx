import { useContext, useEffect, useState } from "react";
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
import { UserContext } from "utils/UserContext";

const ProfilePage = () => {
    const [key, setKey] = useState("profile");
    const { user } = useContext(UserContext);

    const [form, setForm] = useState({
        username: "",
        full_name: "",
        email: "",
        phone: "",
        role: "",
        address: "",
    });

    useEffect(() => {
        setForm({
            ...form,
            username: user.username,
            full_name: user.full_name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            address: user.address,
        });
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

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
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={form.username}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    username: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Họ tên</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.full_name}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    full_name: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>SĐT</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.phone}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={form.address}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    address: e.target.value,
                                                })
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Vai trò</Form.Label>
                                        <Form.Control
                                            type="text"
                                            disabled
                                            value={form.role}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    role: e.target.value,
                                                })
                                            }
                                        />
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
