import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatbotPage = () => {
    return (
        <Container className="py-5">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 className="mb-4">🤖 Trợ lý ảo Chatbot</h2>
                <Link to={"/"}>
                    <Button variant="secondary">Quay lại</Button>
                </Link>
            </div>
            <Card className="p-4 mb-3">
                <p>
                    Xin chào! Tôi là trợ lý ảo của bạn. Hãy đặt câu hỏi liên
                    quan đến sức khỏe để tôi có thể hỗ trợ.
                </p>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Câu hỏi của bạn</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Ví dụ: Tôi nên uống thuốc gì khi bị đau đầu?"
                        />
                    </Form.Group>
                    <Button variant="primary">Gửi</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default ChatbotPage;
