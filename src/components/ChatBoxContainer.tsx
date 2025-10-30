import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Users, Copy, RotateCcw, List, Plus } from 'lucide-react';
import infoIcon from '../assets/icons/Info.svg';
import { ThinkingLoader } from './ThinkingLoader';
import ableLogoIcon from '../assets/able-logo-icon.png';
import editIcon from '../assets/icons/Edit.svg';
import moveToFolderIcon from '../assets/icons/Move to folder.svg';
import chevronLeftIcon from '../assets/icons/Arrow left.svg';
import './ChatBoxContainer.css';

interface ChatBoxContainerProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  messages: Array<{
    id: string;
    type: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  }>;
  onHomeClick?: () => void;
  onClearChat?: () => void;
  isThinking?: boolean;
  onOpenList?: () => void;
  tableSidebarOpen?: boolean;
}

function IconArrowLeft({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="chat-box-container__arrow-left-icon"
      aria-label="Back"
    >
      <img src={chevronLeftIcon} alt="Back" className="chat-box-container__arrow-left-icon-img" />
    </button>
  );
}

function IconBasicChevronDown({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="chat-box-container__chevron-icon"
      aria-label="Toggle dropdown"
    >
      <ChevronDown size={24} />
    </button>
  );
}

function ActionBar({ 
  onHomeClick, 
  onChevronClick,
  chevronRef,
  menuRef,
  menuOpen,
  onClearChat,
  onCloseMenu
}: { 
  onHomeClick: () => void;
  onChevronClick: () => void;
  chevronRef: React.RefObject<HTMLButtonElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  menuOpen: boolean;
  onClearChat?: () => void;
  onCloseMenu?: () => void;
}) {
  const handleClearMessages = () => {
    onClearChat?.();
  };

  const handleRename = () => {
    // TODO: Implement rename functionality
    onCloseMenu?.();
  };

  const handleMoveToFolder = () => {
    // TODO: Implement move to folder functionality
    onCloseMenu?.();
  };

  return (
    <div className="chat-box-container__action-bar">
      <div className="chat-box-container__action-bar-content">
        <div className="chat-box-container__breadcrumb">
          <IconArrowLeft onClick={onHomeClick} />
          <span className="chat-box-container__separator">/</span>
          <div className="chat-box-container__dropdown-container">
            <button 
              ref={chevronRef}
              className="chat-box-container__dropdown-trigger"
              onClick={onChevronClick}
            >
              <span className="chat-box-container__research-name">New Research</span>
              <IconBasicChevronDown onClick={onChevronClick} />
            </button>
            {/* Info tooltip */}
            <div className="chat-box-container__info">
              <img src={infoIcon} alt="Asset info" className="chat-box-container__info-icon" />
              <div className="chat-box-container__info-tooltip" role="tooltip">
                <div className="chat-box-container__info-tooltip-title">Asset Information:</div>
                <div className="chat-box-container__info-tooltip-line">- Entity Type: company_list</div>
                <div className="chat-box-container__info-tooltip-line">- Entity ID: 19124</div>
              </div>
            </div>
            {menuOpen && (
              <div ref={menuRef} className="chat-box-container__dropdown">
                <div className="chat-box-container__dropdown-item" onClick={handleRename}>
                  <img src={editIcon} alt="Edit" className="chat-box-container__dropdown-icon" />
                  <span>Rename</span>
                </div>
                <div className="chat-box-container__dropdown-item" onClick={handleMoveToFolder}>
                  <img src={moveToFolderIcon} alt="Move to folder" className="chat-box-container__dropdown-icon" />
                  <span>Move to folder</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="chat-box-container__add-button-wrapper">
          <button 
            className="chat-box-container__add-button" 
            aria-label="Start new chat"
            onClick={handleClearMessages}
          >
            <Plus size={24} />
          </button>
          <span className="chat-box-container__tooltip">Start new chat</span>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content, timestamp }: { content: string; timestamp?: Date }) {
  const formatTime = (date?: Date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="chat-box-container__message-group">
      <div className="chat-box-container__user-message">
        <div className="chat-box-container__message-bubble">
          <p>{content}</p>
        </div>
        <div className="chat-box-container__message-avatar">
          <div className="chat-box-container__avatar-initials">BD</div>
        </div>
      </div>
      {timestamp && (
        <div className="chat-box-container__message-timestamp chat-box-container__message-timestamp--user">
          {formatTime(timestamp)}
        </div>
      )}
      <div className="chat-box-container__message-spacer"></div>
    </div>
  );
}

function AIMessage({ 
  content, 
  timestamp, 
  onCopy, 
  onRegenerate,
  onOpenList
}: { 
  content: string; 
  timestamp?: Date;
  onCopy?: () => void;
  onRegenerate?: () => void;
  onOpenList?: () => void;
}) {
  const [copied, setCopied] = useState(false);

  const formatTime = (date?: Date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const handleCopy = async () => {
    if (onCopy) {
      onCopy();
    } else {
      await navigator.clipboard.writeText(content);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="chat-box-container__ai-message-wrapper">
      <img 
        src={ableLogoIcon} 
        alt="Able" 
        className="chat-box-container__ai-logo"
      />
      <div className="chat-box-container__ai-message-content">
        <div className="chat-box-container__ai-message">
          <p>{content}</p>
        </div>
        {timestamp && (
          <span className="chat-box-container__message-timestamp chat-box-container__message-timestamp--ai">
            {formatTime(timestamp)}
          </span>
        )}
        <div className="chat-box-container__ai-message-actions">
          {onOpenList && (
            <button
              className="chat-box-container__action-button chat-box-container__action-button--primary"
              onClick={onOpenList}
              aria-label="Open list"
            >
              <List size={24} />
              <span>Open list</span>
            </button>
          )}
          <button
            className="chat-box-container__action-button"
            onClick={handleCopy}
            aria-label={copied ? "Copied!" : "Copy message"}
          >
            <Copy size={24} />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          {onRegenerate && (
            <button
              className="chat-box-container__action-button"
              onClick={onRegenerate}
              aria-label="Regenerate response"
            >
              <RotateCcw size={24} />
              <span>Regenerate</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatInput({ value, onChange, onSend, disabled }: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
  onSend: () => void; 
  disabled: boolean;
}) {
  return (
    <div className="chat-box-container__input-field">
      <div className="chat-box-container__input-container">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="Start a new research..."
          className="chat-box-container__textarea"
        />
      </div>
      <div className="chat-box-container__button-container">
        <button
          onClick={onSend}
          disabled={disabled}
          className={`chat-box-container__send-button ${disabled ? 'disabled' : 'active'}`}
          aria-label="Send message"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ChatBoxContainer({ 
  inputValue, 
  onInputChange, 
  onSend, 
  disabled,
  messages,
  onHomeClick,
  onClearChat,
  isThinking = false,
  onOpenList,
  tableSidebarOpen = false
}: ChatBoxContainerProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const chevronRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    onHomeClick?.();
  };

  const handleClearChat = () => {
    onClearChat?.();
  };

  const handleChevronClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        chevronRef.current &&
        !chevronRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [menuOpen]);

  return (
    <div className={`chat-box-container ${tableSidebarOpen ? 'chat-box-container--table-sidebar-open' : ''}`}>
      <ActionBar 
        onHomeClick={handleHomeClick}
        onChevronClick={handleChevronClick}
        chevronRef={chevronRef}
        menuRef={menuRef}
        menuOpen={menuOpen}
        onClearChat={handleClearChat}
        onCloseMenu={() => setMenuOpen(false)}
      />
      
      <div className="chat-box-container__messages">
        {messages.map((message) => (
          message.type === 'user' ? (
            <UserMessage 
              key={message.id} 
              content={message.content} 
              timestamp={message.timestamp}
            />
          ) : (
            <AIMessage 
              key={message.id} 
              content={message.content}
              timestamp={message.timestamp}
              onOpenList={onOpenList}
            />
          )
        ))}
        <ThinkingLoader isVisible={isThinking} />
      </div>
      
      <ChatInput 
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onSend={onSend}
        disabled={disabled}
      />
    </div>
  );
}
