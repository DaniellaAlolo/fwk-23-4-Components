import styles from "./Chat.module.css";
import SendBtn from "./SendBtn";
import React, { useState, useRef } from "react";

const Chat = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]); 
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
        setInput(e.target.value);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newUserMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, newUserMessage]);

        try {
            const response = await fetch(
                "https://api-a6uj3err4a-uc.a.run.app/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        messages: [{ user: input, response: "" }],
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const assistantResponse = data.response; 

            const newAssistantMessage = { role: 'assistant', content: assistantResponse };
            setMessages((prev) => [...prev, newAssistantMessage]);

            setInput(""); 
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className={styles.chatWrapper}>
            <div className={styles.chat}>
                {/* Display chat messages */}
                <div className={styles.chatMessages}>
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.role === 'user' ? styles.userMessage : styles.assistantMessage}>
                            <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
                        </div>
                    ))}
                </div>

                <textarea
                    ref={textareaRef}
                    name="promptText"
                    id={styles.promptText}
                    placeholder="Message Assistant"
                    value={input}
                    onInput={handleInput}
                ></textarea>
            </div>
            <SendBtn className={styles.sendBtn} onClick={sendMessage} />
        </div>
    );
};

export default Chat;
