import { Button, Form } from "react-bootstrap";

const RegisterForm = () => (
    <Form>
        <Form.Group className="mb-3" controlId="registerUsername">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control type="text" placeholder="Nhập username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registerConfirm">
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">
            Đăng ký
        </Button>
    </Form>
);

export default RegisterForm;
