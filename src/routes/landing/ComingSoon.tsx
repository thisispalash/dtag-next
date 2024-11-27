import clsx from 'clsx';

import CTA from '@/component/button/CTA';

export default function ComingSoon() {

  const handleSubscribe = () => {

    // open modal

  }

  const handleInfo = () => {

    // open modal

  }


  return (
    <main className={clsx(
      'h-screen w-full',
      'flex flex-col items-center justify-between',
    )}>

      {/* Wallet */}
      <div className={clsx(
        'p-8 w-full',
        'flex flex-row justify-between',
      )}>

        {/* <ConnectWallet /> */}

        <span 
          onClick={handleInfo}
          className={clsx(
            'px-2 py-1 cursor-pointer',
            'text-2xl font-heading',
            'text-secondary hover:text-primary',

          )}
        >
          &nbsp;i&nbsp;
        </span>



      </div>

      {/* Footer */}
      <div className={clsx(
        'p-8 w-full',
        'flex flex-col gap-4 justify-end',
      )}>

        <div className={clsx(
          'flex flex-col gap-4',
          'text-right',
        )}>

          <span className={clsx(
            'text-5xl text-primary',
            'font-heading',
          )}>
            decentralized Text Adventure Games
          </span>


          <span className={clsx(
            'text-xl text-secondary',
            'font-body',
          )}>
            Create, or play, text adventure games powered by NFTs!
          </span>

        </div>

        <div className={clsx(
          'w-full',
          'flex flex-row gap-4 justify-end',
        )}>

          <CTA label='Get notified!' onClick={handleSubscribe} size='lg' />

        </div>


      </div>

    </main>
  )
}
