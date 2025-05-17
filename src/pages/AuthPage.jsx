import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { useState } from "react";
import { Button, Card, Container, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Card>
                <Card.Body>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Link to={"/"}>
                            <Button variant="secondary">Về trang chủ</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AuthPage;
