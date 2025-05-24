import DoctorAppointmentTab from "components/DoctorAppointmentTab";
import DoctorMedicalReportTab from "components/DoctorMedicalReportTab";
import DoctorPrescriptionTab from "components/DoctorPrescriptionTab";
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
                    <DoctorAppointmentTab />
                </Tab>
                <Tab eventKey="exam" title="Khám bệnh">
                    <DoctorMedicalReportTab />
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
                    <DoctorPrescriptionTab />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default DoctorPage;
