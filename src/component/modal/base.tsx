import clsx from 'clsx';
import { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  
  // Close modal when clicking escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 z-50',
          'bg-background/80 backdrop-blur-sm',
          'transition-all duration-100',
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={clsx(
          'fixed left-[50%] top-[50%] z-50 p-8',
          'w-full max-w-3xl translate-x-[-50%] translate-y-[-50%]',
          'border border-border rounded-lg',
          'bg-card text-card-foreground',
          'shadow-lg',
          'transition-all duration-100',
        )}
      >
        {children}
      </div>
    </>
  );
}