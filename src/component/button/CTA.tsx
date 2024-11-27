import clsx from 'clsx';

export interface CTAProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  onClick: () => void;
}

export default function CTA({
  label,
  size = 'md',
  variant = 'primary',
  onClick,
}: CTAProps) {

  return (
    <button 
      className={clsx(
        'rounded-lg border',
        'font-terminal font-medium capitalize',
        {
          'border-primary bg-primary text-background hover:bg-background hover:text-primary': variant === 'primary',
          'border-secondary text-secondary hover:bg-secondary hover:text-background': variant === 'secondary',
        },
        {
          'p-1 text-sm': size === 'sm',
          'px-2 py-1 text-base': size === 'md',
          'px-3 py-1 text-lg': size === 'lg',
        },
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}