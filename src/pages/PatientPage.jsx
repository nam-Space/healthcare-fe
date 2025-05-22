import { callCreateAppointment } from "config/api";
import useGetAppointmentByPatientId from "hooks/useGetAppointmentByPatientId";
import useGetDoctors from "hooks/useGetDoctor";
import { useContext, useState } from "react";
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
import { toast } from "react-toastify";
import { UserContext } from "utils/UserContext";
import dayjs from "dayjs";
import { getIconStatus } from "utils/getIconStatus";
import AppointmentTab from "components/AppointmentTab";

const PatientPage = () => {
    const [key, setKey] = useState("appointments");
    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">🧑‍⚕️ Dịch vụ bệnh nhân</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="appointments" title="Đặt lịch khám">
                    <AppointmentTab />
                </Tab>
                <Tab eventKey="prescriptions" title="Đơn thuốc">
                    <Card className="p-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Ngày</th>
                                    <th>Bác sĩ</th>
                                    <th>Tên thuốc</th>
                                    <th>Số lượng</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-05-01</td>
                                    <td>Dr. A</td>
                                    <td>Thuốc cảm cúm parabol</td>
                                    <td>5</td>
                                    <td>Đã cấp</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Tab>
                <Tab eventKey="records" title="Hồ sơ bệnh án">
                    <Card className="p-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Ngày</th>
                                    <th>Bác sỹ</th>
                                    <th>Chẩn đoán</th>
                                    <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-04-20</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Cảm cúm</td>
                                    <td>Nghỉ ngơi, uống nước nhiều</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PatientPage;
