import React, { useState } from 'react';
import { Home, ChevronDown, X, Users } from 'lucide-react';
import './ChatHeader.css';

interface ChatHeaderProps {
  onClearChat: () => void;
  onCollaborate: () => void;
  researchName?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  onClearChat, 
  onCollaborate, 
  researchName = "New Research" 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <div className="chat-header__breadcrumb">
          <Home size={24} className="chat-header__home-icon" />
          <span className="chat-header__breadcrumb-separator">/</span>
          <div className="chat-header__dropdown-container">
            <button 
              className="chat-header__dropdown-trigger"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-label="Select research"
            >
              <span className="chat-header__breadcrumb-title">{researchName}</span>
              <ChevronDown size={24} className="chat-header__chevron" />
            </button>
            {showDropdown && (
              <div className="chat-header__dropdown">
                <div className="chat-header__dropdown-empty">
                  <p>No researches</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="chat-header__right">
        <button 
          className="chat-header__action-button chat-header__clear-button" 
          onClick={onClearChat}
          aria-label="Clear chat"
        >
          <X size={20} />
        </button>
        <button 
          className="chat-header__action-button chat-header__collaborate-button" 
          onClick={onCollaborate}
          aria-label="Collaborate"
        >
          <Users size={20} />
        </button>
      </div>
    </div>
  );
};
