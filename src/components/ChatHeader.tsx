import React, { useState, useEffect, useRef } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showDropdown]);

  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <div className="chat-header__breadcrumb">
          <Home size={24} className="chat-header__home-icon" />
          <span className="chat-header__breadcrumb-separator">/</span>
          <div className="chat-header__dropdown-container" ref={dropdownRef}>
            <button 
              ref={triggerRef}
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
          <X size={24} />
        </button>
        <button 
          className="chat-header__action-button chat-header__collaborate-button" 
          onClick={onCollaborate}
          aria-label="Collaborate"
        >
          <Users size={24} />
        </button>
      </div>
    </div>
  );
};
