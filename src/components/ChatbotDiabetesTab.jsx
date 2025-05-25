import { callAskChatbotVer2 } from "config/api";
import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

function ChatbotDiabetesTab() {
    const [formData, setFormData] = useState({
        age: "",
        blood_pressure: "",
        cholesterol: "",
        bmi: "",
        blood_sugar: "",
        creatinine: "",
        model_type: "RNN",
    });

    const [chatLog, setChatLog] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id || e.target.name]: e.target.value,
        });
    };

    const displayMessage = (message, sender) => {
        setChatLog((prev) => [...prev, { message, sender }]);
    };

    const sendMessage = async () => {
        const {
            age,
            blood_pressure,
            cholesterol,
            bmi,
            blood_sugar,
            creatinine,
            model_type,
        } = formData;

        if (
            !age ||
            !blood_pressure ||
            !cholesterol ||
            !bmi ||
            !blood_sugar ||
            !creatinine
        ) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }

        displayMessage(
            `Tuổi: ${age}, Huyết áp: ${blood_pressure}, Cholesterol: ${cholesterol}, BMI: ${bmi}, Đường huyết: ${blood_sugar}, Creatinine: ${creatinine}`,
            "user"
        );

        try {
            const response = await callAskChatbotVer2(formData);

            const { predicted_disease, disease_info } = response;

            displayMessage(`Dự đoán: ${predicted_disease}`, "bot");
            displayMessage(`Thông tin về bệnh: ${disease_info}`, "bot");
        } catch (error) {
            displayMessage("Có lỗi xảy ra! Vui lòng thử lại.", "bot");
        }
    };

    return (
        <Card className="p-4">
            <Container>
                <h1 className="text-center mb-4">Chatbot Dự Đoán Bệnh</h1>

                <Card className="p-4 mb-3">
                    <div
                        style={{
                            maxHeight: "300px",
                            overflowY: "auto",
                            background: "#e8f0fe",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    >
                        {chatLog.map((entry, idx) => (
                            <div
                                key={idx}
                                style={{
                                    marginBottom: "10px",
                                    color:
                                        entry.sender === "user"
                                            ? "blue"
                                            : "green",
                                }}
                            >
                                <strong>
                                    {entry.sender === "user"
                                        ? "Bạn"
                                        : "Chatbot"}
                                    :
                                </strong>{" "}
                                {entry.message}
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-4">
                    <Form>
                        <Form.Group controlId="age">
                            <Form.Control
                                type="number"
                                placeholder="Nhập tuổi"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="blood_pressure" className="mt-2">
                            <Form.Control
                                type="number"
                                placeholder="Nhập huyết áp"
                                value={formData.blood_pressure}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="cholesterol" className="mt-2">
                            <Form.Control
                                type="number"
                                placeholder="Nhập mức cholesterol"
                                value={formData.cholesterol}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="bmi" className="mt-2">
                            <Form.Control
                                type="number"
                                placeholder="Nhập BMI"
                                value={formData.bmi}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="blood_sugar" className="mt-2">
                            <Form.Control
                                type="number"
                                placeholder="Nhập mức đường huyết"
                                value={formData.blood_sugar}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="creatinine" className="mt-2">
                            <Form.Control
                                type="number"
                                placeholder="Nhập mức creatinine"
                                value={formData.creatinine}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="model_type" className="mt-2">
                            <Form.Select
                                value={formData.model_type}
                                onChange={handleChange}
                            >
                                <option value="RNN">RNN</option>
                                <option value="CNN">CNN</option>
                                <option value="LSTM">LSTM</option>
                            </Form.Select>
                        </Form.Group>

                        <Button className="mt-3 w-100" onClick={sendMessage}>
                            Gửi
                        </Button>
                    </Form>
                </Card>
            </Container>
        </Card>
    );
}

export default ChatbotDiabetesTab;
