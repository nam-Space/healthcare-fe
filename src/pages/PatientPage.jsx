import { callCreateAppointment } from "config/api";
import useGetAppointmentByPatientId from "hooks/useGetAppointmentByPatientId";
import useGetDoctors from "hooks/useGetDoctors";
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
import PatientAppointmentTab from "components/PatientAppointmentTab";
import PatientMedicalReportTab from "components/PatientMedicalReportTab";
import PatientPrescriptionTab from "components/PatientPrescriptionTab";

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
                    <PatientAppointmentTab />
                </Tab>
                <Tab eventKey="prescriptions" title="Đơn thuốc">
                    <PatientPrescriptionTab />
                </Tab>
                <Tab eventKey="records" title="Hồ sơ bệnh án">
                    <PatientMedicalReportTab />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PatientPage;
