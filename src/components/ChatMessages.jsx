import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);

    if (!chatMessages || chatMessages.length === 0) {
        return (
            <div className="chat-message-container empty" ref={chatMessagesRef}>
                <div className="empty-placeholder">Start Chat</div>
            </div>
        );
    }

    return (
        <div className="chat-message-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        typing={chatMessage.typing}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;
