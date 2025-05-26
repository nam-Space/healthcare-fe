import { callDeletePrescription } from "config/api";
import { callCreatePrescription } from "config/api";
import { callUpdatePrescription } from "config/api";
import dayjs from "dayjs";
import useGetDrugs from "hooks/useGetDrugs";
import useGetMedicalReportsByPatientId from "hooks/useGetMedicalReportByPatientId";
import useGetPatients from "hooks/useGetPatients";
import useGetPrescriptionsByDoctorId from "hooks/useGetPrescriptionsByDoctorId";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { UserContext } from "utils/UserContext";

const DoctorPrescriptionTab = () => {
    const { user } = useContext(UserContext);

    const { patients, getAllPatients } = useGetPatients();

    const { prescriptions, getPrescriptions } = useGetPrescriptionsByDoctorId(
        user?.id
    );

    const { drugs, getAllDrugs } = useGetDrugs();

    const { medicalReports, setMedicalReports, getMedicalReports } =
        useGetMedicalReportsByPatientId();

    const [form, setForm] = useState({
        id: 0,
        patient_id: 0,
        medicine_id: 0,
        quantity: 0,
        medicalRecord_id: 0,
        dosage: "",
        instructions: "",
        isEdit: false,
    });

    useEffect(() => {
        if (form.patient_id) {
            getMedicalReports(form.patient_id);
        } else {
            setMedicalReports([]);
        }
    }, [form.patient_id]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (form.isEdit) {
                const res = await callUpdatePrescription(form.id, {
                    ...form,
                    medical_record: +form.medicalRecord_id,
                    doctor_id: user?.id,
                    medicine_name: drugs.find(
                        (drug) => drug.id == form.medicine_id
                    )?.name,
                    quantity: +form.quantity,
                });
                if (res) {
                    toast.success(`Cập nhật kê đơn thành công`, {
                        position: "bottom-right",
                    });
                    await getPrescriptions(user?.id);
                    setForm({
                        ...form,
                        id: 0,
                        patient_id: 0,
                        medicine_id: 0,
                        quantity: 0,
                        medicalRecord_id: 0,
                        dosage: "",
                        instructions: "",
                        isEdit: false,
                    });
                }
            } else {
                const res = await callCreatePrescription({
                    ...form,
                    medical_record: +form.medicalRecord_id,
                    doctor_id: user?.id,
                    medicine_name: drugs.find(
                        (drug) => drug.id == form.medicine_id
                    )?.name,
                    quantity: +form.quantity,
                });
                if (res) {
                    toast.success(`Thêm kê đơn thành công`, {
                        position: "bottom-right",
                    });
                    await getPrescriptions(user?.id);
                    setForm({
                        ...form,
                        id: 0,
                        patient_id: 0,
                        medicine_id: 0,
                        quantity: 0,
                        medicalRecord_id: 0,
                        dosage: "",
                        instructions: "",
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
            const res = await callDeletePrescription(id);
            if (res) {
                toast.success(`Xóa kê đơn thành công`, {
                    position: "bottom-right",
                });
                await getPrescriptions(user?.id);
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
                        <option value={0}>Chọn bệnh nhân</option>
                        {patients.map((patient, index) => (
                            <option key={index} value={patient.id}>
                                {patient.full_name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Tên thuốc</Form.Label>
                    <Form.Select
                        onChange={(e) =>
                            setForm({
                                ...form,
                                medicine_id: e.target.value,
                            })
                        }
                        value={form.medicine_id}
                    >
                        <option>Chọn tên thuốc</option>
                        {drugs.map((drug, index) => (
                            <option key={index} value={drug.id}>
                                {drug.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Số lượng</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                quantity: e.target.value,
                            })
                        }
                        value={form.quantity}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hồ sơ bệnh án</Form.Label>
                    <Form.Select
                        onChange={(e) =>
                            setForm({
                                ...form,
                                medicalRecord_id: e.target.value,
                            })
                        }
                        value={form.medicalRecord_id}
                    >
                        <option>Chọn hồ sơ bệnh án</option>
                        {medicalReports?.map((medicalReport, index) => (
                            <option key={index} value={medicalReport.id}>
                                {dayjs(medicalReport.created_at).format(
                                    "YYYY/MM/DD HH:mm:ss"
                                )}{" "}
                                - {medicalReport.diagnosis}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Liều lượng</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                dosage: e.target.value,
                            })
                        }
                        value={form.dosage}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Hướng dẫn</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                instructions: e.target.value,
                            })
                        }
                        value={form.instructions}
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
                        <th>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Hồ sơ bệnh án</th>
                        <th>Liều lượng</th>
                        <th>Hướng dẫn</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription, index) => (
                        <tr key={index}>
                            <td>{prescription.id}</td>
                            <td>{prescription?.patient_info?.full_name}</td>
                            <td>{prescription.medicine_name}</td>
                            <td>{prescription.quantity}</td>
                            <td>
                                {prescription?.medical_record_info?.diagnosis}
                            </td>
                            <td>{prescription.dosage}</td>
                            <td>{prescription.instructions}</td>
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
                                        onClick={() => {
                                            setForm({
                                                ...form,
                                                id: prescription.id,
                                                patient_id:
                                                    prescription.patient_id,
                                                medicine_id: drugs.find(
                                                    (drug) =>
                                                        drug.name ==
                                                        prescription.medicine_name
                                                ).id,

                                                quantity: prescription.quantity,
                                                medicalRecord_id:
                                                    prescription.medical_record,
                                                dosage: prescription.dosage,
                                                instructions:
                                                    prescription.instructions,
                                                isEdit: true,
                                            });
                                        }}
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) =>
                                            handleDelete(prescription.id)
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

export default DoctorPrescriptionTab;
