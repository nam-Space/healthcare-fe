import { Button, Form } from "react-bootstrap";

const LoginForm = () => (
    <Form>
        <Form.Group className="mb-3" controlId="loginUsername">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control type="text" placeholder="Nhập username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
            Đăng nhập
        </Button>
    </Form>
);

export default LoginForm;
