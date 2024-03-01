import React, { useState } from "react";
import Header from "./Header";

export default function GroupChat() {
  const [messages, setMessages] = useState([]); // State to store messages
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const [userName, setUserName] = useState(""); // State to store user name

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputValue.trim() === "" || userName.trim() === "") return; // Require both username and message content

    const newMessage = {
      id: Date.now(), // Use timestamp as ID
      userName: userName,
      text: inputValue,
      timestamp: new Date().toLocaleString(), // Current date and time
    };

    // Update messages state with new message
    setMessages([newMessage, ...messages]); // Place new message at the beginning

    // Store messages in local storage
    localStorage.setItem(
      "groupChatMessages",
      JSON.stringify([newMessage, ...messages])
    );

    // Clear input value after sending
    setInputValue("");
  };

  // Function to handle refreshing messages
  const refreshMessages = () => {
    // Retrieve messages from local storage
    const storedMessages = localStorage.getItem("groupChatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  };

  return (
    <div>
      <Header />
      {/* Display messages */}
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>
              <strong>{message.userName}</strong> - {message.text}
            </p>
            <p>Sent at: {message.timestamp}</p>
          </div>
        ))}
      </div>

      {/* Input box for username */}
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      {/* Input box for message */}
      <input
        type="text"
        placeholder="Type your message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Send button */}
      <button onClick={sendMessage}>Send</button>

      {/* Refresh button */}
      <button onClick={refreshMessages}>Refresh</button>
    </div>
  );
}
