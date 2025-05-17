import { useState } from "react";
import {
    Badge,
    Button,
    Card,
    Container,
    Form,
    Tab,
    Table,
    Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const DoctorPage = () => {
    const [key, setKey] = useState("schedule");

    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">👨‍⚕️ Dịch vụ bác sĩ</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="schedule" title="Lịch hẹn">
                    <Card className="p-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Ngày</th>
                                    <th>Bệnh nhân</th>
                                    <th>Thời gian</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-05-18</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>08:00</td>
                                    <td>Chờ xác nhận</td>
                                    <td>
                                        <Button size="sm" variant="success">
                                            Xác nhận
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Tab>
                <Tab eventKey="exam" title="Khám bệnh">
                    <Card className="p-4">
                        <Form style={{ marginBottom: 30 }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Bệnh nhân</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Chẩn đoán</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ghi chú</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <Button variant="primary">Thêm mới</Button>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Bệnh nhân</th>
                                    <th>Chẩn đoán</th>
                                    <th>Ghi chú</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Bị mắc Covid-19</td>
                                    <td>
                                        Thường xuyên ho, hắt hơi, sổ mũi, đau
                                        họng
                                    </td>
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
                <Tab eventKey="symptom" title="Dự đoán triệu chứng">
                    <Card className="p-4">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Triệu chứng</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Dự đoán</Button>
                        </Form>
                    </Card>
                </Tab>
                <Tab eventKey="prescription" title="Kê đơn">
                    <Card className="p-4">
                        <Form style={{ marginBottom: 30 }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Bệnh nhân</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên thuốc</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Số lượng</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            <Button variant="success">Tạo đơn</Button>
                        </Form>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Bệnh nhân</th>
                                    <th>Tên thuốc</th>
                                    <th>Số lượng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Thuốc cảm cúm panadol</td>
                                    <td>5</td>
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

export default DoctorPage;
