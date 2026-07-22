import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, typing }) {
    return (
        <div
            className={
                sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
        >
            {sender === "robot" && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}

            {typing ? (
                <div className="chat-message-text typing">
                    <div className="typing-dots" aria-hidden>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            ) : (
                <div className="chat-message-text">{message}</div>
            )}

            {sender === "user" && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    );
}
