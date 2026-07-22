import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    function saveInputtext(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        if (!inputText.trim()) return;

        const userMessage = {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID(),
        };

        const typingId = `typing-${crypto.randomUUID()}`;

        // append user message and a typing placeholder for the bot
        const newChatMessages = [
            ...chatMessages,
            userMessage,
            { message: "", sender: "robot", id: typingId, typing: true },
        ];
        setChatMessages(newChatMessages);
        setLoading(true);
        setInputText("");

        // simulate async bot response (wrap synchronous API to allow loader)
        setTimeout(() => {
            const response = Chatbot.getResponse(inputText);
            setChatMessages((prev) =>
                prev.map((m) =>
                    m.id === typingId
                        ? {
                              ...m,
                              message: response,
                              typing: false,
                              id: crypto.randomUUID(),
                          }
                        : m,
                ),
            );
            setLoading(false);
        }, 900);
    }

    return (
        <div className="container-chat-input">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputtext}
                value={inputText}
                disabled={loading}
            />
            <button
                className="send-button"
                onClick={sendMessage}
                disabled={loading || !inputText.trim()}
            >
                {loading ? (
                    <div className="loader" aria-hidden>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    "Send"
                )}
            </button>
        </div>
    );
}
