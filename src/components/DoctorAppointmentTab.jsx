import { callUpdateAppointmentStatusById } from "config/api";
import { callCreateAppointment } from "config/api";
import { STATUS } from "constants/status";
import dayjs from "dayjs";
import useGetAppointmentByPatientId from "hooks/useGetAppointmentByPatientId";
import useGetAppointmentsByDoctorId from "hooks/useGetAppointmentsByDoctorId";
import useGetDoctors from "hooks/useGetDoctors";
import React, { useContext, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getIconStatus } from "utils/getIconStatus";
import { UserContext } from "utils/UserContext";

const DoctorAppointmentTab = () => {
    const { user } = useContext(UserContext);
    const { appointments, getAppointments } = useGetAppointmentsByDoctorId(
        user?.id
    );

    const handleUpdateAppointment = async (id, data) => {
        try {
            const res = await callUpdateAppointmentStatusById(id, data);
            if (res) {
                toast.success(`Xác nhận lịch hẹn thành công`, {
                    position: "bottom-right",
                });
                await getAppointments(user?.id);
            }
        } catch (error) {
            toast.error(`Mất kết nối`, {
                position: "bottom-right",
            });
        }
    };

    return (
        <Card className="p-4">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Thời gian</th>
                        <th>Bệnh nhân</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.id}</td>
                            <td>
                                {dayjs(appointment.appointment_time).format(
                                    "YYYY/MM/DD HH:mm:ss"
                                )}
                            </td>
                            <td>{appointment.patient_info.full_name}</td>
                            <td>{getIconStatus(appointment.status)}</td>
                            <td>
                                {appointment.status === STATUS.PENDING && (
                                    <div className="d-flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="success"
                                            onClick={() =>
                                                handleUpdateAppointment(
                                                    appointment.id,
                                                    {
                                                        ...appointment,
                                                        status: "completed",
                                                    }
                                                )
                                            }
                                        >
                                            Xác nhận
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() =>
                                                handleUpdateAppointment(
                                                    appointment.id,
                                                    {
                                                        ...appointment,
                                                        status: "cancelled",
                                                    }
                                                )
                                            }
                                        >
                                            Hủy
                                        </Button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default DoctorAppointmentTab;
