import React from 'react';
import './ChatMessages.css';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div key={message.id} className={`chat-message chat-message--${message.type}`}>
          {message.type === 'user' ? (
            <>
              <div className="chat-message__content">
                <div className="chat-message__bubble">
                  <p>{message.content}</p>
                </div>
              </div>
              <div className="chat-message__avatar">
                <div className="chat-message__avatar-initials">BD</div>
              </div>
            </>
          ) : (
            <div className="chat-message__content">
              <p>{message.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
