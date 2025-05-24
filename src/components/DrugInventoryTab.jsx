import { callCreateDrug } from "config/api";
import { callDeleteDrug } from "config/api";
import { callUpdateDrug } from "config/api";
import dayjs from "dayjs";
import useGetDrugs from "hooks/useGetDrugs";
import React, { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const DrugInventoryTab = () => {
    const { drugs, getAllDrugs } = useGetDrugs();

    const [form, setForm] = useState({
        id: 0,
        name: "",
        quantity: 0,
        expiry_date: "",
        isEdit: false,
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (form.isEdit) {
                const res = await callUpdateDrug(form.id, {
                    ...form,
                    expiry_date: dayjs(form.expiry_date).format("YYYY-MM-DD"),
                });
                if (res) {
                    toast.success(`Cập nhật kho thuốc thành công`, {
                        position: "bottom-right",
                    });
                    await getAllDrugs();
                    setForm({
                        ...form,
                        id: 0,
                        name: "",
                        quantity: 0,
                        expiry_date: "",
                        isEdit: false,
                    });
                }
            } else {
                const res = await callCreateDrug({
                    ...form,
                    expiry_date: dayjs(form.expiry_date).format("YYYY-MM-DD"),
                });
                if (res) {
                    toast.success(`Tạo mới kho thuốc thành công`, {
                        position: "bottom-right",
                    });
                    await getAllDrugs();
                    setForm({
                        ...form,
                        id: 0,
                        name: "",
                        quantity: 0,
                        expiry_date: "",
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
            const res = await callDeleteDrug(id);
            if (res) {
                toast.success(`Xóa thuốc thành công`, {
                    position: "bottom-right",
                });
                await getAllDrugs();
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
                    <Form.Label>Tên thuốc</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                        value={form.name}
                    />
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
                    <Form.Label>Hạn dùng</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                expiry_date: e.target.value,
                            })
                        }
                        value={dayjs(form.expiry_date).format(
                            "YYYY-MM-DDTHH:mm:ss.SSS"
                        )}
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
                        <th>Tên thuốc</th>
                        <th>Số lượng</th>
                        <th>Hạn dùng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {drugs.map((drug, index) => (
                        <tr key={index}>
                            <td>{drug.id}</td>
                            <td>{drug.name}</td>
                            <td>{drug.quantity}</td>
                            <td>{drug.expiry_date}</td>
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
                                                id: drug.id,
                                                name: drug.name,
                                                quantity: drug.quantity,
                                                expiry_date: drug.expiry_date,
                                                isEdit: true,
                                            })
                                        }
                                    >
                                        Sửa
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) => handleDelete(drug.id)}
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

export default DrugInventoryTab;
