import dayjs from "dayjs";
import useGetMedicalReportByPatientId from "hooks/useGetMedicalReportByPatientId";
import React, { useContext } from "react";
import { Card, Table } from "react-bootstrap";
import { UserContext } from "utils/UserContext";

const MedicalReportTab = () => {
    const { user } = useContext(UserContext);

    const { medicalReports } = useGetMedicalReportByPatientId(user?.id);

    return (
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
                    {medicalReports.map((medicalReport, index) => (
                        <tr key={index}>
                            <td>
                                {dayjs(medicalReport.created_at).format(
                                    "YYYY/MM/DD HH:mm:ss"
                                )}
                            </td>
                            <td>{medicalReport?.doctor_info?.full_name}</td>
                            <td>{medicalReport.diagnosis}</td>
                            <td>{medicalReport.description}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default MedicalReportTab;
