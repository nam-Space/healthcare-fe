import { callRegister } from "config/api";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const RegisterForm = (props) => {
    const { setKey } = props;

    const [form, setForm] = useState({
        username: "",
        password: "",
        full_name: "",
        email: "",
        phone: "",
        role: "patient",
        address: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await callRegister(form);
        if (res) {
            setKey("login");
        }
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={form.full_name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            full_name: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập phone"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerAddress">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập address"
                    value={form.address}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            address: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerUsername">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nhập username"
                    value={form.username}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            username: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
                Đăng ký
            </Button>
        </Form>
    );
};

export default RegisterForm;
