import clsx from 'clsx';
import { useState } from 'react';

import Modal, { ModalProps } from './base';

export default function SubscribeModal({ isOpen, onClose }: ModalProps) {

  const [ email, setEmail ] = useState('');
  const [ signature, setSignature ] = useState('');

  const [ connected, setConnected ] = useState(false);
  const [ signed, setSigned ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);

  const connectWallet = () => {

  }

  const signMessage = () => {

  }

  const submitEmail = () => {

  }

  const handleClick = () => {
    if (!connected) return connectWallet();
    if (!signed) return signMessage();
    return submitEmail();
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      {subscribed ? (
        <div className='flex flex-col justify-center'>


          <div className='flex flex-row items-center justify-between mb-2'>
            <h1 className='text-3xl font-heading text-left'>WAGMI !</h1>

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

          <p className='text-lg text-secondary'>
            Great! Please check your inbox for a confirmation link. Click the link to confirm your subscription. We will only email you if you have confirmed.
          </p>


        </div>
      ) : (
        <div className='flex flex-col gap-6 justify-center'>

          <div className='flex flex-row items-center justify-between mb-2'>
            <h1 className='text-3xl font-heading text-left'>Get Notified?</h1>

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


          <p className='text-lg text-secondary'>
            dTAG has not launched just yet.. but you can be notified when we do! Enter your email below to be notified when we launch..
          </p>

          <form className='flex flex-row items-center justify-center gap-3'>

            <input
              type='email'
              placeholder='Enter your email'
              className={clsx(
                'px-3 py-1.5 w-2/3 shadow-sm',
                'border rounded-md border-border',
                'bg-transparent focus-visible:bg-foreground',
                'text-secondary focus-visible:text-background placeholder:text-muted-foreground',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
                'text-lg',
                'focus-visible:font-terminal placeholder:font-body',
                'transition-all duration-100'
              )}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type='button'
              className={clsx(
                'rounded-lg border',
                'px-3 py-1 text-lg',
                'font-terminal font-medium capitalize',
                'border-primary bg-primary text-background hover:bg-background hover:text-primary'
              )}
              onClick={handleClick}
            >
              {!connected ? 
                'Connect Wallet' 
              : !signed ? 
                'Sign Message' 
              : 
                'Get Notified!'
              }
            </button>

          </form>

        </div>
      )}


    </Modal>
  );
}