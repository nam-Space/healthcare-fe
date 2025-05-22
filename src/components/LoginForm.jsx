import { callGetAccount } from "config/api";
import { callLogin } from "config/api";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/UserContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({ username: "", password: "" });

    useEffect(() => {
        if (!_.isEmpty(user)) {
            navigate("/");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await callLogin(form);
        if (res) {
            const { access, refresh } = res;
            const resAcc = await callGetAccount({
                headers: {
                    Authorization: "Bearer " + access,
                },
            });
            setUser(resAcc);
            localStorage.setItem(
                "currentUser-healthcare",
                JSON.stringify({
                    ...resAcc,
                    access,
                })
            );
            navigate("/");
        }
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="loginUsername">
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
            <Form.Group className="mb-3" controlId="loginPassword">
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
            <Button variant="primary" type="submit" className="w-100">
                Đăng nhập
            </Button>
        </Form>
    );
};

export default LoginForm;
