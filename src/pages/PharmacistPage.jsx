import { useState } from "react";
import {
    Button,
    Card,
    Container,
    Form,
    Tab,
    Table,
    Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const PharmacistPage = () => {
    const [key, setKey] = useState("inventory");

    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">💊 Dịch vụ dược sĩ</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="inventory" title="Quản lý đơn thuốc, kho thuốc">
                    <Card className="p-4">
                        <Form style={{ marginBottom: 30 }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thuốc</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Hạn dùng</Form.Label>
                                <Form.Control type="datetime-local" />
                            </Form.Group>
                            <Button variant="success">Thêm mới</Button>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Tên thuốc</th>
                                    <th>Số lượng</th>
                                    <th>Hạn dùng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Paracetamol</td>
                                    <td>120</td>
                                    <td>12/2025</td>
                                    <td>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                            }}
                                        >
                                            <Button variant="warning">
                                                Sửa
                                            </Button>
                                            <Button variant="danger">
                                                Xóa
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Tab>
                <Tab eventKey="dispense" title="Phát thuốc">
                    <Card className="p-4">
                        <Form style={{ marginBottom: 30 }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Bác sỹ</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thuốc</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Button variant="success">Thêm mới</Button>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Bác sỹ</th>
                                    <th>Tên thuốc</th>
                                    <th>Số lượng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Thuốc cảm cúm parabol</td>
                                    <td>10</td>
                                    <td>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                            }}
                                        >
                                            <Button variant="warning">
                                                Sửa
                                            </Button>
                                            <Button variant="danger">
                                                Xóa
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PharmacistPage;
