import { useState } from "react";
import { ChatInput } from "./components/Chatinput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
    // start with an empty conversation by default
    const [chatMessages, setChatMessages] = useState([]);
    return (
        <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
        </div>
    );
}

export default App;
