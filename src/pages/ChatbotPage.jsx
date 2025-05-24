import ChatbotDiabetesTab from "components/ChatbotDiabetesTab";
import ChatbotGeneralTab from "components/ChatbotGeneralTab";
import { useState } from "react";
import { Button, Card, Container, Form, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChatbotPage = () => {
    const [key, setKey] = useState("general");

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
            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="general" title="Chatbot tổng quan">
                    <ChatbotGeneralTab />
                </Tab>
                <Tab
                    eventKey="diabetes"
                    title="Chatbot dự đoán bệnh tiểu đường"
                >
                    <ChatbotDiabetesTab />
                </Tab>
            </Tabs>
        </Container>
    );
};

export default ChatbotPage;
