import dayjs from "dayjs";
import useGetPrescriptionsByPatientId from "hooks/useGetPrescriptionsByPatientId";
import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { UserContext } from "utils/UserContext";

const PrescriptionTab = () => {
    const { user } = useContext(UserContext);

    const { loading, prescriptions, getPrescriptions } =
        useGetPrescriptionsByPatientId(user?.id);

    return (
        <Card className="p-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ngày</th>
                        <th>Bác sĩ</th>
                        <th>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Dành cho bệnh</th>
                        <th>Liều lượng</th>
                        <th>Hướng dẫn</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={index}>
                            <td>
                                {dayjs(prescription.prescribed_at).format(
                                    "YYYY/MM/DD HH:mm:ss"
                                )}
                            </td>
                            <td>{prescription?.doctor_info?.full_name}</td>
                            <td>{prescription.medicine_name}</td>
                            <td>{prescription.quantity}</td>
                            <td>
                                {prescription?.medical_record_info?.diagnosis}
                            </td>
                            <td>{prescription.dosage}</td>
                            <td>{prescription.instructions}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default PrescriptionTab;
