import React, { useState } from "react";
import { Button, Card, Form, Spinner, Alert } from "react-bootstrap";
import { callAskChatbotVer1 } from "config/api";

const DoctorPredictionBySystom = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handlePredict = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const response = await callAskChatbotVer1({
                message: `${input}. Mình bị bệnh gì ạ?`,
            });

            setResult(response);
        } catch (err) {
            setError(
                "Không thể gửi yêu cầu tới hệ thống. Vui lòng thử lại sau."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="p-4">
            <h5 className="mb-3">🧠 Dự đoán bệnh từ triệu chứng</h5>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nhập triệu chứng của bạn</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ví dụ: Tôi bị sốt cao, đau họng, ho khan..."
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={handlePredict}
                    disabled={loading}
                >
                    {loading ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        "Dự đoán"
                    )}
                </Button>
            </Form>

            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}

            {result && (
                <Alert variant="success" className="mt-3">
                    <strong>Kết quả dự đoán:</strong>
                    <div>{result.reply}</div>
                    {/* {result.sources?.length > 0 && (
                        <ul className="mt-2">
                            {result.sources.map((src, idx) => (
                                <li key={idx}>
                                    {src.page_content?.slice(0, 100)}...
                                </li>
                            ))}
                        </ul>
                    )} */}
                </Alert>
            )}
        </Card>
    );
};

export default DoctorPredictionBySystom;
