import { callUpdateMedicalRecord } from "config/api";
import { callDeleteMedicalRecord } from "config/api";
import { callAddMedicalRecord } from "config/api";
import useGetMedicalReportsByDoctorId from "hooks/useGetMedicalReportByDoctorId";
import useGetPatients from "hooks/useGetPatients";
import React, { useContext, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { UserContext } from "utils/UserContext";

const DoctorMedicalReportTab = () => {
    const { user } = useContext(UserContext);
    const { patients, getAllPatients } = useGetPatients();

    const [form, setForm] = useState({
        id: 0,
        patient_id: 0,
        doctor_id: user?.id,
        diagnosis: "",
        description: "",
        isEdit: false,
    });

    const { medicalReports, getMedicalReports } =
        useGetMedicalReportsByDoctorId(user?.id);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (form.isEdit) {
                const res = await callUpdateMedicalRecord(form.id, form);
                if (res) {
                    toast.success(`Cập nhật hồ sơ khám bệnh thành công`, {
                        position: "bottom-right",
                    });
                    await getMedicalReports(user?.id);
                    setForm({
                        ...form,
                        id: 0,
                        patient_id: 0,
                        doctor_id: user?.id,
                        diagnosis: "",
                        description: "",
                        isEdit: false,
                    });
                }
            } else {
                const res = await callAddMedicalRecord(form);
                if (res) {
                    toast.success(`Thêm hồ sơ khám bệnh thành công`, {
                        position: "bottom-right",
                    });
                    await getMedicalReports(user?.id);
                    setForm({
                        ...form,
                        id: 0,
                        patient_id: 0,
                        doctor_id: user?.id,
                        diagnosis: "",
                        description: "",
                        isEdit: false,
                    });
                }
            }
        } catch (error) {
            toast.error(`Mất kết nối`, {
                position: "bottom-right",
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await callDeleteMedicalRecord(id);
            if (res) {
                toast.success(`Xóa hồ sơ khám bệnh thành công`, {
                    position: "bottom-right",
                });
                await getMedicalReports(user?.id);
            }
        } catch (error) {
            toast.error(`Mất kết nối`, {
                position: "bottom-right",
            });
        }
    };

    return (
        <Card className="p-4">
            <Form style={{ marginBottom: 30 }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Bệnh nhân</Form.Label>
                    <Form.Select
                        onChange={(e) =>
                            setForm({
                                ...form,
                                patient_id: e.target.value,
                            })
                        }
                        value={form.patient_id}
                    >
                        <option>Chọn bệnh nhân</option>
                        {patients.map((patient, index) => (
                            <option key={index} value={patient.id}>
                                {patient.full_name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Chẩn đoán</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                diagnosis: e.target.value,
                            })
                        }
                        value={form.diagnosis}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ghi chú</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                description: e.target.value,
                            })
                        }
                        value={form.description}
                    />
                </Form.Group>
                <Button
                    variant={form.isEdit ? "primary" : "success"}
                    type="submit"
                >
                    {form.isEdit ? "Cập nhật" : "Thêm mới"}
                </Button>
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
                    {medicalReports.map((medicalReport, index) => (
                        <tr key={index}>
                            <td>{medicalReport.id}</td>
                            <td>{medicalReport?.patient_info?.full_name}</td>
                            <td>{medicalReport.diagnosis}</td>
                            <td>{medicalReport.description}</td>
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                    }}
                                >
                                    <Button
                                        variant="warning"
                                        onClick={() =>
                                            setForm({
                                                ...form,
                                                id: medicalReport.id,
                                                patient_id:
                                                    medicalReport.patient_info
                                                        .id,
                                                diagnosis:
                                                    medicalReport.diagnosis,
                                                description:
                                                    medicalReport.description,
                                                isEdit: true,
                                            })
                                        }
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) =>
                                            handleDelete(medicalReport.id)
                                        }
                                    >
                                        Xóa
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default DoctorMedicalReportTab;
