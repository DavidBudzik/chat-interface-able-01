import React from 'react';
import './SuggestionChips.css';

interface SuggestionChipsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export const SuggestionChips: React.FC<SuggestionChipsProps> = ({ 
  suggestions, 
  onSuggestionClick 
}) => {
  return (
    <div className="suggestion-chips">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className="suggestion-chip"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};
