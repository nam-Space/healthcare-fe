import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const ChatbotGeneralTab = () => {
    return (
        <Card className="p-4">
            <p>
                Xin chào! Tôi là trợ lý ảo của bạn. Hãy đặt câu hỏi liên quan
                đến sức khỏe để tôi có thể hỗ trợ.
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
    );
};

export default ChatbotGeneralTab;
