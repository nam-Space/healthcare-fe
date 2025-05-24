import { callCreateDrugDistribution } from "config/api";
import { callDeleteDrugDistribution } from "config/api";
import { callUpdateDrugDistribution } from "config/api";
import useGetDoctors from "hooks/useGetDoctors";
import useGetDrugDistributions from "hooks/useGetDrugDistributions";
import useGetDrugs from "hooks/useGetDrugs";
import React, { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const DrugDistributionTab = () => {
    const { doctors, getAllDoctors } = useGetDoctors();
    const { drugs, getAllDrugs } = useGetDrugs();
    const { drugDistributions, getAllDrugDistributions } =
        useGetDrugDistributions();

    const [form, setForm] = useState({
        id: 0,
        doctor_id: 0,
        drug_type_id: 0,
        quantity: 0,
        isEdit: false,
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (form.isEdit) {
                const res = await callUpdateDrugDistribution(form.id, {
                    ...form,
                });
                if (res) {
                    toast.success(`Cập nhật thuốc phát thành công`, {
                        position: "bottom-right",
                    });
                    await getAllDrugDistributions();
                    setForm({
                        ...form,
                        id: 0,
                        doctor_id: 0,
                        drug_type_id: 0,
                        quantity: 0,
                        isEdit: false,
                    });
                }
            } else {
                const res = await callCreateDrugDistribution({
                    ...form,
                });
                if (res) {
                    toast.success(`Tạo mới thuốc phát thành công`, {
                        position: "bottom-right",
                    });
                    await getAllDrugDistributions();
                    setForm({
                        ...form,
                        id: 0,
                        doctor_id: 0,
                        drug_type_id: 0,
                        quantity: 0,
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
            const res = await callDeleteDrugDistribution(id);
            if (res) {
                toast.success(`Xóa thuốc phát thành công`, {
                    position: "bottom-right",
                });
                await getAllDrugDistributions();
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
                    <Form.Label>Bác sỹ</Form.Label>
                    <Form.Select
                        onChange={(e) =>
                            setForm({
                                ...form,
                                doctor_id: e.target.value,
                            })
                        }
                        value={form.doctor_id}
                    >
                        <option>Chọn bác sỹ</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={doctor.id}>
                                {doctor.full_name}
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
                                drug_type_id: e.target.value,
                            })
                        }
                        value={form.drug_type_id}
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
                        <th>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {drugDistributions.map((drugDistribution, index) => (
                        <tr key={index}>
                            <td>{drugDistribution.id}</td>
                            <td>{drugDistribution.doctor_info.full_name}</td>
                            <td>{drugDistribution.drug_info.name}</td>
                            <td>{drugDistribution.quantity}</td>
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
                                                id: drugDistribution.id,
                                                doctor_id:
                                                    drugDistribution.doctor_info
                                                        .id,
                                                drug_type_id:
                                                    drugDistribution.drug_info
                                                        .id,
                                                quantity:
                                                    drugDistribution.quantity,
                                                isEdit: true,
                                            })
                                        }
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) =>
                                            handleDelete(drugDistribution.id)
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

export default DrugDistributionTab;
