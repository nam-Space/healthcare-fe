import { useState } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
    const [key, setKey] = useState("login");

    return (
        <Container className="py-5" style={{ maxWidth: "500px" }}>
            <h2 className="text-center mb-4">🔐 Quản lý người dùng</h2>
            <Card>
                <Card.Body>
                    <Tabs
                        id="auth-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 justify-content-center"
                    >
                        <Tab eventKey="login" title="Đăng nhập">
                            <LoginForm />
                        </Tab>
                        <Tab eventKey="register" title="Đăng ký">
                            <RegisterForm />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AuthPage;
