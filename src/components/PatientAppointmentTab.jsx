import { callUpdateAppointmentById } from "config/api";
import { callDeleteAppointmentById } from "config/api";
import { callCreateAppointment } from "config/api";
import dayjs from "dayjs";
import useGetAppointmentByPatientId from "hooks/useGetAppointmentByPatientId";
import useGetDoctors from "hooks/useGetDoctors";
import React, { useContext, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getIconStatus } from "utils/getIconStatus";
import { UserContext } from "utils/UserContext";

const AppointmentTab = () => {
    const { user } = useContext(UserContext);
    const [form, setForm] = useState({
        id: 0,
        doctor_id: 0,
        appointment_time: "",
        isEdit: false,
    });

    const { doctors } = useGetDoctors();
    const { appointments, getAppointments } = useGetAppointmentByPatientId(
        user.id
    );

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (form.isEdit) {
                const res = await callUpdateAppointmentById(form.id, form);
                if (res) {
                    toast.success(`Cập nhật lịch thành công`, {
                        position: "bottom-right",
                    });
                    await getAppointments(user.id);
                    setForm({
                        ...form,
                        id: 0,
                        doctor_id: 0,
                        appointment_time: "",
                        isEdit: false,
                    });
                }
            } else {
                const res = await callCreateAppointment(form);
                if (res) {
                    toast.success(`Đặt lịch thành công`, {
                        position: "bottom-right",
                    });
                    await getAppointments(user.id);
                    setForm({
                        ...form,
                        id: 0,
                        doctor_id: 0,
                        appointment_time: "",
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
            const res = await callDeleteAppointmentById(id);
            if (res) {
                toast.success(`Xóa lịch thành công`, {
                    position: "bottom-right",
                });
                await getAppointments(user.id);
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
                    <Form.Label>Bác sĩ</Form.Label>
                    <Form.Select
                        onChange={(e) =>
                            setForm({
                                ...form,
                                doctor_id: e.target.value,
                            })
                        }
                        value={form.doctor_id}
                    >
                        <option>Chọn bác sĩ</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.id}>
                                {doctor.full_name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Thời gian</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        value={dayjs(form.appointment_time).format(
                            "YYYY-MM-DDTHH:mm:ss.SSS"
                        )}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                appointment_time: e.target.value,
                            })
                        }
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
                        <th>Bác sỹ</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.id}</td>
                            <td>{appointment?.doctor_info?.full_name}</td>
                            <td>
                                {dayjs(appointment.appointment_time).format(
                                    "YYYY/MM/DD HH:mm:ss"
                                )}
                            </td>
                            <td>{getIconStatus(appointment.status)}</td>
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
                                                id: appointment.id,
                                                doctor_id:
                                                    appointment?.doctor_info
                                                        ?.id,
                                                appointment_time:
                                                    appointment.appointment_time,
                                                isEdit: true,
                                            })
                                        }
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) =>
                                            handleDelete(appointment.id)
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

export default AppointmentTab;
