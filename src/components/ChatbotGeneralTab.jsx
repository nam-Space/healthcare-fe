import React, { useState, useRef, useEffect } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import "styles/chatbot.css";
import { callAskChatbotVer1 } from "config/api";

const ChatbotGeneralTab = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        const userMessage = input.trim();
        if (!userMessage) return;

        // Hiển thị user message
        setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
        setInput("");
        setLoading(true);

        try {
            const response = await callAskChatbotVer1({
                message: userMessage,
            });

            const botReply =
                response.reply || "Xin lỗi, tôi chưa hiểu câu hỏi.";
            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Card className="p-4" style={{ height: "600px", overflow: "hidden" }}>
            <div
                className="chat-window"
                style={{
                    overflowY: "auto",
                    height: "100%",
                    paddingBottom: "120px",
                }}
            >
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`chat-bubble ${
                            msg.sender === "user" ? "user" : "bot"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>

            <Form className="chat-input-box mt-3">
                <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Nhập câu hỏi của bạn..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    variant="primary"
                    className="mt-2 w-100"
                    onClick={handleSend}
                    disabled={loading}
                >
                    {loading ? <Spinner animation="border" size="sm" /> : "Gửi"}
                </Button>
            </Form>
        </Card>
    );
};

export default ChatbotGeneralTab;
