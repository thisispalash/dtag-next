import clsx from 'clsx';

import Modal, { ModalProps } from './base';

export default function InfoModal({ isOpen, onClose }: ModalProps) {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      <div className='flex flex-col gap-6 justify-center'>

        <div className='flex flex-row items-center justify-between mb-2'>
          <h1 className='text-3xl font-heading text-left'>What even is dTAG?</h1>

          <span 
            onClick={onClose}
            className={clsx(
              'cursor-pointer',
              'font-heading text-4xl',
              'text-secondary hover:text-foreground',
              'transition-all duration-100'
            )}
          >
            &times;
          </span>
        </div>

        
      
      </div>


    </Modal>
  );
}