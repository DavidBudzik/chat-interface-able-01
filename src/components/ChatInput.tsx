import React, { useRef, useEffect, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import { Send } from 'lucide-react';
import { LoadingSpinner } from './LoadingSpinner';
import './ChatInput.css';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onChatStart?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  value, 
  onChange, 
  onChatStart, 
  isLoading = false, 
  disabled = false 
}) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (contentEditableRef.current) {
      const isEmpty = !value || value.trim() === '';
      setIsEmpty(isEmpty);
      
      if (value && contentEditableRef.current.textContent !== value) {
        // Parse and render the template
        const html = renderTemplate(value);
        contentEditableRef.current.innerHTML = html;
        
        // Focus on first placeholder if exists
        const firstPlaceholder = contentEditableRef.current.querySelector('.placeholder');
        if (firstPlaceholder) {
          selectPlaceholder(firstPlaceholder as HTMLElement);
        }
      } else if (!value) {
        contentEditableRef.current.innerHTML = '';
      }
    }
  }, [value]);

  const renderTemplate = (text: string): string => {
    // Replace {Placeholder} with styled spans
    return text.replace(/\{([^}]+)\}/g, '<span class="placeholder" contenteditable="true">{$1}</span>');
  };

  const selectPlaceholder = (element: HTMLElement) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleInput = () => {
    if (contentEditableRef.current) {
      const text = contentEditableRef.current.textContent || '';
      onChange(text);
      setIsEmpty(!text || text.trim() === '');
    }
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('placeholder')) {
      selectPlaceholder(target);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      
      if (!contentEditableRef.current) return;
      
      // Get all placeholders
      const placeholders = Array.from(contentEditableRef.current.querySelectorAll('.placeholder'));
      
      if (placeholders.length === 0) return;
      
      // Find current placeholder
      const selection = window.getSelection();
      if (!selection) return;
      
      let currentNode = selection.anchorNode;
      
      // If anchorNode is a text node, get its parent
      if (currentNode?.nodeType === Node.TEXT_NODE) {
        currentNode = currentNode.parentElement;
      }
      
      // Find which placeholder we're currently in or after
      let currentIndex = -1;
      for (let i = 0; i < placeholders.length; i++) {
        if (placeholders[i] === currentNode || placeholders[i].contains(currentNode as Node)) {
          currentIndex = i;
          break;
        }
      }
      
      // Navigate forward or backward based on Shift key
      let nextIndex: number;
      if (e.shiftKey) {
        // Shift+Tab: go to previous placeholder
        nextIndex = currentIndex <= 0 ? placeholders.length - 1 : currentIndex - 1;
      } else {
        // Tab: go to next placeholder
        nextIndex = currentIndex >= placeholders.length - 1 ? 0 : currentIndex + 1;
      }
      
      selectPlaceholder(placeholders[nextIndex] as HTMLElement);
    }
  };

  const handleSend = () => {
    if (value.trim() && !isLoading && !disabled) {
      console.log('Sending message:', value);
      onChatStart?.(); // Trigger chat start behavior
      onChange('');
      if (contentEditableRef.current) {
        contentEditableRef.current.innerHTML = '';
      }
    }
  };

  return (
    <div className="chat-input">
      <div className="chat-input__text-container">
        <div
          ref={contentEditableRef}
          className="chat-input__textarea"
          contentEditable={!disabled}
          onInput={handleInput}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          data-placeholder={isEmpty ? "Describe what you're looking to explore or start with a workflow..." : ""}
          suppressContentEditableWarning
          aria-label="Chat input"
          role="textbox"
          aria-multiline="true"
          {...(disabled && { 'aria-disabled': 'true' })}
        />
      </div>
      <div className="chat-input__button-container">
        <button 
          className={`send-button ${value.trim() && !isLoading ? 'send-button--active' : ''}`}
          aria-label={isLoading ? "Sending message..." : "Send message"}
          onClick={handleSend}
          disabled={!value.trim() || isLoading || disabled}
        >
          {isLoading ? (
            <LoadingSpinner size="small" />
          ) : (
            <Send size={20} />
          )}
        </button>
      </div>
    </div>
  );
};


