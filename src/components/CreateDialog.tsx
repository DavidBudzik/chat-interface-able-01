import React from 'react';
import { Modal } from './Modal';
import './CreateDialog.css';

interface CreateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  label: string;
  placeholder: string;
  onSubmit: (value: string) => void;
  submitButtonText?: string;
  cancelButtonText?: string;
}

export const CreateDialog: React.FC<CreateDialogProps> = ({
  isOpen,
  onClose,
  title,
  label,
  placeholder,
  onSubmit,
  submitButtonText = 'Create',
  cancelButtonText = 'Cancel'
}) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
      onClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setValue('');
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      showCloseButton={false}
      className="create-dialog-modal"
    >
      <div className="create-dialog">
        <div className="create-dialog__header">
          <h2 className="create-dialog__title">{title}</h2>
        </div>
        <div className="create-dialog__form">
          <div className="create-dialog__field">
            <label className="create-dialog__label">{label}</label>
            <input
              type="text"
              className="create-dialog__input"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </div>
        </div>
        <div className="create-dialog__footer">
          <button
            className="create-dialog__button create-dialog__button--tertiary"
            onClick={onClose}
          >
            {cancelButtonText}
          </button>
          <button
            className="create-dialog__button create-dialog__button--primary"
            onClick={handleSubmit}
            disabled={!value.trim()}
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

