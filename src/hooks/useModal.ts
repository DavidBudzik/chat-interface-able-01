import { useState, useEffect, useRef } from 'react';

interface UseModalOptions {
  onOpen?: () => void;
  onClose?: () => void;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}

export const useModal = (options: UseModalOptions = {}) => {
  const {
    onOpen,
    onClose,
    closeOnEscape = true,
    closeOnOutsideClick = true
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const open = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const close = () => {
    setIsOpen(false);
    onClose?.();
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  return {
    isOpen,
    open,
    close,
    toggle,
    modalRef
  };
};
