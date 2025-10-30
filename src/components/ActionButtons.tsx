import React, { useRef, useEffect } from 'react';
import { List, Target, DollarSign, Copy } from 'lucide-react';
import './ActionButtons.css';

const findCompaniesOptions = [
  'Find Companies in {Domain} Based in {Region} With {Criteria}',
  'List Startups Using {Technology} For {Use_case}',
  'Show Companies Offering {Offering} in {Industry}',
  'Start An Empty List'
];

const singleCompanyOptions = [
  'Tell Me About {Company}',
  'Analyze {Company} Across {Metrics}',
  'Find The Latest News About {Company}'
];

const findDealsOptions = [
  'List Transactions in {Sector} By {Buyer-type} At Size {Value}',
  'Show {Industry} Deals in {Region} in The Last {Years}',
  'List Deals By {Company} in {Market}'
];

interface ActionButtonsProps {
  activeButton: string | null;
  onButtonClick: (buttonName: string | null) => void;
  onOptionSelect: (option: string) => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  activeButton, 
  onButtonClick, 
  onOptionSelect 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Close options when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        buttonsRef.current &&
        !buttonsRef.current.contains(event.target as Node)
      ) {
        if (activeButton !== null) {
          onButtonClick(null);
        }
      }
    }

    if (activeButton !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeButton, onButtonClick]);

  const handleButtonClick = (buttonName: string) => {
    onButtonClick(activeButton === buttonName ? null : buttonName);
  };

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
  };

  const getOptionsForButton = () => {
    switch (activeButton) {
      case 'findCompanies':
        return findCompaniesOptions;
      case 'singleCompany':
        return singleCompanyOptions;
      case 'findDeals':
        return findDealsOptions;
      default:
        return [];
    }
  };

  const currentOptions = getOptionsForButton();

  return (
    <>
      <div className="action-buttons" ref={buttonsRef}>
        <button 
          className="action-button" 
          onClick={() => handleButtonClick('findCompanies')}
        >
          <List size={24} />
          <span>Find companies</span>
        </button>
        <button 
          className="action-button"
          onClick={() => handleButtonClick('singleCompany')}
        >
          <Target size={24} />
          <span>Single company</span>
        </button>
        <button 
          className="action-button"
          onClick={() => handleButtonClick('findDeals')}
        >
          <DollarSign size={24} />
          <span>Find deals</span>
        </button>
      </div>
      
      {currentOptions.length > 0 && (
        <div className="workflow-options" ref={containerRef}>
          {currentOptions.map((option, index) => (
            <button
              key={index}
              className="workflow-option"
              onClick={() => handleOptionClick(option)}
            >
              <span className="workflow-option__text">{option}</span>
              <Copy size={16} className="workflow-option__icon" />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

